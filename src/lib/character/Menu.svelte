<script lang="ts">
  import { nameStore } from '../../store/characterStore'
  import downloadJson from '../../utils/downloadJson'
  import Button from '../ui/Button.svelte'
  import Modal from '../ui/Modal.svelte'

  let showModal = false

  const deleteCharacter = () => {
    nameStore.set('')
    localStorage.removeItem('pc__character')
  }
</script>

<div class="menu">
  <Button on:click={() => downloadJson()}>Download character (json)</Button>
  <Button disabled>Save to character list</Button>
  <Button on:click={() => (showModal = true)}>Delete character</Button>

  <Modal
    isShown={showModal}
    on:cancel={() => (showModal = false)}
    on:ok={() => deleteCharacter()}
  >
    Do you really want to delete this character?
  </Modal>
</div>

<style lang="scss" scoped>
  .menu {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding: calc(16px + 1.5625vw) calc(8px + 1.5625vw);
    background: var(--background);
    box-sizing: border-box;
    gap: calc(8px + 1.5625vw);
  }
</style>
