<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let height: number = 40
  export let padding: number = 0
  export let fontSize: string = '1.6rem'
  export let disabled: boolean = false
  export let borderless: boolean = false
  export let image: string | undefined = undefined
  export let alt: string | undefined = undefined

  $: padding ||= 0

  const dispatch = createEventDispatcher()
</script>

<button
  class={`button${borderless ? ' borderless' : ''}`}
  {disabled}
  style={`
    min-width: ${height}px;
    height: ${height}px;
    border-radius: ${height / 2}px;
    padding: ${padding}px;
    font-size: ${fontSize};
    line-height: ${fontSize};
  `}
  on:click={() => dispatch('click')}
>
  {#if image}
    <img class="image" src={image} {alt} />
  {:else}
    <p>
      <slot />
    </p>
  {/if}
</button>

<style lang="scss" scoped>
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--main);
    border: 1px solid var(--main);
    background-color: var(--background);
    touch-action: manipulation;
    cursor: pointer;
    &:disabled {
      opacity: 0.2;
      // color: var(--second-background);
      // border: 1px solid var(--second-background);
      pointer-events: none;
    }

    &.borderless {
      border: none;
    }

    .image {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    p {
      margin: 0;
      background: none;
      user-select: none;
      -webkit-user-select: none;
      @supports (-webkit-touch-callout: none) {
        margin-top: -0.1rem;
      }
      @media screen and (-webkit-min-device-pixel-ratio: 0) {
        ::i-block-chrome {
          margin-top: -0.2rem;
        }
      }
    }

    // &:hover {
    //   background-color: var(--second-background);
    // }
  }
</style>
