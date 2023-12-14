<script lang="ts">
  import { stats } from '../../../store/characterStore'
  import Checkbox from '../../ui/Checkbox.svelte'
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

  <div class="deprived">
    <span class="title"> Deprived </span>
    <Checkbox
      size={40}
      checked={$stats.deprived}
      on:change={stats.changeDeprived}
    />
  </div>
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

      .title {
        margin-right: auto;
        text-transform: uppercase;
        font-size: var(--font-big);
        line-height: 1.2;
      }
    }
  }
</style>
