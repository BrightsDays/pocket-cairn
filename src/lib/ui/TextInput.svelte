<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let value: string = '0'
  export let placeholder: string = ''
  export let border: boolean = true
  export let numbers: boolean = false
  export let paddingRight: string = ''

  $: value = numbers ? value.replace(/[^0-9]/g, '') : value

  const dispatch = createEventDispatcher()
</script>

<input
  class="input"
  bind:value
  {placeholder}
  inputmode={numbers ? 'decimal' : 'text'}
  style={`
    border-bottom: ${border ? '1px solid var(--main)' : 'none'};
    ${paddingRight && 'padding-right: ' + paddingRight}
  `}
  on:input={() => dispatch('input', value)}
/>

<style lang="scss">
  @import '../../app.scss';

  .input {
    width: 100%;
    @include padding(0, 2);
    font-size: 1.4rem;
    color: var(--main);
    background: none;
    border: none;
    border-radius: 0;
  }
</style>
