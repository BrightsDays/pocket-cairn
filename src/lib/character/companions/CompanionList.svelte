<script lang="ts">
  import CompanionItem from './Companion.svelte'
  import type { Companion } from '../../../../types/types'
  import { companions } from '../../../store/companionsStore'
  import Button from '../../ui/Button.svelte'
  import Modal from '../../ui/Modal.svelte'
  import CreateCompanion from './CreateCompanion.svelte'
  import setLocalCharacter from '../../../utils/setLocalCharacter'

  let creationModal = false
  let newCompanion: Companion | null = null

  const showModal = () => {
    creationModal = true
  }
  const closeModal = () => {
    newCompanion = null
    creationModal = false
  }
  const addCompanion = () => {
    if (newCompanion) {
      companions.addCompanion(newCompanion)
      setLocalCharacter()
      newCompanion = null
      creationModal = false
    }
  }
</script>

<div class="companions">
  <div class="wrap">
    <div class="list">
      {#each $companions as item}
        <CompanionItem companion={item} />
      {/each}
      <Button on:click={showModal}>Add companion</Button>
    </div>
  </div>
</div>

<Modal
  isShown={creationModal}
  on:cancel={closeModal}
  on:ok={addCompanion}
  disableOk={!newCompanion?.name || !newCompanion?.type}
>
  <CreateCompanion on:change={(event) => (newCompanion = event.detail)} />
</Modal>

<style lang="scss" scoped>
  @import '../../../app.scss';

  .companions {
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    overflow: hidden;

    border-top: 1px solid var(--second);
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
      position: relative;
      overflow: auto;

      .list {
        display: flex;
        flex-direction: column;
        font-family: inherit;
        margin: 0;
        @include padding(10, 0);
        padding-left: 0;
        padding-right: 0;
        text-align: left;
        font-size: var(--font-regular);
        box-sizing: border-box;
        border: none;
        line-height: 1.2;
        overflow: hidden;
        @include gap(2);

        h3 {
          margin: 0;
        }
      }
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }
</style>
