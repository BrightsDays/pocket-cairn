<script lang="ts">
  import type { Mode } from '../../../../types/types'
  import { statsStore } from '../../../store/stores'
  import setLocalCharacter from '../../../utils/setLocalCharacter'
  import Checkbox from '../../ui/Checkbox.svelte'
  import Stat from './Stat.svelte'

  let stats = $statsStore

  const changeHp = (mode: Mode) => {
    switch (mode) {
      case 'increase':
        stats.hp += stats.hp < stats.hpMax ? 1 : 0
        statsStore.set(stats)
        setLocalCharacter()
        break
      case 'decrease':
        stats.hp -= stats.hp > 0 ? 1 : 0
        statsStore.set(stats)
        setLocalCharacter()
        break
    }
  }

  const changeArmor = (mode: Mode) => {
    switch (mode) {
      case 'increase':
        stats.armor += stats.armor < 9 ? 1 : 0
        statsStore.set(stats)
        setLocalCharacter()
        break
      case 'decrease':
        stats.armor -= stats.armor > 0 ? 1 : 0
        statsStore.set(stats)
        setLocalCharacter()
        break
    }
  }
</script>

<div class="stats">
  <Stat
    title="HP"
    value={stats.hp}
    maxValue={stats.hpMax}
    on:decrease={() => changeHp('decrease')}
    on:increase={() => changeHp('increase')}
  />

  <Stat
    title="Armor"
    value={stats.armor}
    on:decrease={() => changeArmor('decrease')}
    on:increase={() => changeArmor('increase')}
  />

  <div class="deprived">
    <span class="title"> Deprived </span>
    <Checkbox size={40} />
  </div>
</div>

<style lang="scss">
  .deprived {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 2%;

    .title {
      margin-right: auto;
      text-transform: uppercase;
      font-size: 3em;
      line-height: 1.2;
    }
  }
</style>
