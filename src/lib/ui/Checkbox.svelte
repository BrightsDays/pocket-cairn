<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let size: number = 0
  export let checked: boolean = false

  const dispatch = createEventDispatcher()
</script>

<label class="checkbox" style={`width: ${size}px;height: ${size}px`}>
  <input type="checkbox" {checked} on:change={() => dispatch('change')} />
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
