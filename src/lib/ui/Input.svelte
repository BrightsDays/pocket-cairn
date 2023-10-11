<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let value: string = '0'
  export let placeholder: string = ''
  export let border: boolean = true
  export let numbers: boolean = false

  $: value = numbers ? value.replace(/[^0-9]/g, '') : value

  const dispatch = createEventDispatcher()
</script>

<input
  class="input"
  bind:value
  {placeholder}
  style={`border-bottom: ${border ? '1px solid var(--main)' : 'none'};`}
  on:input={() => dispatch('input', value)}
/>

<style lang="scss">
  .input {
    width: 100%;
    padding: calc(0px + 1.5625vw) calc(2px + 1.5625vw);
    font-size: 1.4rem;
    background: none;
    border: none;
    border-radius: 0;
  }
</style>
