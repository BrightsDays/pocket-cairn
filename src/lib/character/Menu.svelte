<script lang="ts">
  import { name, stats } from '../../store/characterStore'
  import downloadJson from '../../utils/downloadJson'
  import Button from '../ui/Button.svelte'
  import Modal from '../ui/Modal.svelte'
  import { scars } from '../../store/scarsStore'
  import Stat from './sheet/Stat.svelte'

  let showDeleteModal = false
  let showScarCheck = false
  let showScarModal = false
  let damage = 0

  const addScar = () => {
    scars.add(damage)
    showScarModal = false
    damage = 0
  }

  const deleteCharacter = () => {
    name.set('')
    scars.reset()
    localStorage.removeItem('pc__character')
  }
  //TODO: (2) add characters list
</script>

<div class="menu">
  <span class="title">Scars history:</span>
  <div class="scars">
    <div class="wrap">
      {#if $scars.length === 0}
        <div class="item">You have no scars</div>
      {/if}
      {#each $scars as item, index}
        <div class="item resolvable">
          {item.content}
          {#if item.resolve}
            <Button
              height={30}
              fontSize="1rem"
              on:click={() => scars.resolve(index)}>Resolve</Button
            >
          {:else}
            <Button height={30} fontSize="1rem" disabled>Resolved</Button>
          {/if}
        </div>
      {/each}
    </div>
  </div>

  <Button
    padding={4}
    disabled={$stats.hp > 0}
    on:click={() => (showScarCheck = true)}>Add scar</Button
  >
  <Button padding={4} on:click={() => downloadJson()}
    >Download character (json)</Button
  >
  <!-- <Button disabled>Save to character list</Button> -->
  <Button padding={4} on:click={() => (showDeleteModal = true)}
    >Delete character</Button
  >

  <Modal
    isShown={showScarCheck}
    on:cancel={() => (showScarCheck = false)}
    on:ok={() => {
      showScarModal = true
      showScarCheck = false
    }}
  >
    Adding a scar is an irreversible action that enables you to advance your
    character. Have you consulted with the Warden to confirm that you can
    acquire a scar?
  </Modal>

  <Modal
    isShown={showScarModal}
    disableOk={damage === 0}
    on:cancel={() => {
      showScarModal = false
      damage = 0
    }}
    on:ok={() => addScar()}
  >
    How many damage points was taken?
    <Stat
      value={damage}
      maxValue={12}
      hideMaxValue
      on:decrease={() => (damage > 0 ? (damage -= 1) : (damage = damage))}
      on:increase={() => (damage < 12 ? (damage += 1) : (damage = damage))}
    />
  </Modal>

  <Modal
    isShown={showDeleteModal}
    on:cancel={() => (showDeleteModal = false)}
    on:ok={() => deleteCharacter()}
  >
    Do you really want to delete this character?
  </Modal>
</div>

<style lang="scss" scoped>
  @import '../../app.scss';

  .menu {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    @include padding(16, 8);
    background: var(--background);
    box-sizing: border-box;
    @include gap(8);

    .title {
      padding-left: calc(0px + 1.5625vw);
      padding-bottom: calc(0px + 1.5625vw);
      margin-bottom: calc(-8px - 1.5625vw);
      text-align: left;
      font-size: 1.2rem;
      border-bottom: 1px solid var(--second);
      @media screen and (min-width: 768px) {
        padding-left: calc(0px + 0.5625vw);
        padding-bottom: calc(0px + 0.5625vw);
        margin-bottom: calc(-4px - 0.5625vw);
      }
    }

    .scars {
      display: flex;
      position: relative;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 15px;
        background: linear-gradient(
          180deg,
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
        bottom: 0;
        right: 0;
        width: 100%;
        height: 15px;
        background: linear-gradient(
          360deg,
          var(--background) 10.7%,
          var(--background-to-opacity) 38.14%,
          rgba(2, 4, 8, 0) 86.14%
        );
        z-index: 1;
      }

      .wrap {
        display: flex;
        position: relative;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        overflow-y: auto;

        .item {
          display: grid;
          @include padding(2, 0);
          text-align: left;
          align-items: center;
          border-top: 1px solid var(--second);
          &:first-child {
            border: none;
          }

          &.resolvable {
            grid-template-columns: 3fr 1fr;
          }
        }
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
