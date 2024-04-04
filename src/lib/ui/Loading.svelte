<script lang="ts">
  import { fade } from 'svelte/transition'
</script>

<div out:fade={{ duration: 200 }} class="loading" />

<style lang="scss">
  .loading {
    position: fixed;
    width: 100svw;
    height: 100svh;
    background: var(--background);
    z-index: 2;
  }
</style>
