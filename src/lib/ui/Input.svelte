<script lang="ts">
  export let value: string = '0'
  export let placeholder: string = ''

  $: value = value.replace(/[^0-9]/g, '')
</script>

<input class="input" bind:value {placeholder} />

<style lang="scss">
  .input {
    width: 100%;
    padding: calc(0px + 1.5625vw) calc(2px + 1.5625vw);
    font-size: 1.4rem;
    background: none;
    border: none;
    border-bottom: 1px solid var(--main);
  }
</style>
