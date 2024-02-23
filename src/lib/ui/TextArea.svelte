<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let value = ''
  export let minRows = 14
  export let maxRows = 36

  $: minHeight = `${1 + minRows * 1.2}em`
  $: maxHeight = maxRows ? `${1 + maxRows * 1.2}em` : `auto`

  const dispatch = createEventDispatcher()
</script>

<div class="container">
  <pre
    class="pre"
    aria-hidden="true"
    style="min-height: {minHeight}; max-height: {maxHeight}">{value + '\n'}
  </pre>

  <textarea
    class="textarea"
    bind:value
    on:input={() => dispatch('input', value)}
  />
</div>

<style lang="scss" scoped>
  @import '../../app.scss';

  .container {
    position: relative;

    .pre,
    .textarea {
      font-family: inherit;
      margin: 0;
      @include padding(4, 2);
      font-size: var(--font-regular);
      box-sizing: border-box;
      border: none;
      line-height: 1.2;
      overflow: hidden;
      resize: vertical;
    }

    .pre {
      max-width: 90svw;
      @media screen and (min-width: 768px) {
        max-width: 740px;
      }
    }

    .textarea {
      position: absolute;
      width: 100%;
      height: 100%;
      font-size: var(--font-regular);
      color: var(--main);
      background: var(--background);
      box-sizing: border-box;
      top: 0;
      left: 0;
      resize: none;
    }
  }
</style>
