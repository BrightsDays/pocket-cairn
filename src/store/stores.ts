import { writable } from 'svelte/store'

export const nameStore = writable('Test name')

export const abilitiesStore = writable( {
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

export const inventoryStore = writable([
  {
    title: 'Thing',
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
  },
  {
    title: '',
    inHand: false,
    fatigue: false
  }
])