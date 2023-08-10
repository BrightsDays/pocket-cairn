<script lang="ts">
  export let value: string
  export let inHand: boolean | undefined = undefined
  export let fatigue: boolean | undefined = undefined
</script>

<div class="item">
  <input type="checkbox" checked={inHand} />
  <input class="content" placeholder="Item" {value} />
  <input type="checkbox" checked={fatigue} />
</div>

<style lang="scss">
  .item {
    display: flex;

    .content {
      width: 100%;
      padding: 1vw 2vw;
      font-size: 5vw;
      background: none;
      border: none;
      border-bottom: 1px solid var(--main);
    }
  }
</style>
