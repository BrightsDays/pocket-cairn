<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let height: number = 40

  const dispatch = createEventDispatcher()
  let innerWidth: number

  $: calcHeight = innerWidth > 374 ? height : height * 0.75
</script>

<svelte:window bind:innerWidth />

<div class="file">
  <input
    id="upload"
    type="file"
    class="input"
    accept="application/JSON"
    on:change={(event) => dispatch('change', event)}
  />
  <label
    ontouchstart=""
    for="upload"
    class="label"
    style={`
      border-radius: ${calcHeight / 2}px;
    `}>Upload the character</label
  >
</div>

<style lang="scss" scoped>
  @import '../../app.scss';
  .file {
    position: relative;
    width: 100%;
    height: 40px;

    .input {
      display: none;
    }

    .label {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      color: var(--main);
      border: 1px dashed var(--main);
      background-color: var(--background);
      // font-size: var(--font-medium);
      font-size: 1.6rem;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        transform: scale(0.9);
        transition: 0.1s;
      }
    }
  }
</style>
