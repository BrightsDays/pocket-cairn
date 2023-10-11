<script lang="ts">
  import Abilities from './sheet/Abilities.svelte'
  import Inventory from './sheet/Inventory.svelte'
  import Stats from './sheet/StatList.svelte'
  import Coins from './sheet/Coins.svelte'
  import Dices from './Dices.svelte'
  import Section from '../ui/Section.svelte'
  import Menu from './Menu.svelte'
</script>

<div class="character">
  <header class="header">
    <Menu />
  </header>
  <div class="main">
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
  <footer class="footer">
    <Dices />
  </footer>
</div>

<style lang="scss">
  .character {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    height: 100svh;
    max-width: 400px;
    box-sizing: border-box;

    .header {
      height: fit-content;
      padding: 1rem;
      box-shadow: 0px 10px 10px -10px var(--black);
      z-index: 1;
    }

    .main {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: calc(8px + 1.5625vw);
      overflow: auto;
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
