<script lang="ts">
  import { coinsStore } from '../../../store/stores'
  import setLocalCharacter from '../../../utils/setLocalCharacter'
  import Input from '../../ui/Input.svelte'

  let coins = $coinsStore

  const changeCoins = () => {
    coinsStore.set(coins)
    setLocalCharacter()
  }
</script>

<div class="coins">
  {#each Object.keys(coins) as coin}
    <div class="item">
      <span class="currency">{coin}:</span>
      <Input
        value={coins[coin]}
        numbers
        on:input={(event) => {
          coins[coin] = event.detail
          changeCoins()
        }}
      />
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
