<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from '../ui/Button.svelte'
  import Input from '../ui/TextInput.svelte'
  import { abilities, coins, name, stats } from '../../store/characterStore'
  import rollDices from '../../utils/rollDices'
  import setLocalCharacter from '../../utils/setLocalCharacter'

  const dispatch = createEventDispatcher()

  let character = {
    name: '',
    str: rollDices(3, 6),
    dex: rollDices(3, 6),
    wil: rollDices(3, 6),
    hp: rollDices(1, 6),
    gp: rollDices(3, 6),
  }

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

    setLocalCharacter()
  }
  //TODO: add starter item sets
</script>

<div class="form">
  <h2 class="title">Create character</h2>
  <div class="name">
    <Input
      value={character.name}
      placeholder="Name"
      on:input={(event) => (character.name = event.detail)}
    />
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

  <div class="controls">
    <Button on:click={() => dispatch('hide-form')}>Back</Button>
    <Button
      on:click={() => createCharacter()}
      disabled={character.name ? false : true}>Save</Button
    >
  </div>
</div>

<style lang="scss" scoped>
  .form {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: calc(16px + 1.5625vw);

    .title {
      margin-bottom: calc(8px + 1.5625vw);
    }

    .name {
      display: flex;
    }

    .stats {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: calc(8px + 1.5625vw);

      .item {
        padding: 4px;
        font-size: 1.6em;
        text-transform: uppercase;
        border: 1px solid var(--main);
        border-radius: calc(1px + 1.5625vw);
        background: none;
        &.selected {
          background-color: var(--second-background);
        }
      }

      .info {
        grid-area: 2/1/2/4;
      }
    }

    .controls {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: auto;
      gap: calc(8px + 1.5625vw);
    }
  }
</style>
