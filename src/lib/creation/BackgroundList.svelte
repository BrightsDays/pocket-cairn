<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Button from '../ui/Button.svelte'
  import Checkbox from '../ui/Checkbox.svelte'

  const dispatch = createEventDispatcher()

  export let title: string = ''
  export let list
  export let selectedItem
  export let backButton = 'Back'
  export let nextButton = 'Next'

  const selectHandler = (item) => () => {
    selectedItem = item
  }
</script>

<div class="list">
  <span class="heading">{title}</span>
  <div class="wrap">
    <div class="list">
      {#each list as item}
        <div class="item">
          <div class="select">
            <Checkbox
              size={20}
              label={item.title || 'Choose this one'}
              checked={selectedItem === item}
              disabled={selectedItem === item}
              on:change={selectHandler(item)}
            />
          </div>
          <span class="description"> {item.description || item.content} </span>
        </div>
      {/each}
    </div>
  </div>
  <div class="controls">
    <Button on:click={() => dispatch('back')}>{backButton}</Button>
    <Button on:click={() => dispatch('next', selectedItem)}>{nextButton}</Button
    >
  </div>
</div>

<style lang="scss" scoped>
  @import '../../app.scss';

  .list {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
    @include padding(16, 8);
    background: var(--background);
    @include gap(8);
    box-sizing: border-box;
    height: 100%;

    .heading {
      font-size: var(--font-medium);
      text-transform: uppercase;
      color: var(--main);
    }

    .wrap {
      display: flex;
      position: relative;
      overflow: hidden;
      overflow-y: auto;
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 15px;
        background: linear-gradient(
          180deg,
          var(--background) 10.7%,
          var(--background-to-opacity) 38.14%,
          rgba(2, 4, 8, 0) 86.14%
        );
        z-index: 1;
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 15px;
        background: linear-gradient(
          360deg,
          var(--background) 10.7%,
          var(--background-to-opacity) 38.14%,
          rgba(2, 4, 8, 0) 86.14%
        );
        z-index: 1;
      }

      .list {
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: auto;
        padding: 15px 0;
        @include gap(8);

        .item {
          display: flex;
          flex-direction: column;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--second);
          @include gap(4);
          &:last-child {
            border: none;
          }

          .select {
            display: flex;
            align-items: baseline;
            @include gap(4);
          }

          .description {
            text-align: left;
            font-size: var(--font-regular);
            color: var(--second);
          }
        }
      }
    }

    .controls {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: auto;
      @include gap(8);
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
