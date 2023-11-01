<script lang="ts">
  import { dices } from '../../store/diceStore'
  import Button from '../ui/Button.svelte'

  let dicesValue = $dices
  dices.subscribe((value) => (dicesValue = value))
  //TODO: add dices styles and animations
</script>

<div class="dice-list">
  {#each dicesValue as dice}
    <!-- <Button height={50} on:click={() => dices.roll(dice.key)}>
      {dice.value}
    </Button> -->
    <button class={`dice d${dice.key}`} on:click={() => dices.roll(dice.key)}>
      {dice.value}
    </button>
  {/each}
</div>

<style lang="scss">
  @import '../../app.scss';

  .dice-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    justify-content: space-between;
    @include gap(0);

    .dice {
      position: relative;
      background: none;
      border: none;
      padding: 0;
      aspect-ratio: 1;
      font-size: 1.6em;
      color: var(--main);
      touch-action: manipulation;
      background-size: 100% 100%;
      &.d8 {
        background-image: url('../../assets/icons/d8.svg');
      }
      &.d12 {
        background-image: url('../../assets/icons/d12.svg');
      }
      &.d20 {
        background-image: url('../../assets/icons/d20.svg');
      }
    }
  }
</style>
