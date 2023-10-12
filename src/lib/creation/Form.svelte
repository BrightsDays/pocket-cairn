<script>
  import { createEventDispatcher } from 'svelte'
  import Button from '../ui/Button.svelte'
  import Input from '../ui/Input.svelte'
  import {
    abilitiesStore,
    coinsStore,
    nameStore,
    statsStore,
  } from '../../store/stores'
  import rollDices from '../../utils/rollDices'

  const dispatch = createEventDispatcher()

  let character = {
    name: '',
    str: rollDices(3, 6),
    dex: rollDices(3, 6),
    wil: rollDices(3, 6),
    hp: rollDices(3, 6),
    gp: rollDices(3, 6),
  }

  const createCharacter = () => {
    nameStore.set(character.name)
    abilitiesStore.set({
      str: character.str,
      dex: character.dex,
      wil: character.wil,
      strMax: character.str,
      dexMax: character.dex,
      wilMax: character.wil,
    })
    statsStore.set({
      hp: character.hp,
      hpMax: character.hp,
      armor: 0,
      deprived: false,
    })
    coinsStore.set({
      gp: character.gp.toString(),
      sp: '0',
      cp: '0',
    })
  }
</script>

<div class="form">
  <h1>Create character</h1>
  <div class="name">
    <span>Name: </span>
    <Input
      value={character.name}
      on:input={(event) => (character.name = event.detail)}
    />
  </div>

  <div class="stats">
    {#each ['str', 'dex', 'wil'] as stat}
      <div class="item">
        {stat}: {character[stat]}
      </div>
    {/each}
    <span class="info">
      Ypu can swap two of your stats - select or unselect them by click, and
      change will take effect after character creation.
    </span>
  </div>

  <div class="controls">
    <Button on:click={() => createCharacter()}>Save</Button>
    <Button on:click={() => dispatch('hide-form')}>Back</Button>
  </div>
</div>
