<script lang="ts">
  import { nameStore } from '../../store/stores'
  import Button from '../ui/Button.svelte'

  let name = $nameStore
</script>

<div class="header">
  <h1 class="name">{name}</h1>
  <Button>N</Button>
  <Button>M</Button>
</div>

<style lang="scss">
  .header {
    display: flex;

    .name {
      margin: 0;
      text-align: left;
      line-height: 1;
      color: var(--main);
    }
  }
</style>
