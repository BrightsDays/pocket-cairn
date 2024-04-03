<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from '../ui/Button.svelte'
  import Input from '../ui/TextInput.svelte'
  import {
    abilities,
    coins,
    inventory,
    name,
    stats,
  } from '../../store/characterStore'
  import rollDices from '../../utils/rollDices'
  import setLocalCharacter from '../../utils/setLocalCharacter'
  import startingInventory from '../../utils/startingInventory'
  import SelectInput from '../ui/SelectInput.svelte'
  import { gearPackages } from '../data/gearPackages'
  import { notes } from '../../store/notesStore'
  import { biography } from '../../store/biographyStore'
  import {
    background,
    clothing,
    face,
    femaleNames,
    hair,
    maleNames,
    misfortune,
    phisique,
    reputation,
    skin,
    speech,
    surnames,
    vice,
    virtue,
  } from '../data/traits'
  import dice from '../../assets/icons/dice.svg'
  import { fade } from 'svelte/transition'
  import { edition } from '../../store/editionStore'
  import { secondEdBacks } from '../data/secondEdBacks'

  const dispatch = createEventDispatcher()

  const secondEdBack =
    $edition === 'second'
      ? secondEdBacks[rollDices(1, secondEdBacks.length) - 1]
      : null
  const firstPerk = secondEdBack?.firstPerk.list[rollDices(1, 6) - 1]
  const secondPerk = secondEdBack?.secondPerk.list[rollDices(1, 6) - 1]

  let character = {
    name: secondEdBack
      ? secondEdBack.names[rollDices(1, secondEdBack.names.length - 1)]
      : '',
    str: rollDices(3, 6),
    dex: rollDices(3, 6),
    wil: rollDices(3, 6),
    hp: rollDices(1, 6),
    gp: secondEdBack ? rollDices(secondEdBack.goldDices, 6) : rollDices(3, 6),
  }
  let gearList = ['random', ...gearPackages().map((item) => item.title)]
  let selectedGear: string = gearList[0]
  let statsForChange = []

  const setRandomName = () => {
    const firstName =
      rollDices(1, 2) === 1
        ? femaleNames[rollDices(1, 20)]
        : maleNames[rollDices(1, 20)]
    character.name = `${firstName} ${surnames[rollDices(1, 20)]}`
  }

  const statHandler = (stat: string) => {
    if (!statsForChange.includes(stat)) {
      if (statsForChange.length >= 2) return
      statsForChange = [...statsForChange, stat]
    } else {
      const index = statsForChange.indexOf(stat, 0)

      if (index !== -1) {
        statsForChange.splice(index, 1)
        statsForChange = [...statsForChange]
      }
    }
  }

  const createCharacter = () => {
    if (statsForChange.length === 2) {
      const a = character[statsForChange[0]]
      const b = character[statsForChange[1]]

      character[statsForChange[0]] = b
      character[statsForChange[1]] = a
    }

    name.set(character.name)
    abilities.set({
      str: character.str,
      dex: character.dex,
      wil: character.wil,
      strMax: character.str,
      dexMax: character.dex,
      wilMax: character.wil,
    })
    stats.set({
      hp: character.hp,
      hpMax: character.hp,
      armor: 0,
      deprived: false,
    })
    coins.set({
      gp: character.gp.toString(),
      sp: '0',
      cp: '0',
    })

    if ($edition === 'second') {
      inventory.set(secondEdBack.inventory)
      biography.set({
        background: secondEdBack.title,
        description: secondEdBack.description,
        firstPerk: {
          title: secondEdBack.firstPerk.title,
          content: firstPerk.content,
        },
        secondPerk: {
          title: secondEdBack.secondPerk.title,
          content: secondPerk.content,
        },
        //TODO: add bonds, petty and bio items
      })
      notes.set(`Age: ${rollDices(2, 20) + 10}. 
You have an ${phisique[rollDices(1, 10)]} physique, ${
        skin[rollDices(1, 10)]
      } skin, ${hair[rollDices(1, 10)]} hair, and a ${face[rollDices(1, 10)]} face.
You speak in a ${speech[rollDices(1, 10)]} manner and wear ${
        clothing[rollDices(1, 10)]
      } clothing.
You are ${vice[rollDices(1, 10)]} yet ${virtue[rollDices(1, 10)]}.`)
    } else if ($edition === 'first') {
      inventory.set(
        selectedGear === 'random'
          ? startingInventory()
          : gearPackages().find((item) => item.title === selectedGear).inventory
      )
      notes.set(`Age: ${rollDices(2, 20) + 10}, formerly a ${
        background[rollDices(1, 20)]
      }.
You have an ${phisique[rollDices(1, 10)]} physique, ${
        skin[rollDices(1, 10)]
      } skin, ${hair[rollDices(1, 10)]} hair, and a ${face[rollDices(1, 10)]} face.
You speak in a ${speech[rollDices(1, 10)]} manner and wear ${
        clothing[rollDices(1, 10)]
      } clothing.
You are ${vice[rollDices(1, 10)]} yet ${
        virtue[rollDices(1, 10)]
      }, and are generally regarded as ${reputation[rollDices(1, 10)]}.
You have had the misfortune of being ${misfortune[rollDices(1, 10)]}.`)
    }

    setLocalCharacter()
    dispatch('hide-form')
  }
</script>

<div
  class="form"
  in:fade={{ delay: 200, duration: 200 }}
  out:fade={{ duration: 200 }}
>
  <h2 class="title">Create a character</h2>
  <div class="name">
    <Input
      value={character.name}
      placeholder="Name"
      paddingRight="45px"
      on:input={(event) => (character.name = event.detail)}
    />
    <div class="dice">
      <Button borderless image={dice} height={25} on:click={setRandomName} />
    </div>
  </div>

  <section class="wrap">
    <div class="heading">
      <span class="text">Stats</span>
    </div>
    <div class="stats">
      {#each ['str', 'dex', 'wil'] as stat}
        <button
          ontouchstart=""
          disabled={!statsForChange.includes(stat) &&
            statsForChange.length >= 2}
          class={`item${statsForChange.includes(stat) ? ' selected' : ''}`}
          on:click={() => statHandler(stat)}
        >
          {stat}: {character[stat]}
        </button>
      {/each}
      <span class="info">
        You can swap two of your stats by selecting or deselecting them with a
        click, and the change will take effect after character creation.
      </span>
    </div>
  </section>

  {#if $edition === 'second'}
    <section class="wrap">
      <div class="heading">
        <span class="text"> Background </span>
      </div>
      <div class="inventory">
        <span class="background">{secondEdBack.title}</span>
        <span class="info">{secondEdBack.description}</span>
      </div>
    </section>
  {:else}
    <section class="wrap">
      <div class="heading">
        <span class="text">Starting gear</span>
      </div>
      <div class="inventory">
        <SelectInput
          options={gearList}
          value={selectedGear}
          on:select={(value) => (selectedGear = value.detail)}
        />
        <span class="info">
          You can use randomly generated starting gear or choose one of the
          starting packages.
        </span>
        {#if selectedGear !== 'random'}
          <div class="items-list">
            {#each gearPackages().find((item) => item.title === selectedGear).inventory as item}
              {#if item.title}<span class="item">{item.title}</span>{/if}
            {/each}
          </div>
        {/if}
      </div>
    </section>
  {/if}

  <div class="controls">
    <Button on:click={() => dispatch('hide-form')}>Back</Button>
    <Button
      on:click={() => createCharacter()}
      disabled={character.name ? false : true}>Save</Button
    >
  </div>
</div>

<style lang="scss" scoped>
  @import '../../app.scss';

  .form {
    display: flex;
    height: 100%;
    flex-direction: column;
    @include gap(12);
    @include padding(32, 8);
    box-sizing: border-box;

    .title {
      margin-bottom: calc(8px + 1.5625vw);
      font-size: var(--font-big);
      font-weight: 500;
      @media screen and (min-width: 768px) {
        margin-bottom: calc(4px + 0.5625vw);
      }
    }

    .name {
      display: flex;
      position: relative;

      .dice {
        position: absolute;
        width: 25px;
        height: 25px;
        top: calc(0px + 1.5625vw);
        right: calc(2px + 1.5625vw);
        @media screen and (min-width: 768px) {
          top: calc(0px + 0.5625vw);
          right: calc(1px + 0.5625vw);
        }
      }
    }

    .wrap {
      display: flex;
      flex-direction: column;
      @include gap(0);

      .heading {
        display: flex;
        position: relative;
        width: 100%;
        padding-left: 10px;
        color: var(--main);
        box-sizing: border-box;
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          border-bottom: 1px solid var(--second);
        }

        .text {
          position: relative;
          padding: 0 5px;
          background-color: var(--background);
          z-index: 1;
        }
      }

      .background {
        font-size: var(--font-medium);
        text-transform: uppercase;
        color: var(--main);
      }

      .info {
        color: var(--second);
        grid-area: 2/1/2/4;
      }
    }

    .stats {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      @include gap(8);

      .item {
        padding: 4px;
        font-size: var(--font-medium);
        text-transform: uppercase;
        color: var(--main);
        border: 1px solid var(--main);
        border-radius: 5px;
        background: none;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        &.selected {
          background-color: var(--second-background);
        }
        &:hover {
          opacity: 0.8;
        }
        &:active {
          transform: scale(0.9);
          transition: 0.1s;
        }
        &:disabled {
          opacity: 0.2;
          pointer-events: none;
        }
      }
    }

    .inventory {
      display: flex;
      flex-direction: column;
      @include gap(8);

      .items-list {
        .item {
          &:not(:last-child) {
            &:after {
              content: ', ';
            }
          }
        }
      }
    }

    .controls {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: auto;
      @include gap(8);
    }
  }
</style>
