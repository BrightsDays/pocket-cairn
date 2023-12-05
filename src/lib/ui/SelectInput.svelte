<script lang="ts">
  import { slide } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  import { createEventDispatcher } from 'svelte'
  import clickOutside from '../../utils/clickOutside'

  export let options = ['']
  export let value: string

  const dispatch = createEventDispatcher()

  let showList = false

  const selectHandler = (value: string) => {
    showList = false
    dispatch('select', value)
  }
</script>

<div class="input">
  <!-- <select class="select" on:click={() => (showList = true)}>
    {#each options as item}
      <option class="option" selected={item === value}>
        {item}
      </option>
    {/each}
  </select> -->

  <button ontouchstart="" class="select" on:click={() => (showList = true)}>
    {value}
  </button>

  {#if showList}
    <div
      class="list"
      style={`top: -${(options.length / 2) * 25}%`}
      use:clickOutside
      on:click_outside={() => (showList = false)}
      transition:slide={{
        delay: 100,
        duration: 200,
        easing: quintOut,
        axis: 'y',
      }}
    >
      {#each options as item}
        <button class="item" on:click={() => selectHandler(item)}>
          {item}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss" scoped>
  @import '../../app.scss';

  .input {
    position: relative;
    width: 100%;
    transition: all 0.4s ease-in-out;
    &:has(> .select:active) {
      transform: scale(0.9);
      transition: 0.1s;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 40%;
      right: 2.5%;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 10px solid var(--main);
    }

    .select {
      width: 100%;
      padding: 4px 8px;
      font-size: var(--font-medium);
      text-align: left;
      text-transform: uppercase;
      color: var(--main);
      border: 1px solid var(--main);
      border-radius: 5px;
      background: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: '';
      transition: all 0.2s ease-in-out;
      &:hover {
        opacity: 0.8;
      }

      .option {
        display: none;
      }
    }

    .list {
      display: flex;
      position: absolute;
      flex-direction: column;
      width: 60%;
      right: 5%;
      top: 0;
      margin-top: -25%;
      padding: 10px;
      background: var(--background);
      // border: 1px solid var(--main);
      box-shadow: 0px 0px 10px 0px var(--black);
      border-radius: 5px;
      @include gap(2);
      z-index: 1;

      .item {
        display: block;
        color: var(--main);
        font-size: 1.2em;
        text-transform: uppercase;
        text-align: left;
        background: none;
        border: none;
      }
    }
  }
</style>
