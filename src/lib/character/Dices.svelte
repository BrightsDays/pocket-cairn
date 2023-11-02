<script lang="ts">
  import { dices } from '../../store/diceStore'
  import { scale } from 'svelte/transition'
  import { quintIn } from 'svelte/easing'

  let dicesValue = $dices
  dices.subscribe((value) => (dicesValue = value))

  let greenIndex = 0
</script>

<div class="dice-list">
  {#each dicesValue as dice, index}
    <button class={`dice d${dice.key}`} on:click={() => dices.roll(dice.key)}>
      {#key dice.count}
        <span in:scale={{ delay: 250, duration: 300, easing: quintIn }}
          >{dice.value}</span
        >
      {/key}
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

      &.d4 {
        background-image: url('../../assets/icons/d4.svg');
      }
      &.d6 {
        background-image: url('../../assets/icons/d6.svg');
      }
      &.d8 {
        background-image: url('../../assets/icons/d8.svg');
      }
      &.d10 {
        background-image: url('../../assets/icons/d10.svg');
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
