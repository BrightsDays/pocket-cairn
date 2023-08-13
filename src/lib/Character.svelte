<script lang="ts">
  import { nameStore } from '../store/stores'
  import Abilities from './Abilities.svelte'
  import Inventory from './Inventory.svelte'
  import Stats from './Stats.svelte'
  import Dices from './Dices.svelte'

  let name = $nameStore
</script>

<div class="character">
  <header class="header">
    <h1 class="name">~ {name} ~</h1>
  </header>
  <div class="main">
    <Abilities />
    <Stats />
    <div class="coins" />
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
      box-shadow: 0px 15px 10px -15px var(--black);

      .name {
        margin: 0 0 5%;
        color: var(--main);
      }
    }

    .main {
      height: 100%;
      padding: 1rem;
      overflow: auto;
    }

    .footer {
      height: fit-content;
      padding: 1rem;
      box-shadow: 0px -15px 10px -15px var(--black);
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
