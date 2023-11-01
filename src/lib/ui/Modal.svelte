<script lang="ts">
  import { slide } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  import { createEventDispatcher } from 'svelte'
  import Button from './Button.svelte'
  import clickOutside from '../../utils/clickOutside'

  export let isShown: boolean
  export let title: string | undefined = undefined
  export let submission: boolean = false
  export let disableOk: boolean = false

  const dispatch = createEventDispatcher()
</script>

{#if isShown}
  <div
    class="modal"
    transition:slide={{
      delay: 250,
      duration: 300,
      easing: quintOut,
      axis: 'y',
    }}
    use:clickOutside
    on:click_outside={() => dispatch('cancel')}
  >
    {#if title}
      <h2 class="title">{title}</h2>
    {/if}
    <span class="content">
      <slot />
    </span>
    <div class={`controls${submission ? ' submission' : ''}`}>
      <Button on:click={() => dispatch('cancel')}>Cancel</Button>
      {#if !submission}
        <Button disabled={disableOk} on:click={() => dispatch('ok')}>OK</Button>
      {/if}
    </div>
  </div>
{/if}

<style lang="scss" scoped>
  @import '../../app.scss';

  .modal {
    display: flex;
    position: absolute;
    flex-direction: column;
    left: 0;
    bottom: 0;
    width: 100%;
    height: fit-content;
    @include padding(16, 8);
    background: var(--background);
    border-radius: 10px 10px 0 0;
    box-shadow: 0px 0px 10px 0px var(--black);
    @include gap(16);
    box-sizing: border-box;
    z-index: 2;

    .content {
      font-size: 1.2rem;
    }

    .controls {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: auto;
      @include gap(8);

      &.submission {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
