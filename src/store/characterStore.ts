import { writable } from 'svelte/store'
import type { Abilities, AbilityKeys } from '../../types/types'
import setLocalCharacter from '../utils/setLocalCharacter'

export const nameStore = writable('')

export const statsStore = writable({
  hp: 0,
  hpMax: 10,
  armor: 0,
  deprived: false
})

export const coinsStore = writable({
  gp: '0',
  sp: '0',
  cp: '0'
})

export const inventoryStore = writable([
  {
    title: 'Rations (3)',
    inHand: false,
    fatigue: false
  },
  {
    title: 'Torch',
    inHand: false,
    fatigue: false
  },
  {
    title: '',
    inHand: false,
    fatigue: false
  },
  {
    title: '',
    inHand: false,
    fatigue: false
  },
  {
    title: '',
    inHand: false,
    fatigue: false
  },
  {
    title: '',
    inHand: false,
    fatigue: false
  },
  {
    title: '',
    inHand: false,
    fatigue: false
  },
  {
    title: '',
    inHand: false,
    fatigue: false
  },
  {
    title: '',
    inHand: false,
    fatigue: false
  },
  {
    title: '',
    inHand: false,
    fatigue: false
  }
])

const createAbilities = () => {
	const { subscribe, set, update } = writable({
    str: 0,
    dex: 0,
    wil: 0,
    strMax: 0,
    dexMax: 0,
    wilMax: 0
  })

	return {
		subscribe,
		increase: (key: AbilityKeys) => update((abilities) => {
      abilities[key] += abilities[key] < abilities[`${key}Max`] ? 1 : 0
      setLocalCharacter()
      return {...abilities}
    }),
		decrease: (key: AbilityKeys) => update((abilities) => {
      abilities[key] -= abilities[key] > 0 ? 1 : 0
      setLocalCharacter()
      return {...abilities}
    }),
    set: (value: Abilities) => set(value)
	}
}
export const abilities = createAbilities()