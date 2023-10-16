<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from '../ui/Button.svelte'
  import uploadCharacter from '../../utils/uploadCharacter'
  import FileInput from '../ui/FileInput.svelte'
  import { name } from '../../store/characterStore'
  import Modal from '../ui/Modal.svelte'

  const dispatch = createEventDispatcher()
  let showModal = false

  const uploadHandler = (event: CustomEvent) => {
    uploadCharacter(event.detail)
    if (!$name.length) showModal = true
  }
</script>

<div class="menu">
  <Button on:click={() => dispatch('show-form')}>Roll a character</Button>
  <FileInput on:change={(event) => uploadHandler(event)} />
  <Button disabled>Characters list</Button>
  <Button disabled>Warden space</Button>
</div>
<Modal submission isShown={showModal} on:cancel={() => (showModal = false)}>
  Wrong file type or json structure
</Modal>

<style lang="scss" scoped>
  .menu {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: calc(8px + 1.5625vw);
    box-sizing: border-box;
  }
</style>
