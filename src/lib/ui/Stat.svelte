<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let title: string = ''
  export let value: number = 0
  export let maxValue: number | undefined = undefined
  export let roll: boolean | undefined = undefined

  const dispatch = createEventDispatcher()
</script>

<div class="ability">
  <span class="title">
    {title}
  </span>

  <button class="button down" on:click={() => dispatch('decrease')}>
    <p>-</p>
  </button>
  <div class="current">
    {value}
  </div>
  <button class="button grow" on:click={() => dispatch('increase')}>
    <p>+</p>
  </button>
  {#if maxValue}
    <div class="max">{maxValue}</div>
  {/if}
  {#if roll}
    <button class="button roll"><p>20</p></button>
  {/if}
</div>

<style lang="scss">
  .ability {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 2vw;

    .title {
      margin-right: auto;
      text-transform: uppercase;
      font-size: 10vw;
    }

    .current,
    .max {
      font-size: 10vw;
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      width: 10vw;
      height: 10vw;
      color: var(--main);
      border: 2px solid var(--main);
      border-radius: 10px;
      background-color: var(--background);
      cursor: pointer;

      p {
        margin: 0;
        font-size: 6vw;
        line-height: normal;
        font-weight: bold;
        background: none;
      }

      &:hover {
        background-color: var(--second-background);
      }
    }
  }
</style>
