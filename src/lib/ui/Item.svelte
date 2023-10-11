<script lang="ts">
  import Checkbox from './Checkbox.svelte'
  import Input from './Input.svelte'

  export let value: string
  export let inHand: boolean | undefined = undefined
  export let fatigue: boolean | undefined = undefined
</script>

<div class="item">
  <Checkbox size={20} checked={inHand} />
  <Input placeholder="Item" {value} />
  <Checkbox size={20} checked={fatigue} />
</div>

<style lang="scss">
  .item {
    position: relative;
    display: flex;
    align-items: center;
  }
</style>
