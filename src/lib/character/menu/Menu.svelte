<script lang="ts">
  import { abilities, name, stats } from '../../../store/characterStore'
  import downloadJson from '../../../utils/downloadJson'
  import Button from '../../ui/Button.svelte'
  import Modal from '../../ui/Modal.svelte'
  import { scars } from '../../../store/scarsStore'
  import Stat from '../../ui/Stat.svelte'
  import ChangeStats from './ChangeStats.svelte'
  import type { Change } from '../../../../types/types'

  let showDeleteModal = false
  let showScarCheck = false
  let showScarModal = false
  let showStatCheck = false
  let showStatModal = false
  let damage = 0
  let change: Change = {
    stat: 'str',
    value: 0,
  }

  const addScar = () => {
    scars.add(damage)
    showScarModal = false
    damage = 0
  }

  const updateChange = (value: Change) => {
    change = value
  }

  const resetChange = () => {
    change = {
      stat: 'str',
      value: 0,
    }
    showStatModal = false
  }

  const changeStat = () => {
    if (change.stat === 'hp') {
      const newValue = $stats.hpMax + change.value
      stats.setMaxHp(newValue)
    } else {
      const newValue = $abilities[`${change.stat}Max`] + change.value
      abilities.setMaxAbility(change.stat, newValue)
    }

    change = {
      stat: 'str',
      value: 0,
    }
    showStatModal = false
  }

  const deleteCharacter = () => {
    name.set('')
    scars.reset()
    localStorage.removeItem('pc__character')
  }
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

  <div class="change">
    <Button
      padding={4}
      disabled={$stats.hp > 0}
      on:click={() => (showScarCheck = true)}>Add scar</Button
    >
    <Button padding={4} on:click={() => (showStatCheck = true)}
      >Edit stat</Button
    >
  </div>
  <Button padding={4} on:click={() => downloadJson()}>Download character</Button
  >
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
    isShown={showStatCheck}
    on:cancel={() => (showStatCheck = false)}
    on:ok={() => {
      showStatModal = true
      showStatCheck = false
    }}
  >
    Manually changing stat is a specific action. Have you consulted with the
    Warden to confirm that you can change stat?
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

  <Modal isShown={showStatModal} on:cancel={resetChange} on:ok={changeStat}>
    <ChangeStats on:change={(value) => updateChange(value.detail)} />
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
  @import '../../../app.scss';

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
      font-size: 1.4rem;
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

    .change {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      @include gap(8);
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
