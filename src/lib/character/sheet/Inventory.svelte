<script lang="ts">
  import { inventory } from '../../../store/characterStore'
  import Checkbox from '../../ui/Checkbox.svelte'
  import Input from '../../ui/TextInput.svelte'

  const inventoryList = $inventory
</script>

<div class="inventory">
  <div class="heading">
    <span class="info">Hand</span>
    <span class="info">Fatigue</span>
  </div>
  <div class="list">
    {#each inventoryList as item}
      <div class="item">
        <Checkbox
          size={20}
          checked={item.inHand}
          on:change={() => {
            item.inHand = !item.inHand
            inventory.change(inventoryList)
          }}
        />
        <Input
          placeholder="Item"
          value={item.title}
          border={false}
          on:input={(event) => {
            item.title = event.detail
            inventory.change(inventoryList)
          }}
        />
        <Checkbox
          size={20}
          checked={item.fatigue}
          on:change={() => {
            item.fatigue = !item.fatigue
            inventory.change(inventoryList)
          }}
        />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .inventory {
    .heading {
      display: flex;
      width: 100%;
      justify-content: space-between;

      .info {
        color: var(--second);
      }
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 1vw;

      .item {
        position: relative;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--main);
      }
    }
  }
</style>
