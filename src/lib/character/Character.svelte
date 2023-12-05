<script lang="ts">
  import Dices from './Dices.svelte'
  import { name } from '../../store/characterStore'
  import Button from '../ui/Button.svelte'
  import Menu from './Menu.svelte'
  import Sheet from './sheet/Sheet.svelte'
  import settings from '../../assets/icons/settings.svg'
  import notes from '../../assets/icons/notes.svg'
  import cross from '../../assets/icons/cross.svg'
  import Notes from './Notes.svelte'
  import { fade } from 'svelte/transition'

  let showMenu = false
  let showNotes = false

  $: mainStyle = () => {
    if (showMenu) return '-200%'
    if (showNotes) return '0'
    return '-100%'
  }
</script>

<div
  class="character"
  in:fade={{ delay: 200, duration: 200 }}
  out:fade={{ duration: 200 }}
>
  <div class="header">
    <Button
      borderless
      image={showNotes ? cross : notes}
      alt="notes"
      on:click={() => (showNotes = !showNotes)}
      disabled={showMenu}
    />
    <div class="name">
      <div class="wrap">
        <h2 class="text">{$name}</h2>
      </div>
    </div>
    <Button
      borderless
      image={showMenu ? cross : settings}
      alt="settings"
      on:click={() => (showMenu = !showMenu)}
      disabled={showNotes}
    />
  </div>
  <div class="main" style={`left: ${mainStyle()}`}>
    <Notes />
    <Sheet />
    <Menu />
  </div>
  <footer class="footer">
    <Dices />
  </footer>
</div>

<style lang="scss" scoped>
  @import '../../app.scss';

  .character {
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    // height: 100svh;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;

    .header {
      display: flex;
      position: relative;
      height: fit-content;
      padding: 1rem;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0px 0px 10px 0px var(--black);
      @include gap(8);
      z-index: 1;

      .name {
        position: relative;
        // margin-left: -15px;
        overflow: hidden;
        &::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 15px;
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--background) 10.7%,
            var(--background-to-opacity) 38.14%,
            rgba(2, 4, 8, 0) 86.14%
          );
          z-index: 1;
        }
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          width: 15px;
          height: 100%;
          background: linear-gradient(
            270deg,
            var(--background) 10.7%,
            var(--background-to-opacity) 38.14%,
            rgba(2, 4, 8, 0) 86.14%
          );
          z-index: 1;
        }

        .wrap {
          position: relative;
          overflow: hidden;
          overflow-x: auto;

          .text {
            display: inline-block;
            margin: 0;
            padding: 0 15px 2px;
            text-align: left;
            line-height: 1;
            color: var(--main);
            white-space: nowrap;
            font-size: var(--font-big);
            font-weight: 400;
          }
        }
      }
    }

    .main {
      display: grid;
      position: relative;
      width: 300svw;
      max-width: 300%;
      height: 100%;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 100%;
      transition: all 0.5s;
      overflow: hidden;
    }

    .footer {
      height: fit-content;
      padding: 1rem;
      box-shadow: 0px 0px 10px 0px var(--black);
      z-index: 1;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
