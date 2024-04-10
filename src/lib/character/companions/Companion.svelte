<script lang="ts">
  import type { Companion, CompanionAbilityKeys } from '../../../../types/types'
  import TextInput from '../../ui/TextInput.svelte'
  import Stat from '../../ui/Stat.svelte'
  import Section from '../../ui/Section.svelte'
  import { companions } from '../../../store/companionsStore'
  import Button from '../../ui/Button.svelte'
  import cross from '../../../assets/icons/cross.svg'
  import Modal from '../../ui/Modal.svelte'
  import setLocalCharacter from '../../../utils/setLocalCharacter'

  export let companion: Companion
  let removeModal = false

  const list: CompanionAbilityKeys[] = ['str', 'dex', 'wil', 'hp']

  const increaseHandler = (ability: CompanionAbilityKeys) => () => {
    companions.increase(ability, companion.id)
  }
  const decreaseHandler = (ability: CompanionAbilityKeys) => () => {
    companions.decrease(ability, companion.id)
  }

  const showModal = () => (removeModal = true)
  const closeModal = () => (removeModal = false)
  const removeCompanion = () => {
    companions.removeCompanion(companion.id)
    setLocalCharacter()
    removeModal = false
  }
</script>

<div class="companion">
  <Section position="first">
    <div class="header">
      <div class="content">
        <span class="title">Name: {companion.name}</span>
        <span class="title">Type: {companion.type}</span>
      </div>
      <Button borderless image={cross} alt="remove" on:click={showModal} />
    </div>
  </Section>
  {#if companion.type.toLowerCase() !== 'transport'}
    <Section position={!companion.inventory.length && 'last'}>
      <div class="stat-list">
        {#each list as ability}
          <Stat
            title={ability}
            value={companion.stats[ability]}
            maxValue={companion.stats[`${ability}Max`]}
            size="small"
            on:decrease={decreaseHandler(ability)}
            on:increase={increaseHandler(ability)}
          />
        {/each}
        <Stat
          title="Armor"
          value={companion.stats.armor}
          maxValue={9}
          hideMaxValue
          size="small"
          on:decrease={decreaseHandler('armor')}
          on:increase={increaseHandler('armor')}
        />
      </div>
    </Section>
  {/if}
  {#if companion.inventory.length}
    <Section position="last">
      <div class="inventory">
        <div class="heading">
          <span class="info">Inventory</span>
        </div>
        <div class="list">
          {#each companion.inventory as item}
            <div class="item">
              <TextInput
                placeholder="Item"
                value={item.title}
                border={false}
                on:input={(event) => {
                  item.title = event.detail
                  companions.changeItems(companion.inventory, companion.id)
                }}
              />
            </div>
          {/each}
        </div>
      </div>
    </Section>
  {/if}
</div>

<Modal
  isShown={removeModal}
  on:cancel={closeModal}
  on:ok={removeCompanion}
  teleportId="notes"
>
  Are you really want to remove a {companion.name}?
</Modal>

<style lang="scss" scoped>
  @import '../../../app.scss';

  .companion {
    border: 1px solid var(--second);
    border-radius: 10px;
    @include padding(4, 2);

    .header {
      display: flex;
      justify-content: space-between;

      .title {
        font-size: var(--font-medium);
        overflow: hidden;
        overflow-x: auto;
        white-space: nowrap;
      }
    }

    .content,
    .stat-list {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr;
      gap: 5px 30px;
      @media screen and (min-width: 540px) {
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  .inventory {
    .heading {
      display: flex;
      width: 100%;
      justify-content: space-between;

      .info {
        color: var(--second);
      }
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 1vw;

      .item {
        position: relative;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--main);
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
