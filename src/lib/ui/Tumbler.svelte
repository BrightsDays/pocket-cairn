<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let checked: boolean = false
  export let firstLabel: string | null = null
  export let secondLabel: string | null = null

  const dispatch = createEventDispatcher()

  const change = () => dispatch('change')
</script>

<div class="tumbler">
  <button class={`input${checked ? ' checked' : ''}`} on:click={change}>
    <div class="dot" />
    <span class="checkmark" />
  </button>
  {#if firstLabel && secondLabel}
    <div class="labels">
      <span class="text"> {firstLabel} </span>
      <span class="text"> {secondLabel} </span>
    </div>
  {/if}
</div>

<style lang="scss" scoped>
  @import '../../app.scss';

  .tumbler {
    position: absolute;
    display: flex;
    align-items: center;
    left: 0;
    @include gap(2);

    .input {
      position: relative;
      width: 22px;
      height: 44px;
      padding: 2px;
      align-items: center;
      border: 1px solid var(--main);
      border-radius: 14px;
      background: none;
      box-sizing: unset;
      transition: all 0.2s ease-in-out;
      touch-action: manipulation;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }

      .dot {
        position: absolute;
        top: 2px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: var(--main);
        transition: all 0.2s ease-in-out;
      }

      &.checked {
        .dot {
          transform: translateY(100%);
        }
      }
    }

    .labels {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      @include gap(2);

      .text {
        font-family: Arial, sans-serif;
        font-weight: 500;
        font-size: var(--font-regular);
      }
    }
  }
</style>
