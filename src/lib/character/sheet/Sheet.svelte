<script lang="ts">
  import Abilities from '../sheet/Abilities.svelte'
  import Inventory from '../sheet/Inventory.svelte'
  import Stats from '../sheet/StatList.svelte'
  import Coins from '../sheet/Coins.svelte'
  import Section from '../../ui/Section.svelte'
  //TODO: add scars
</script>

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

<style lang="scss" scoped>
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
</style>
