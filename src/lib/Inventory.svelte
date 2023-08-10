<script lang="ts">
  import { inventoryStore } from '../store/stores'

  const inventory = $inventoryStore
</script>

<div class="inventory">
  <div class="heading">
    <span class="info">Hand</span>
    <span class="info">Fatigue</span>
  </div>
  <div class="list">
    {#each inventory as item}
      <div class="item">
        <input type="checkbox" />
        <input placeholder="Item" value={item.title} />
        <input type="checkbox" />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .inventory {
    .list {
      .item {
        width: 100%;
      }
    }
  }
</style>
