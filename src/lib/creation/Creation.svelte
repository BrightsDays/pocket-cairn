<script lang="ts">
  import Menu from './MainMenu.svelte'
  import image from '../../assets/Inventory.png'
  import { fade } from 'svelte/transition'
  import { createEventDispatcher } from 'svelte'
  import { edition } from '../../store/editionStore'
  import Tumbler from '../ui/Tumbler.svelte'

  const dispatch = createEventDispatcher()
</script>

<div
  class="creation"
  in:fade={{ delay: 200, duration: 200 }}
  out:fade={{ duration: 200 }}
>
  <div class="header">
    <h1 class="title">
      Pocket Cairn
      <span class="version">v.1.10</span>
      <Tumbler
        checked={$edition === 'second'}
        on:change={edition.change}
        firstLabel="1 ed."
        secondLabel="2 ed."
      />
    </h1>
    <img class="image" src={image} alt="inventory" />
    <span class="info">
      Cairn is a game created by
      <a href="https://newschoolrevolution.com" target="_blank">Yochai Gal</a
      ><br />
      Official game page:
      <a href="https://cairnrpg.com" target="_blank">cairnrpg.com</a><br />
      Watch the video guide
      {#if $edition === 'first'}
        <a href="https://youtu.be/jrlL-aNhzeg" target="_blank">YouTube</a>
      {:else if $edition === 'second'}
        (Coming soon...)
      {/if}<br />
      Read the instructions on
      <a href="https://github.com/BrightsDays/pocket-cairn" target="_blank"
        >GitHub</a
      ><br />
      Application by
      <a href="https://brightsdays.github.io" target="_blank">brightsdays</a>
    </span>
  </div>

  <Menu on:show-form={() => dispatch('show-form')} />
</div>

<style lang="scss" scoped>
  @import '../../app.scss';

  .creation {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    @include padding(24, 8);
    box-sizing: border-box;

    .header {
      display: flex;
      height: 80%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @include gap(8);

      .title {
        display: inline-block;
        position: relative;
        font-family: 'Pirata One', sans-serif;

        .version {
          position: absolute;
          top: 0;
          right: 0;
          font-family: Arial, sans-serif;
          font-weight: 500;
          font-size: var(--font-regular);
        }

        .edition {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: start;
          left: 0;
          @include gap(2);

          .item {
            display: flex;
            align-items: center;
            @include gap(2);

            .text {
              font-family: Arial, sans-serif;
              font-weight: 500;
              font-size: var(--font-regular);
            }
          }
        }
      }

      .image {
        max-width: 60%;
        max-height: 60%;
      }

      .info {
        display: block;
      }
    }
  }
</style>
