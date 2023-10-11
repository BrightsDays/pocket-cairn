<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let padding: number | undefined = undefined

  $: padding ||= 0

  const dispatch = createEventDispatcher()
</script>

<button
  class="button"
  style={`padding: ${padding}px`}
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
    padding: 0;
    width: 40px;
    height: 40px;
    color: var(--main);
    border: 1px solid var(--main);
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
</style>
