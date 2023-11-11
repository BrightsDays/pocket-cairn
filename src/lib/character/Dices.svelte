<script lang="ts">
  import { dices } from '../../store/diceStore'
  import { scale } from 'svelte/transition'
  import { quintIn } from 'svelte/easing'

  let dicesValue = $dices
  dices.subscribe((value) => (dicesValue = value))
  let greenIndex

  const rollHandler = (key: string, index: number) => {
    dices.roll(key)
    greenIndex = index
  }
</script>

<div class="dice-list">
  {#each dicesValue as dice, index}
    <button
      ontouchstart=""
      class={`dice d${dice.key}${greenIndex === index ? ' green' : ''}`}
      on:click={() => rollHandler(dice.key, index)}
    >
      {#key dice.count}
        <span in:scale={{ delay: 150, duration: 200, easing: quintIn }}
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
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        transform: scale(0.9);
        transition: 0.1s;
      }
      &.green {
        text-shadow: 0 0 5px greenyellow, 0 0 10px greenyellow,
          0 0 15px greenyellow, 0 0 20px green, 0 0 35px green, 0 0 40px green,
          0 0 50px green, 0 0 75px green;
      }
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

      span {
        display: inline-block;
        width: 2rem;
      }
    }
  }
</style>
