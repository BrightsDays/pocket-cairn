<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from '../ui/Button.svelte'
  import uploadCharacter from '../../utils/uploadCharacter'
  import FileInput from '../ui/FileInput.svelte'

  const dispatch = createEventDispatcher()
</script>

<div class="menu">
  <Button on:click={() => dispatch('show-form')}>Roll a character</Button>
  <FileInput on:change={(event) => uploadCharacter(event.detail)} />
  <Button disabled>Characters list</Button>
  <Button disabled>Warden space</Button>
</div>

<style lang="scss" scoped>
  .menu {
    display: flex;
    flex-direction: column;
    gap: calc(8px + 1.5625vw);
  }
</style>
