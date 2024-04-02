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
  import checkJson from './utils/checkJson'
  import { notes } from './store/notesStore'
  import Form from './lib/creation/Form.svelte'

  let nameValue = $name
  let showForm = false
  name.subscribe((value) => (nameValue = value))

  const toggleForm = () => {
    showForm = !showForm
  }

  onMount(() => {
    const character = localStorage.getItem('pc__character')

    if (character && checkJson(JSON.parse(character))) {
      name.set(JSON.parse(character).name)
      abilities.set(JSON.parse(character).abilities)
      stats.set(JSON.parse(character).stats)
      coins.set(JSON.parse(character).coins)
      inventory.set(JSON.parse(character).inventory)
      scars.set(JSON.parse(character).scars)
      notes.set(JSON.parse(character).notes)
    }
  })
</script>

<main>
  {#if nameValue}
    <Character />
  {:else if !showForm}
    <Creation on:show-form={toggleForm} />
  {:else}
    <Form on:hide-form={toggleForm} />
  {/if}
</main>

<style lang="scss" scoped>
  main {
    min-width: 320px;
    max-width: 768px;
    height: 100svh;
    max-height: 1024px;
  }
</style>
