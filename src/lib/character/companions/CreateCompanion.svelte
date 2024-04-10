<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import rollDices from '../../../utils/rollDices'
  import Section from '../../ui/Section.svelte'
  import Stat from '../../ui/Stat.svelte'
  import TextInput from '../../ui/TextInput.svelte'
  import Checkbox from '../../ui/Checkbox.svelte'

  const dispatch = createEventDispatcher()

  let name = ''
  let type = ''
  let stats = {
    str: rollDices(3, 6),
    dex: rollDices(3, 6),
    wil: rollDices(3, 6),
    hp: rollDices(3, 6),
  }
  let inventory = [
    { title: '' },
    { title: '' },
    { title: '' },
    { title: '' },
    { title: '' },
    { title: '' },
  ]
  let slots = 6

  const fillInventory = () => {
    inventory = []
    for (let i = 0; i < slots; i++) {
      inventory.push({ title: '' })
    }
  }

  const transportHandler = () => {
    type = type.toLowerCase() === 'transport' ? '' : 'Transport'
  }

  $: (slots, name, type, stats),
    (fillInventory(),
    dispatch('change', {
      name: name,
      type: type,
      stats: {
        str: stats.str,
        dex: stats.dex,
        wil: stats.wil,
        hp: stats.hp,
        strMax: stats.str,
        dexMax: stats.dex,
        wilMax: stats.wil,
        hpMax: stats.hp,
        armor: 0,
      },
      inventory: inventory,
    }))

  let list = ['str', 'dex', 'wil', 'hp']
</script>

<div class="creation">
  <Section position="first">
    <TextInput
      placeholder="Name"
      value={name}
      on:input={(event) => (name = event.detail)}
    />
    <div class="titles">
      <TextInput
        placeholder="Type"
        value={type}
        on:input={(event) => (type = event.detail)}
      />
      <div class="transport">
        <span>Transport</span>
        <Checkbox
          size={30}
          checked={type.toLowerCase() === 'transport'}
          on:change={transportHandler}
        />
      </div>
    </div>
  </Section>
  <Section>
    <div
      class={`stats${type.toLowerCase() === 'transport' ? ' disabled' : ''}`}
    >
      {#each list as item}
        <Stat
          title={item}
          value={stats[item]}
          maxValue={18}
          hideMaxValue
          size="small"
          on:decrease={() =>
            stats[item] > 0 ? (stats[item] -= 1) : (stats[item] = stats[item])}
          on:increase={() =>
            stats[item] < 18 ? (stats[item] += 1) : (stats[item] = stats[item])}
        />
      {/each}
    </div>
  </Section>
  <Section position="last">
    <Stat
      title={'slots'}
      value={slots}
      maxValue={8}
      hideMaxValue
      size="small"
      on:decrease={() => (slots > 0 ? (slots -= 1) : (slots = slots))}
      on:increase={() => (slots < 8 ? (slots += 1) : (slots = slots))}
    />
  </Section>
</div>

<style lang="scss" scoped>
  .creation {
    width: 100%;

    .titles {
      display: grid;
      grid-template-columns: 2fr 1fr;
      width: 100%;

      .transport {
        display: flex;
        justify-content: space-between;
        align-items: end;
      }
    }

    .stats {
      display: grid;
      grid-template-columns: 1fr;
      gap: 5px 30px;
      @media screen and (min-width: 540px) {
        grid-template-columns: 1fr 1fr;
      }

      &.disabled {
        opacity: 0.3;
        pointer-events: none;
      }
    }

    .number {
      display: flex;

      .label {
        display: inline-block;
        margin-right: auto;
      }
    }
  }
</style>
