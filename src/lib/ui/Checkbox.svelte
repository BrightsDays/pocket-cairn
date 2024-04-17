<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let label: string | null = null
  export let size: number = 0
  export let checked: boolean = false
  export let disabled: boolean = false

  const dispatch = createEventDispatcher()
  let innerWidth: number

  $: calcSize = innerWidth > 374 ? size : size * 0.75

  const change = () => dispatch('change')
</script>

<svelte:window bind:innerWidth />

<label ontouchstart="" class="checkbox">
  <input type="checkbox" {checked} {disabled} on:change={change} />
  <span
    class="checkmark"
    style={`width: ${calcSize}px;height: ${calcSize}px`}
  />
  {#if label}
    <span class="label">
      {label}
    </span>
  {/if}
</label>

<style lang="scss" scoped>
  @import '../../app.scss';

  .checkbox {
    display: flex;
    position: relative;
    align-items: center;
    height: max-content;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
    @include gap(2);

    .label {
      font-size: var(--font-medium);
      line-height: 1;
      color: var(--main);
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      &:checked ~ .checkmark:after {
        display: block;
      }
    }

    .checkmark {
      position: relative;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border: 1px solid var(--main);
      border-radius: 50%;
      box-sizing: border-box;
      transition: transform 0.2s ease-in-out;
      aspect-ratio: 1;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        transform: scale(0.9);
        transition: 0.1s;
      }
      &:after {
        content: '';
        position: absolute;
        display: none;
        left: 25%;
        top: 25%;
        width: 50%;
        height: 50%;
        background-color: var(--main);
        border-radius: 50%;
      }
    }
  }
</style>
