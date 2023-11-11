<script lang="ts">
  import Menu from './MainMenu.svelte'
  import image from '../../assets/inventory.png'
  import { fade } from 'svelte/transition'
  import { createEventDispatcher } from 'svelte'

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
      <span class="version"> v.1.0</span>
    </h1>
    <img class="image" src={image} alt="inventory" />
    <span class="info">
      Cairn is a game created by
      <a href="https://newschoolrevolution.com" target="_blank">Yochai Gal</a
      ><br />
      Official game page -
      <a href="https://cairnrpg.com" target="_blank">cairnrpg.com</a><br />
      Rate or comment this application on
      <a href="https://github.com/BrightsDays/mobile-cairn" target="_blank"
        >GitHub</a
      > :)
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
    @include padding(32, 8);
    box-sizing: border-box;

    .header {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @include gap(16);

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
          font-size: 1rem;
        }
      }

      .image {
        max-width: 80%;
      }

      .info {
        display: block;
      }
    }
  }
</style>
