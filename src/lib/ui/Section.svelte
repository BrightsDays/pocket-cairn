<script lang="ts">
  export let position: 'first' | 'last' | '' = ''
</script>

<section class={`section ${position}`}>
  <slot />
</section>

<style lang="scss" scoped>
  .section {
    padding: calc(4px + 1.5625vw) 0;
    border-bottom: 1px solid var(--second-background);
    @media screen and (min-width: 768px) {
      padding: calc(2px + 0.5625vw) 0;
    }

    &.first {
      padding-top: 0;
    }
    &.last {
      padding-bottom: none;
      border-bottom: none;
    }
  }
</style>
