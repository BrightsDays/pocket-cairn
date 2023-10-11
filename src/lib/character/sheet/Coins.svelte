<script lang="ts">
  import { coinsStore } from '../../../store/stores'
  import Input from '../../ui/Input.svelte'

  let coins = $coinsStore
</script>

<div class="coins">
  {#each Object.keys(coins) as coin}
    <div class="item">
      <span class="currency">{coin}:</span>
      <Input value={coins[coin]} />
    </div>
  {/each}
</div>

<style lang="scss">
  .coins {
    display: flex;
    gap: calc(2px + 1.5625vw);

    .item {
      display: flex;
      align-items: center;

      .currency {
        font-size: 1.4rem;
        text-transform: uppercase;
      }
    }
  }
</style>
