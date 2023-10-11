<script lang="ts">
  import Character from './lib/character/Character.svelte'
  import Creation from './lib/creation/Creation.svelte'
  import { nameStore } from './store/stores'

  let name = $nameStore
  nameStore.subscribe((value) => (name = value))
</script>

<main>
  {#if name}
    <Character />
  {:else}
    <Creation />
  {/if}
</main>
