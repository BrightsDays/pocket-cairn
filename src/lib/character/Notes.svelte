<script lang="ts">
  import TextArea from '../ui/TextArea.svelte'
  import { notes } from '../../store/notesStore'
  import { edition } from '../../store/editionStore'
  import { biography } from '../../store/biographyStore'
</script>

<div class="notes">
  {#if $edition === 'second'}
    <span class="title">Biography:</span>
    <div class="content">
      <div class="wrap">
        <span>
          {$biography.background}
        </span>
        <span>
          {$biography.description}
        </span>
        <span>
          {$biography.firstPerk.title}
        </span>
        <span>
          {$biography.firstPerk.content}
        </span>
        <span>
          {$biography.secondPerk.title}
        </span>
        <span>
          {$biography.secondPerk.content}
        </span>
      </div>
    </div>
  {/if}
  <span class="title">Notes:</span>
  <div class="content">
    <div class="wrap">
      <TextArea
        value={$notes}
        on:input={(event) => notes.change(event.detail)}
      />
    </div>
  </div>
</div>

<style lang="scss" scoped>
  @import '../../app.scss';

  .notes {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    @include padding(16, 8);
    background: var(--background);
    box-sizing: border-box;
    @include gap(8);

    .title {
      padding-left: calc(0px + 1.5625vw);
      padding-bottom: calc(0px + 1.5625vw);
      margin-bottom: calc(-8px - 1.5625vw);
      text-align: left;
      font-size: 1.4rem;
      border-bottom: 1px solid var(--second);
      @media screen and (min-width: 768px) {
        padding-left: calc(0px + 0.5625vw);
        padding-bottom: calc(0px + 0.5625vw);
        margin-bottom: calc(-4px - 0.5625vw);
      }
    }

    .content {
      display: flex;
      position: relative;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
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
    }

    .wrap {
      position: relative;
      overflow: auto;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
