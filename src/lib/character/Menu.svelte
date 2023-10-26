<script lang="ts">
  import { name } from '../../store/characterStore'
  import downloadJson from '../../utils/downloadJson'
  import Button from '../ui/Button.svelte'
  import Modal from '../ui/Modal.svelte'
  import { scars } from '../../store/scarsStore'
  import Stat from './sheet/Stat.svelte'

  let showDeleteModal = false
  let showScarModal = false
  let damage = 0

  const resolveScar = (index: number, effect: Function) => {
    effect()
    scars.resolve(index)
  }

  const addScar = () => {
    scars.add(damage)
    showScarModal = false
  }

  const deleteCharacter = () => {
    name.set('')
    scars.reset()
    localStorage.removeItem('pc__character')
  }
  //TODO: fix scars styles
  //TODO: add characters list
  //TODO: add scars changes notification/data (?)
</script>

<div class="menu">
  <div class="scars">
    <span class="title">Scars:</span>
    {#if $scars.length === 0}
      <div class="item">You have not scars</div>
    {/if}
    {#each $scars as item, index}
      <div class={`item${item.resolve ? ' resolvable' : ''}`}>
        {item.content}
        {#if item.resolve}
          <Button
            height={30}
            fontSize="1rem"
            on:click={() => resolveScar(index, item.resolve)}>Resolve</Button
          >
        {/if}
      </div>
    {/each}
  </div>

  <Button padding={4} on:click={() => (showScarModal = true)}>Add scar</Button>
  <Button padding={4} on:click={() => downloadJson()}
    >Download character (json)</Button
  >
  <!-- <Button disabled>Save to character list</Button> -->
  <Button padding={4} on:click={() => (showDeleteModal = true)}
    >Delete character</Button
  >

  <Modal
    isShown={showScarModal}
    on:cancel={() => (showScarModal = false)}
    on:ok={() => addScar()}
  >
    How many damage points was taken?
    <Stat
      value={damage}
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

    .scars {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      overflow-y: auto;

      .title {
        padding-left: calc(0px + 1.5625vw);
        padding-bottom: calc(2px + 1.5625vw);
        text-align: left;
        font-size: 1.2rem;
      }

      .item {
        display: grid;
        @include padding(2, 0);
        text-align: left;
        align-items: center;
        border-top: 1px solid var(--second);

        &.resolvable {
          grid-template-columns: 4fr 1fr;
        }
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
