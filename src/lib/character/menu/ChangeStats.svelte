<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Stat from '../../ui/Stat.svelte'
  import type { Change, StatItem } from '../../../../types/types'

  const dispatch = createEventDispatcher()

  export let stat: StatItem = 'str'
  export let value: number = 0
  const list: StatItem[] = ['str', 'dex', 'wil', 'hp']

  const statHandler = (value: StatItem) => (stat = value)

  $: (stat, value),
    dispatch('change', {
      stat: stat,
      value: value,
    } as Change)
</script>

<div class="change">
  <span> Choose stat: </span>
  <div class="stats">
    {#each list as item}
      <button
        ontouchstart=""
        class={`item${stat === item ? ' selected' : ''}`}
        on:click={() => statHandler(item)}
      >
        {item}
      </button>
    {/each}
  </div>
  <span> Change maximum value for: </span>
  <Stat
    {value}
    maxValue={8}
    minValue={-8}
    hideMaxValue
    on:decrease={() => (value > -8 ? (value -= 1) : (value = value))}
    on:increase={() => (value < 8 ? (value += 1) : (value = value))}
  />
</div>

<style lang="scss" scoped>
  @import '../../../app.scss';

  .change {
    display: flex;
    flex-direction: column;
    @include gap(6);

    .stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      @include gap(4);
      @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }

      .item {
        padding: 4px;
        font-size: var(--font-medium);
        text-transform: uppercase;
        color: var(--main);
        border: 1px solid var(--main);
        border-radius: 5px;
        background: none;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        &.selected {
          background-color: var(--second-background);
        }
        &:hover {
          opacity: 0.8;
        }
        &:active {
          transform: scale(0.9);
          transition: 0.1s;
        }
        &:disabled {
          opacity: 0.2;
          pointer-events: none;
        }
      }
    }
  }
</style>
