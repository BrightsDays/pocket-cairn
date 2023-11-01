<script lang="ts">
  import { onMount } from 'svelte'
  import Character from './lib/character/Character.svelte'
  import Creation from './lib/creation/Creation.svelte'
  import {
    abilities,
    coins,
    inventory,
    name,
    stats,
  } from './store/characterStore'
  import { scars } from './store/scarsStore'

  let nameValue = $name
  name.subscribe((value) => (nameValue = value))

  onMount(() => {
    const character = localStorage.getItem('pc__character')

    if (character) {
      name.set(JSON.parse(character).name)
      abilities.set(JSON.parse(character).abilities)
      stats.set(JSON.parse(character).stats)
      coins.set(JSON.parse(character).coins)
      inventory.set(JSON.parse(character).inventory)
      scars.set(JSON.parse(character).scars)
    }
  })
</script>

<main>
  {#if nameValue}
    <Character />
  {:else}
    <Creation />
  {/if}
</main>
