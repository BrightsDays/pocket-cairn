<script lang="ts">
  import { dices } from '../../store/diceStore'
  import Button from '../ui/Button.svelte'

  let dicesValue = $dices
  dices.subscribe((value) => (dicesValue = value))
  //TODO: add dices styles and animations
</script>

<div class="dice-list">
  {#each dicesValue as dice}
    <Button height={50} on:click={() => dices.roll(dice.key)}>
      {dice.value}
    </Button>
  {/each}
</div>

<style lang="scss">
  @import '../../app.scss';

  .dice-list {
    display: flex;
    justify-content: space-between;
    @include gap(4);
  }
</style>
