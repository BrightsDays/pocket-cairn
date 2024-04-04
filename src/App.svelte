<script lang="ts">
  import { onMount } from 'svelte'
  import Character from './lib/character/Character.svelte'
  import Creation from './lib/creation/Creation.svelte'
  import {
    abilities,
    coins,
    inventory,
    name,
    petty,
    stats,
  } from './store/characterStore'
  import { scars } from './store/scarsStore'
  import checkJson from './utils/checkJson'
  import { notes } from './store/notesStore'
  import Form from './lib/creation/Form.svelte'
  import { edition } from './store/editionStore'
  import { biography } from './store/biographyStore'

  let nameValue = $name
  let showForm = false
  name.subscribe((value) => (nameValue = value))

  const toggleForm = () => {
    showForm = !showForm
  }

  onMount(() => {
    const character = localStorage.getItem('pc__character')

    if (character && checkJson(JSON.parse(character))) {
      edition.set(JSON.parse(character).edition)
      name.set(JSON.parse(character).name)
      abilities.set(JSON.parse(character).abilities)
      stats.set(JSON.parse(character).stats)
      coins.set(JSON.parse(character).coins)
      inventory.set(JSON.parse(character).inventory)
      petty.set(JSON.parse(character).petty)
      scars.set(JSON.parse(character).scars)
      notes.set(JSON.parse(character).notes)
      biography.set(JSON.parse(character).biography)
    }
  })
  //TODO: add loading
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
