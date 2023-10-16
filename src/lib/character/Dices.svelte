<script lang="ts">
  import Button from '../ui/Button.svelte'
  //TODO: add dice rolls
</script>

<div class="dice-list">
  {#each ['4', '6', '8', '10', '12', '20'] as dice}
    <Button padding={22}>
      {dice}
    </Button>
  {/each}
</div>

<style lang="scss">
  .dice-list {
    display: flex;
    justify-content: space-between;
  }
</style>
