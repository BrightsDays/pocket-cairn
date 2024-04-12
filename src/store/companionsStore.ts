import { writable } from "svelte/store"
import type { Companion, CompanionAbilityKeys, Petty } from "../../types/types"
import setLocalCharacter from "../utils/setLocalCharacter"

const createCompanions = () => {
  const { subscribe, set, update } = writable([])

  return {
    subscribe,
    set,
    increase: (key: CompanionAbilityKeys, id: number) => update((companions) => {
      const target = companions.find(item => item.id === id)
      target.stats[key] += target.stats[key] < (target.stats[`${key}Max`] || 9) ? 1 : 0
      setLocalCharacter()
      return [...companions]
    }),
		decrease: (key: CompanionAbilityKeys, id: number) => update((companions) => {
      const target = companions.find(item => item.id === id)  
      target.stats[key] -= target.stats[key] > 0 ? 1 : 0
      setLocalCharacter()
      return [...companions]
    }),
    changeItems: (value: Petty[], id: number) => update((companions) => {
      const target = companions.find(item => item.id === id)
      target.inventory = value
      setLocalCharacter()
      return [...companions]
    }),
    addCompanion: (value: Companion) => update((companions) => {
      value.id = Date.now()
      return [...companions, value]
    }),
    removeCompanion: (id: number) => update((companions) => {
      companions = companions.filter(item => item.id !== id)
      return [...companions]
    })
  }
}

export const companions = createCompanions()