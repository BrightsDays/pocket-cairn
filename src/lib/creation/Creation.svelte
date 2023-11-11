<script>
  import Form from './Form.svelte'
  import Menu from './MainMenu.svelte'
  import image from '../../assets/inventory.png'

  let showForm = false
</script>

<div class="creation">
  {#if !showForm}
    <div class="header">
      <h1 class="title">
        Pocket Cairn
        <span class="version"> v.0.1</span>
      </h1>
      <img class="image" src={image} alt="inventory" />
      <span class="info">
        Cairn is a game created by
        <a href="https://newschoolrevolution.com">Yochai Gal</a><br />
        Official game page -
        <a href="cairnrpg.com">cairnrpg.com</a><br />
        Rate or comment this application on
        <a href="https://github.com/BrightsDays/mobile-cairn">GitHub</a> :)
      </span>
    </div>
    <Menu on:show-form={() => (showForm = true)} />
  {:else}
    <Form on:hide-form={() => (showForm = false)} />
  {/if}
</div>

<style lang="scss" scoped>
  @import '../../app.scss';

  .creation {
    display: flex;
    // height: 100svh;
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
          font-size: 0.8rem;
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
