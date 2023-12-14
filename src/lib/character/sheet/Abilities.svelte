<script lang="ts">
  import type { AbilityKeys } from '../../../../types/types'
  import { abilities } from '../../../store/characterStore'
  import Stat from './Stat.svelte'

  const list: AbilityKeys[] = ['str', 'dex', 'wil']
</script>

<div class="abilities">
  {#each list as ability}
    <Stat
      title={ability}
      value={$abilities[ability]}
      maxValue={$abilities[`${ability}Max`]}
      on:decrease={() => abilities.decrease(ability)}
      on:increase={() => abilities.increase(ability)}
    />
  {/each}
</div>

<style lang="scss" scoped>
  .abilities {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
</style>
