<script lang="ts">
  import { onMount } from 'svelte'
  import Character from './lib/character/Character.svelte'
  import Creation from './lib/creation/Creation.svelte'
  import {
    abilitiesStore,
    coinsStore,
    inventoryStore,
    nameStore,
    statsStore,
  } from './store/characterStore'

  let name = $nameStore
  nameStore.subscribe((value) => (name = value))

  onMount(() => {
    const character = localStorage.getItem('pc__character')

    if (character) {
      nameStore.set(JSON.parse(character).name)
      abilitiesStore.set(JSON.parse(character).abilities)
      statsStore.set(JSON.parse(character).stats)
      coinsStore.set(JSON.parse(character).coins)
      inventoryStore.set(JSON.parse(character).inventory)
    }
  })
</script>

<main>
  {#if name}
    <Character />
  {:else}
    <Creation />
  {/if}
</main>
