<script lang="ts">
  import { name } from '../../store/characterStore'
  import Button from '../ui/Button.svelte'

  let name = $name

  let showMenu = false
</script>

<div class="header">
  <div class="wrap">
    <h1 class="name">{name}</h1>
  </div>
  <Button>N</Button>
  <Button on:click={() => (showMenu = true)}>M</Button>
  <div class="menu" style={`top: ${showMenu ? '0' : '-100svh'}`}>
    <Button>Save</Button>
  </div>
</div>

<style lang="scss" scoped>
  .header {
    display: flex;
    position: relative;
    height: fit-content;
    padding: 1rem;
    box-shadow: 0px 10px 10px -10px var(--black);
    z-index: 1;

    .wrap {
      overflow: hidden;
      overflow-x: auto;

      .name {
        margin: 0;
        text-align: left;
        line-height: 1;
        color: var(--main);
        white-space: nowrap;
      }
    }

    .menu {
      position: absolute;
      width: 100svw;
      height: 100svh;
      background: var(--background);
      left: 0;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
