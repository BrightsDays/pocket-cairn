<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from './Button.svelte'

  export let title: string = ''
  export let value: number = 0
  export let maxValue: number = 0
  export let hideMaxValue: boolean = false
  export let size: 'big' | 'small' = 'big'

  const dispatch = createEventDispatcher()
</script>

<div class="ability">
  {#if title}
    <span class={`title ${size}`}>
      {title}
    </span>
  {/if}

  <div
    class="controls"
    style={`max-width: ${size === 'big' ? '300' : '180'}px;`}
  >
    <Button
      on:click={() => dispatch('decrease')}
      disabled={value === 0}
      height={size === 'big' ? 40 : 30}>&minus;</Button
    >
    <div class={`current ${size}`}>
      {value}
      {#if !hideMaxValue}
        / {maxValue}
      {/if}
    </div>
    <Button
      on:click={() => dispatch('increase')}
      disabled={value === maxValue}
      height={size === 'big' ? 40 : 30}>&plus;</Button
    >
  </div>
</div>

<style lang="scss" scoped>
  @import '../../app.scss';

  .ability {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    gap: 10%;

    .title {
      margin-right: auto;
      text-transform: uppercase;

      &.big {
        font-size: var(--font-big);
        line-height: 1.2;
      }

      &.small {
        font-size: var(--font-medium);
      }
    }

    .controls {
      display: flex;
      width: 65%;
      justify-content: space-between;
      align-items: center;
      gap: 2%;

      .current {
        &.big {
          font-size: var(--font-big);
          line-height: 1.2;
        }

        &.small {
          font-size: var(--font-medium);
        }
      }
    }
  }
</style>
