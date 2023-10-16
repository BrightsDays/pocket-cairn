<script lang="ts">
  import Dices from './Dices.svelte'
  import { nameStore } from '../../store/characterStore'
  import Button from '../ui/Button.svelte'
  import Menu from './Menu.svelte'
  import Sheet from './sheet/Sheet.svelte'

  let name = $nameStore

  let showMenu = false
</script>

<div class="character">
  <div class="header">
    <div class="wrap">
      <h1 class="name">{name}</h1>
    </div>
    <Button disabled>N</Button>
    <Button on:click={() => (showMenu = !showMenu)}>M</Button>
  </div>
  <div class="main" style={`left: ${showMenu ? '0' : '-100%'}`}>
    <Menu />
    <Sheet />
  </div>
  <footer class="footer">
    <Dices />
  </footer>
</div>

<style lang="scss" scoped>
  .character {
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    height: 100svh;
    box-sizing: border-box;
    overflow: hidden;

    .header {
      display: flex;
      position: relative;
      height: fit-content;
      padding: 1rem;
      box-shadow: 0px 0px 10px 0px var(--black);
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
    }

    .main {
      display: grid;
      position: relative;
      width: 200svw;
      max-width: 200%;
      height: 100%;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 100%;
      transition: all 0.5s;
      overflow: hidden;
    }

    .footer {
      height: fit-content;
      padding: 1rem;
      box-shadow: 0px 0px 10px 0px var(--black);
      z-index: 1;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
