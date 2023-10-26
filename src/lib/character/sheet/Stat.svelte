<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from '../../ui/Button.svelte'

  export let title: string = ''
  export let value: number = 0
  export let maxValue: number | undefined = undefined

  const dispatch = createEventDispatcher()
</script>

<div class="ability">
  {#if title}
    <span class="title">
      {title}
    </span>
  {/if}

  <div class="controls">
    <Button on:click={() => dispatch('decrease')}>&minus;</Button>
    <div class="current">
      {value}
      {#if maxValue}
        / {maxValue}
      {/if}
    </div>
    <Button on:click={() => dispatch('increase')}>&plus;</Button>
  </div>
</div>

<style lang="scss">
  .ability {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    gap: 10%;

    .title {
      margin-right: auto;
      text-transform: uppercase;
      font-size: 2.6em;
      font-weight: lighter;
      line-height: 1.2;
    }

    .controls {
      display: flex;
      width: 65%;
      max-width: 300px;
      justify-content: space-between;
      align-items: center;
      gap: 2%;

      .current {
        font-size: 2.6em;
        line-height: 1.2;
      }
    }
  }
</style>
