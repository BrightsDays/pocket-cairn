<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from '../ui/Button.svelte'
  import uploadCharacter from '../../utils/uploadCharacter'
  import FileInput from '../ui/FileInput.svelte'
  import { name } from '../../store/characterStore'
  import Modal from '../ui/Modal.svelte'
  import convertCharacter from '../../utils/convertCharacter'

  const dispatch = createEventDispatcher()
  let showModal = false
  let convertModal = false

  const rollHandler = () => {
    dispatch('show-form')
  }

  const showConvert = () => {
    convertModal = !convertModal
  }

  const uploadHandler = (event: CustomEvent) => {
    uploadCharacter(event.detail)
    if (!$name.length) showModal = true
  }

  const convertHandler = (event: CustomEvent) => {
    convertCharacter(event.detail)
    showConvert()
    if (!$name.length) showModal = true
  }
</script>

<div class="menu">
  <Button on:click={rollHandler}>Roll a character</Button>
  <Button on:click={showConvert}>Convert 1e to 2e</Button>
  {#if !convertModal}
    <FileInput on:change={(event) => uploadHandler(event)} />
  {:else}
    <Button disabled>Upload the character</Button>
  {/if}
</div>

<Modal submission isShown={showModal} on:cancel={() => (showModal = false)}>
  Wrong json structure
</Modal>

<Modal submission isShown={convertModal} on:cancel={showConvert}>
  <div class="convert">
    <span>
      You can turn your 1st Edition character into a 2nd Edition character,
      giving you new options.
    </span>
    <span>You cannot convert back a 2nd edition character.</span>
  </div>
  <FileInput on:change={(event) => convertHandler(event)} />
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

  .convert {
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
    @include gap(4);
  }
</style>
