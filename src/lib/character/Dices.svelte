<script lang="ts">
  import { dices } from '../../store/diceStore'
  import Button from '../ui/Button.svelte'

  let dicesValue = $dices
  dices.subscribe((value) => (dicesValue = value))
</script>

<div class="dice-list">
  {#each dicesValue as dice}
    <Button
      height={50}
      on:click={() => dices.roll(dice.key)}
      className={`d${dice.key}`}
    >
      {dice.value}
    </Button>
  {/each}
</div>

<style lang="scss">
  .dice-list {
    display: flex;
    justify-content: space-between;
    gap: calc(4px + 1.5625vw);
  }
</style>
