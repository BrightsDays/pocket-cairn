<script lang="ts">
  import TextArea from '../ui/TextArea.svelte'
  import { notes } from '../../store/notesStore'
  import { edition } from '../../store/editionStore'
  import { biography } from '../../store/biographyStore'

  let showBio = true
  let checked: 'biography' | 'notes' = 'biography'

  const bioHandler = () => {
    checked = 'biography'
  }
  const notesHandler = () => {
    checked = 'notes'
  }
</script>

<div class="notes">
  {#if $edition === 'second'}
    <div class="menu">
      <button
        class={`title button ${checked === 'biography' ? ' checked' : ''}`}
        on:click={bioHandler}>Biography</button
      >
      <button
        class={`title button ${checked === 'notes' ? ' checked' : ''}`}
        on:click={notesHandler}>Notes</button
      >
    </div>
    {#if checked === 'biography'}
      <div class="content">
        <div class="wrap">
          <div class="text">
            <b>{$biography.background}</b>
            <p>{$biography.description}</p>
            <b>{$biography.firstPerk.title}</b>
            <p>{$biography.firstPerk.content}</p>
            <b>{$biography.secondPerk.title}</b>
            <p>{$biography.secondPerk.content}</p>
            <b>Your bond</b>
          </div>
        </div>
      </div>
    {:else if checked === 'notes'}
      <div class="content">
        <div class="wrap">
          <TextArea
            value={$notes}
            on:input={(event) => notes.change(event.detail)}
          />
        </div>
      </div>
    {/if}
  {:else if $edition === 'first'}
    <span class="title">Notes:</span>
    <div class="content">
      <div class="wrap">
        <TextArea
          value={$notes}
          on:input={(event) => notes.change(event.detail)}
        />
      </div>
    </div>
  {/if}
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

    .menu {
      display: flex;
      width: 100%;
      height: max-content;
      @include gap(2);
    }

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

      &.button {
        background: none;
        opacity: 0.6;
        border: 1px solid var(--second);
        border-bottom: none;
        transition: opacity 0.2s;
        &:hover {
          opacity: 0.4;
        }
        &:active {
          transform: scale(0.9);
          transition: 0.1s;
        }

        &.checked {
          opacity: 1;
        }
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

      .text {
        display: flex;
        flex-direction: column;
        font-family: inherit;
        margin: 0;
        @include padding(4, 2);
        text-align: left;
        font-size: var(--font-regular);
        box-sizing: border-box;
        border: none;
        line-height: 1.2;
        overflow: hidden;
        resize: vertical;
        @include gap(2);
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
