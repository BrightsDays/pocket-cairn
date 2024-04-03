<script lang="ts">
  import { stats } from '../../../store/characterStore'
  import { edition } from '../../../store/editionStore'
  import Checkbox from '../../ui/Checkbox.svelte'
  import Coins from './Coins.svelte'
  import Stat from './Stat.svelte'
</script>

<div class="stats">
  <Stat
    title="HP"
    value={$stats.hp}
    maxValue={$stats.hpMax}
    on:decrease={stats.decreaseHp}
    on:increase={stats.increaseHp}
  />

  <Stat
    title="Armor"
    value={$stats.armor}
    maxValue={9}
    hideMaxValue
    on:decrease={stats.decreaseArmor}
    on:increase={stats.increaceArmor}
  />

  {#if $edition === 'second'}
    <div class="deprived">
      <div class="wrap">
        <Coins />
      </div>
      <span class="title second"> Deprived </span>
      <Checkbox
        size={40}
        checked={$stats.deprived}
        on:change={stats.changeDeprived}
      />
    </div>
  {:else if $edition === 'first'}
    <div class="deprived">
      <span class="title"> Deprived </span>
      <Checkbox
        size={40}
        checked={$stats.deprived}
        on:change={stats.changeDeprived}
      />
    </div>
  {/if}
</div>

<style lang="scss">
  @import '../../../app.scss';

  .stats {
    display: flex;
    flex-direction: column;
    gap: 2px;

    .deprived {
      display: flex;
      width: 100%;
      align-items: center;
      gap: 2%;

      .wrap {
        width: 30%;
        padding-right: 1rem;
        border-right: 1px solid var(--second-background);
      }

      .title {
        margin-right: auto;
        text-transform: uppercase;
        font-size: var(--font-big);
        line-height: 1.2;

        &.second {
          font-size: 2rem;
        }
      }
    }
  }
</style>
