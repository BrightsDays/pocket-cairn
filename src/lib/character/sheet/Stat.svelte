<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from '../../ui/Button.svelte'

  export let title: string = ''
  export let value: number = 0
  export let maxValue: number | undefined = undefined

  const dispatch = createEventDispatcher()
</script>

<div class="ability">
  <span class="title">
    {title}
  </span>

  <Button on:click={() => dispatch('decrease')}>-</Button>
  <div class="current">
    {value}
    {#if maxValue}
      /{maxValue}
    {/if}
  </div>
  <Button on:click={() => dispatch('increase')}>+</Button>
</div>

<style lang="scss">
  .ability {
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

    .current {
      font-size: 3em;
      line-height: 1.2;
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      width: 3em;
      height: 3em;
      color: var(--main);
      border: 2px solid var(--main);
      border-radius: 50%;
      background-color: var(--background);
      cursor: pointer;

      p {
        margin: 0;
        font-size: 2em;
        line-height: normal;
        background: none;
      }

      &:hover {
        background-color: var(--second-background);
      }
    }
  }
</style>
