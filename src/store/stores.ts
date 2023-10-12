import { writable } from 'svelte/store'

export const nameStore = writable('')

export const abilitiesStore = writable({
  str: 0,
  dex: 0,
  wil: 0,
  strMax: 10,
  dexMax: 10,
  wilMax: 10
})

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