<script lang="ts">
  import { slide } from 'svelte/transition'
  import type { Background } from '../../../types/types'
  import { quintOut } from 'svelte/easing'
  import { createEventDispatcher } from 'svelte'
  import BackgroundList from './BackgroundList.svelte'

  const dispatch = createEventDispatcher()

  export let isShown: boolean
  export let list: Background[] = []

  let showList: 'back' | 'first-perk' | 'second-perk' = 'back'
  let selectedBackground: Background = list[0]
  $: firstPerk = selectedBackground.firstPerk.list[0]
  $: secondPerk = selectedBackground.secondPerk.list[0]

  const nextHandler = (value) => {
    if (showList === 'back') {
      selectedBackground = value.detail
      showList = 'first-perk'
    } else if (showList === 'first-perk') {
      firstPerk = value.detail
      showList = 'second-perk'
    } else if (showList === 'second-perk') {
      secondPerk = value.detail
      dispatch('submit', {
        background: selectedBackground,
        firstPerk: firstPerk,
        secondPerk: secondPerk,
      })
      showList = 'back'
    }
  }

  const backHandler = () => {
    if (showList === 'back') {
      dispatch('cancel')
    } else if (showList === 'first-perk') {
      showList = 'back'
    } else if (showList === 'second-perk') {
      showList = 'first-perk'
    }
  }
</script>

{#if isShown}
  <div
    class="background"
    transition:slide={{
      delay: 100,
      duration: 200,
      easing: quintOut,
      axis: 'y',
    }}
  >
    {#if showList === 'back'}
      <BackgroundList
        title="Choose background"
        {list}
        selectedItem={selectedBackground}
        backButton="Cancel"
        on:back={backHandler}
        on:next={nextHandler}
      />
    {:else if showList === 'first-perk'}
      <BackgroundList
        title="Choose perk"
        list={selectedBackground.firstPerk.list}
        selectedItem={firstPerk}
        on:back={backHandler}
        on:next={nextHandler}
      />
    {:else if showList === 'second-perk'}
      <BackgroundList
        title="Choose perk"
        list={selectedBackground.secondPerk.list}
        selectedItem={secondPerk}
        nextButton="Submit"
        on:back={backHandler}
        on:next={nextHandler}
      />
    {/if}
  </div>
{/if}

<style lang="scss" scoped>
  @import '../../app.scss';

  .background {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100svh;
    background: var(--background);
    box-shadow: 0px 0px 10px 0px var(--black);
    z-index: 2;
  }
</style>
