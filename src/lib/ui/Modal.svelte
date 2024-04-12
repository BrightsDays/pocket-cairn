<script lang="ts">
  import { slide } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  import { createEventDispatcher } from 'svelte'
  import Button from './Button.svelte'
  import clickOutside from '../../utils/clickOutside'
  import { teleport } from '../../utils/teleport'

  export let isShown: boolean
  export let title: string | undefined = undefined
  export let submission: boolean = false
  export let disableOk: boolean = false
  export let teleportId: string | null = null

  const dispatch = createEventDispatcher()
</script>

{#if isShown}
  <div
    use:teleport={teleportId}
    class="modal"
    transition:slide={{
      delay: 100,
      duration: 200,
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
      {#if !submission}
        <Button on:click={() => dispatch('cancel')}>Cancel</Button>
        <Button disabled={disableOk} on:click={() => dispatch('ok')}>OK</Button>
      {:else}
        <Button on:click={() => dispatch('cancel')}>OK</Button>
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
