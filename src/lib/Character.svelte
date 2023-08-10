<script lang="ts">
  import { nameStore } from '../store/stores'
  import Abilities from './Abilities.svelte'
  import Inventory from './Inventory.svelte'
  import Stats from './Stats.svelte'

  let name = $nameStore
</script>

<div class="character">
  <h1 class="name">~ {name} ~</h1>
  <Abilities />
  <Stats />
  <div class="coins" />
  <Inventory />
</div>

<style lang="scss">
  .character {
    .name {
      margin: 0 0 5vw;
      color: var(--main);
    }
  }
</style>
