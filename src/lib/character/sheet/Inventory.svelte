<script lang="ts">
  import { inventoryStore } from '../../../store/characterStore'
  import setLocalCharacter from '../../../utils/setLocalCharacter'
  import Checkbox from '../../ui/Checkbox.svelte'
  import Input from '../../ui/TextInput.svelte'

  const inventory = $inventoryStore

  const changeInventory = () => {
    inventoryStore.set(inventory)
    setLocalCharacter()
  }
</script>

<div class="inventory">
  <div class="heading">
    <span class="info">Hand</span>
    <span class="info">Fatigue</span>
  </div>
  <div class="list">
    {#each inventory as item}
      <div class="item">
        <Checkbox
          size={20}
          checked={item.inHand}
          on:change={() => {
            item.inHand = !item.inHand
            changeInventory()
          }}
        />
        <Input
          placeholder="Item"
          value={item.title}
          border={false}
          on:input={(event) => {
            item.title = event.detail
            changeInventory()
          }}
        />
        <Checkbox
          size={20}
          checked={item.fatigue}
          on:change={() => {
            item.fatigue = !item.fatigue
            changeInventory()
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
