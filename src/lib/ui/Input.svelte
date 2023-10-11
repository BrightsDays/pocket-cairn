<script lang="ts">
  export let value: string = '0'
  export let placeholder: string = ''
  export let border: boolean = true

  $: value = value.replace(/[^0-9]/g, '')
</script>

<input
  class="input"
  bind:value
  {placeholder}
  style={`border-bottom: ${border ? '1px solid var(--main)' : 'none'};`}
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
