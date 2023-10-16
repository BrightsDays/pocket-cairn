<script lang="ts">
  import { slide } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  import { createEventDispatcher } from 'svelte'
  import Button from './Button.svelte'

  export let isShown: boolean
  export let title: string | undefined = undefined
  export let submission: boolean = false

  const dispatch = createEventDispatcher()
  //TODO: use calc() as scss variables
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
        <Button on:click={() => dispatch('ok')}>OK</Button>
      {/if}
    </div>
  </div>
{/if}

<style lang="scss" scoped>
  .modal {
    display: flex;
    position: absolute;
    flex-direction: column;
    left: 0;
    bottom: 0;
    width: 100%;
    height: fit-content;
    padding: calc(16px + 1.5625vw) calc(8px + 1.5625vw);
    background: var(--background);
    border-radius: calc(8px + 1.5625vw) calc(8px + 1.5625vw) 0 0;
    box-shadow: 0px 0px 10px 0px var(--black);
    gap: calc(16px + 1.5625vw);
    box-sizing: border-box;
    z-index: 2;

    .content {
      font-size: 1.6rem;
    }

    .controls {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: auto;
      gap: calc(8px + 1.5625vw);

      &.submission {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
