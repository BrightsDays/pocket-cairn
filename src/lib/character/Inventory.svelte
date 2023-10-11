<script lang="ts">
  import { inventoryStore } from '../../store/stores'
  import Item from '../ui/Item.svelte'

  const inventory = $inventoryStore
</script>

<div class="inventory">
  <div class="heading">
    <span class="info">Hand</span>
    <span class="info">Fatigue</span>
  </div>
  <div class="list">
    {#each inventory as item}
      <Item value={item.title} />
    {/each}
  </div>
</div>

<style lang="scss">
  .inventory {
    .heading {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 1vw;
    }
  }
</style>
