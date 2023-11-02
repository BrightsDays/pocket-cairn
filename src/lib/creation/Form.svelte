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
  import Section from '../ui/Section.svelte'

  const dispatch = createEventDispatcher()

  let character = {
    name: '',
    str: rollDices(3, 6),
    dex: rollDices(3, 6),
    wil: rollDices(3, 6),
    hp: rollDices(1, 6),
    gp: rollDices(3, 6),
  }
  let gearList = ['random', ...gearPackages().map((item) => item.title)]
  let selectedGear: string = gearList[0]
  let statsForChange = []

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
    inventory.set(
      selectedGear === 'random'
        ? startingInventory()
        : gearPackages().find((item) => item.title === selectedGear).inventory
    )

    setLocalCharacter()
  }
</script>

<div class="form">
  <h2 class="title">Create a character</h2>
  <div class="name">
    <Input
      value={character.name}
      placeholder="Name"
      on:input={(event) => (character.name = event.detail)}
    />
  </div>

  <section class="wrap">
    <div class="heading">
      <span class="text">Stats</span>
    </div>
    <div class="stats">
      {#each ['str', 'dex', 'wil'] as stat}
        <button
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

    .title {
      margin-bottom: calc(8px + 1.5625vw);
      font-weight: 500;
    }

    .name {
      display: flex;
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
        font-size: 1.6em;
        text-transform: uppercase;
        color: var(--main);
        border: 1px solid var(--main);
        border-radius: 5px;
        background: none;
        &.selected {
          background-color: var(--second-background);
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
