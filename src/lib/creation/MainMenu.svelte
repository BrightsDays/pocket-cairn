<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from '../ui/Button.svelte'
  import uploadCharacter from '../../utils/uploadCharacter'
  import FileInput from '../ui/FileInput.svelte'
  import { name } from '../../store/characterStore'
  import Modal from '../ui/Modal.svelte'

  const dispatch = createEventDispatcher()
  let showModal = false

  const rollHandler = () => {
    dispatch('show-form')
  }

  const uploadHandler = (event: CustomEvent) => {
    uploadCharacter(event.detail)
    if (!$name.length) showModal = true
  }
</script>

<div class="menu">
  <Button on:click={rollHandler}>Roll a character</Button>
  <FileInput on:change={(event) => uploadHandler(event)} />
</div>

<Modal submission isShown={showModal} on:cancel={() => (showModal = false)}>
  Wrong file type or json structure
</Modal>

<style lang="scss" scoped>
  @import '../../app.scss';

  .menu {
    display: flex;
    position: relative;
    flex-direction: column;
    @include gap(8);
    box-sizing: border-box;
  }
</style>
