<script lang="ts">
  import Abilities from '../sheet/Abilities.svelte'
  import Inventory from '../sheet/Inventory.svelte'
  import Stats from '../sheet/StatList.svelte'
  import Coins from '../sheet/Coins.svelte'
  import Section from '../../ui/Section.svelte'
  import { edition } from '../../../store/editionStore'
  import Petty from './Petty.svelte'
</script>

<div class="sheet">
  <Section position="first">
    <Abilities />
  </Section>
  <Section>
    <Stats />
  </Section>
  {#if $edition !== 'second'}
    <Section>
      <Coins allCoins />
    </Section>
  {/if}
  <Section position={$edition !== 'second' ? 'last' : ''}>
    <Inventory />
  </Section>
  {#if $edition === 'second'}
    <Section position="last">
      <Petty />
    </Section>
  {/if}
</div>

<style lang="scss" scoped>
  @import '../../../app.scss';

  .sheet {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
    @include padding(8);
    overflow: auto;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
