<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let size: number = 0
  export let checked: boolean = false

  const dispatch = createEventDispatcher()
  let innerWidth: number

  $: calcSize = innerWidth > 374 ? size : size * 0.75

  const change = () => dispatch('change')
</script>

<svelte:window bind:innerWidth />

<label
  ontouchstart=""
  class="checkbox"
  style={`width: ${calcSize}px;height: ${calcSize}px`}
>
  <input type="checkbox" {checked} on:change={change} />
  <span class="checkmark" />
</label>

<style lang="scss">
  .checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
    aspect-ratio: 1;
    // &:hover input ~ .checkmark {
    //   background-color: var(--second-background);
    // }

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
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border: 1px solid var(--main);
      border-radius: 50%;
      box-sizing: border-box;
      transition: all 0.2s ease-in-out;
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
