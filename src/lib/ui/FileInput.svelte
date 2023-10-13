<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
</script>

<div class="file">
  <input
    id="upload"
    type="file"
    on:change={(event) => dispatch('change', event)}
  />
  <label for="upload" class="label">Upload character (json)</label>
</div>

<style lang="scss">
  .file {
    position: relative;
    width: 100%;
    height: 40px;

    .label {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      color: var(--main);
      border: 1px dashed var(--main);
      border-radius: 20px;
      background-color: var(--background);
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
</style>
