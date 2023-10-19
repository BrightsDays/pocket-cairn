<script lang="ts">
  import type { CoinKeys } from '../../../../types/types'
  import { coins } from '../../../store/characterStore'
  import Input from '../../ui/TextInput.svelte'

  const list: CoinKeys[] = ['gp', 'sp', 'cp']
</script>

<div class="coins">
  {#each list as coin}
    <div class="item">
      <span class="currency">{coin}:</span>
      <Input
        value={$coins[coin]}
        numbers
        on:input={(event) => {
          coins[coin] = event.detail
          coins.change(coin, event.detail)
        }}
      />
    </div>
  {/each}
</div>

<style lang="scss">
  @import '../../../app.scss';

  .coins {
    display: flex;
    @include gap(2);

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
