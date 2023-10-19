<script>
  import Form from './Form.svelte'
  import Menu from './MainMenu.svelte'

  let showForm = false
  //TODO: add description
</script>

<div class="creation">
  {#if !showForm}
    <div class="header">
      <h1 class="title">Mobile Cairn</h1>
      <span class="version"> v.0.1</span>
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
    height: 100svh;
    flex-direction: column;
    justify-content: space-between;
    @include padding(32, 8);
    box-sizing: border-box;

    .header {
      .title {
        font-family: 'Pirata One', sans-serif;
      }
    }
  }
</style>
