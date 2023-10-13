<script lang="ts">
  import Abilities from './sheet/Abilities.svelte'
  import Inventory from './sheet/Inventory.svelte'
  import Stats from './sheet/StatList.svelte'
  import Coins from './sheet/Coins.svelte'
  import Dices from './Dices.svelte'
  import Section from '../ui/Section.svelte'
  import { nameStore } from '../../store/characterStore'
  import Button from '../ui/Button.svelte'
  import Menu from './Menu.svelte'

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
    <div class="sheet">
      <Section position="first">
        <Abilities />
      </Section>
      <Section>
        <Stats />
      </Section>
      <Section>
        <Coins />
      </Section>
      <Section position="last">
        <Inventory />
      </Section>
    </div>
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

      .sheet {
        display: flex;
        position: relative;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: calc(8px + 1.5625vw);
        overflow: auto;
        box-sizing: border-box;
      }
    }

    .footer {
      height: fit-content;
      padding: 1rem;
      box-shadow: 0px -10px 10px -10px var(--black);
      z-index: 1;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
