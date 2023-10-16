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
  .creation {
    display: flex;
    height: 100svh;
    flex-direction: column;
    justify-content: space-between;
    padding: calc(32px + 1.5625vw) calc(8px + 1.5625vw);
    box-sizing: border-box;

    .header {
      .title {
        font-family: 'Pirata One', sans-serif;
      }
    }
  }
</style>
