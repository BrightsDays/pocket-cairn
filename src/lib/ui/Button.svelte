<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let height: number = 40
  export let padding: number = 0
  export let disabled: boolean = false

  $: padding ||= 0

  const dispatch = createEventDispatcher()
</script>

<button
  class="button"
  {disabled}
  style={`
    min-width: ${height}px;
    height: ${height}px;
    border-radius: ${height / 2}px;
    padding: ${padding}px;
  `}
  on:click={() => dispatch('click')}
>
  <p>
    <slot />
  </p>
</button>

<style lang="scss">
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--main);
    border: 1px solid var(--main);
    background-color: var(--background);
    cursor: pointer;
    &:disabled {
      color: var(--second-background);
      border: 1px solid var(--second-background);
      pointer-events: none;
    }

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
</style>
