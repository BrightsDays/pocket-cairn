<script lang="ts">
  import { petty } from '../../../store/characterStore'
  import Input from '../../ui/TextInput.svelte'

  const pettyList = $petty
</script>

<div class="petty">
  <div class="heading">
    <span class="info">Petty items</span>
  </div>
  <div class="list">
    {#each pettyList as item}
      <div class="item">
        <Input
          placeholder="Item"
          value={item.title}
          border={false}
          on:input={(event) => {
            item.title = event.detail
            petty.change(pettyList)
          }}
        />
      </div>
    {/each}
  </div>
</div>

<style lang="scss" scoped>
  .petty {
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
