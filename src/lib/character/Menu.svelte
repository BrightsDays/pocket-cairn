<script lang="ts">
  import { name } from '../../store/characterStore'
  import downloadJson from '../../utils/downloadJson'
  import Button from '../ui/Button.svelte'
  import Modal from '../ui/Modal.svelte'

  let showModal = false

  const deleteCharacter = () => {
    name.set('')
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
  }
</style>
