<script lang="ts">
  import TextArea from '../ui/TextArea.svelte'
  import { notes } from '../../store/notesStore'
  import { edition } from '../../store/editionStore'
  import { biography } from '../../store/biographyStore'

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
        ontouchstart=""
        class={`title button ${checked === 'biography' ? ' checked' : ''}`}
        on:click={bioHandler}>Biography</button
      >
      <button
        ontouchstart=""
        class={`title button ${checked === 'notes' ? ' checked' : ''}`}
        on:click={notesHandler}>Notes</button
      >
    </div>
    {#if checked === 'biography'}
      <div class="content">
        <div class="wrap">
          <div class="text">
            <h3>{$biography.background}</h3>
            <span>{$biography.description}</span>
            <b>{$biography.firstPerk.title}</b>
            <span>{$biography.firstPerk.content}</span>
            <b>{$biography.secondPerk.title}</b>
            <span>{$biography.secondPerk.content}</span>
            <b>Your bond</b>
            <span>{$biography.bond}</span>
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
      @media screen and (min-width: 768px) {
        padding-left: calc(0px + 0.5625vw);
        padding-bottom: calc(0px + 0.5625vw);
        margin-bottom: calc(-4px - 0.5625vw);
      }

      &.button {
        background: none;
        opacity: 0.6;
        color: var(--main);
        border: 1px solid var(--second);
        border-bottom: none;
        border-radius: 5px 5px 0 0;
        transition: opacity 0.2s;
        &:hover {
          opacity: 0.4;
        }
        &:active {
          transform: translateY(-5px);
          transition: 0.2s;
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

      border-top: 1px solid var(--second);
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

        h3 {
          margin: 0;
        }
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
