<script lang="ts">
  import type { Mode } from '../../types/types'
  import { abilitiesStore } from '../store/stores'
  import Stat from './ui/Stat.svelte'

  let abilities = $abilitiesStore

  const changeAbility = (ability, mode: Mode) => {
    switch (mode) {
      case 'increase':
        abilities[ability] +=
          abilities[ability] < abilities[`${ability}Max`] ? 1 : 0
        break
      case 'decrease':
        abilities[ability] -= abilities[ability] > 0 ? 1 : 0
        break
      default:
        break
    }
  }
</script>

<div class="abilities">
  {#each ['str', 'dex', 'wil'] as ability}
    <Stat
      title={ability}
      value={abilities[ability]}
      maxValue={abilities[`${ability}Max`]}
      on:decrease={() => changeAbility(ability, 'decrease')}
      on:increase={() => changeAbility(ability, 'increase')}
    />
  {/each}
</div>

<style lang="scss">
  .abilities {
    margin-bottom: 5%;
  }
</style>
