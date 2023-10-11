<script lang="ts">
  import { nameStore } from '../../store/stores'
  import Abilities from './Abilities.svelte'
  import Inventory from './Inventory.svelte'
  import Stats from './Stats.svelte'
  import Coins from './Coins.svelte'
  import Dices from './Dices.svelte'

  let name = $nameStore
</script>

<div class="character">
  <header class="header">
    <h1 class="name">{name}</h1>
  </header>
  <div class="main">
    <Abilities />
    <Stats />
    <Coins />
    <Inventory />
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
    height: 100vh;
    max-width: 400px;
    box-sizing: border-box;

    .header {
      height: fit-content;
      padding: 1rem;
      box-shadow: 0px 10px 10px -10px var(--black);
      z-index: 1;

      .name {
        margin: 0;
        text-align: left;
        line-height: 1;
        color: var(--main);
      }
    }

    .main {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: calc(8px + 1.5625vw);
      overflow: auto;
      gap: calc(8px + 1.5625vw);
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
