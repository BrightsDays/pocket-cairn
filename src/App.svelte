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
  import Loading from './lib/ui/Loading.svelte'
  import Modal from './lib/ui/Modal.svelte'
  import { companions } from './store/companionsStore'

  let showModal = false
  let showForm = false
  let loading = true

  const toggleForm = () => {
    showForm = !showForm
  }

  const closeModal = () => {
    showModal = false
    localStorage.setItem('pc_modal_1.11', 'shown')
  }

  const setCharacter = () => {
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
      companions.set(JSON.parse(character).companions || [])
    }

    return true
  }

  onMount(() => {
    localStorage.removeItem('pc_modal_1.12')
    if (!localStorage.getItem('pc_modal_1.11')) showModal = true
    setCharacter()
    setTimeout(() => (loading = false), 200)
  })
  // TODO: Fix code ;)
  // TODO: Write tests
</script>

<main>
  {#if loading}
    <Loading />
  {:else if $name}
    <Character />
  {:else if !showForm}
    <Creation on:show-form={toggleForm} />
  {:else}
    <Form on:hide-form={toggleForm} />
  {/if}

  <Modal isShown={showModal} submission on:cancel={closeModal}>
    <span
      >This is a new version of the app and you can now create characters for
      Cairn 2ed!
    </span><br />
    <span>
      If you find any bug, please<br />
      <a href="https://brightsdays.github.io/contacts/" target="_blank"
        >let me know</a
      > :)
    </span>
  </Modal>
</main>

<style lang="scss" scoped>
  main {
    min-width: 320px;
    max-width: 768px;
    height: 100svh;
    max-height: 1024px;
  }
</style>
