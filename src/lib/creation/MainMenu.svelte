<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from '../ui/Button.svelte'

  const dispatch = createEventDispatcher()
</script>

<div class="menu">
  <Button on:click={() => dispatch('show-form')}>Fast Creation</Button>
  <Button disabled>Upload character (json)</Button>
  <Button disabled>Custom creation</Button>
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
