<script>
  import Form from './Form.svelte'
  import Menu from './Menu.svelte'

  let showForm = false
</script>

<div class="creation">
  {#if !showForm}
    <h1>Pocket Cairn v.0.1</h1>
    <Menu on:show-form={() => (showForm = true)} />
  {:else}
    <Form on:hide-form={() => (showForm = false)} />
  {/if}
</div>

<style lang="scss">
  .creation {
    display: flex;
    height: 100svh;
    flex-direction: column;
    justify-content: space-between;
    padding: calc(32px + 1.5625vw) calc(8px + 1.5625vw);
    box-sizing: border-box;
  }
</style>
