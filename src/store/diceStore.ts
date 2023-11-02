import { writable } from "svelte/store"
import rollDices from "../utils/rollDices"

const createDices = () => {
  const { subscribe, set, update } = writable([
    {
      key: '4',
      value: 4,
      count: 0
    },
    {
      key: '6',
      value: 6,
      count: 0
    },
    {
      key: '8',
      value: 8,
      count: 0
    },
    {
      key: '10',
      value: 10,
      count: 0
    },
    {
      key: '12',
      value: 12,
      count: 0
    },
    {
      key: '20',
      value: 20,
      count: 0
    },
  ])

  return {
    subscribe,
    set,
    roll:(key: string) => update((dices) => {
      dices.find(item => item.key === key).count += 1
      dices.find(item => item.key === key).value = rollDices(1, +key)
      return [...dices]
    })
  }
}

export const dices = createDices()