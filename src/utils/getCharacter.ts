import type { Abilities, Coins, Stats, inventory } from "../../types/types"
import { abilities, coinsStore, inventoryStore, nameStore, statsStore } from "../store/characterStore"

export default () => {
  let name: string
  nameStore.subscribe((value) => (name = value))
  let abilitiesValue: Abilities
  abilities.subscribe((value) => (abilitiesValue = value))
  let stats: Stats
  statsStore.subscribe((value) => (stats = value))
  let coins: Coins
  coinsStore.subscribe((value) => (coins = value))
  let inventory: inventory
  inventoryStore.subscribe((value) => (inventory = value))

  return {
    name: name,
    abilities: {
      str: abilitiesValue.str,
      dex: abilitiesValue.dex,
      wil: abilitiesValue.wil,
      strMax: abilitiesValue.strMax,
      dexMax: abilitiesValue.dexMax,
      wilMax: abilitiesValue.wilMax,
    },
    stats: {
      hp: stats.hp,
      hpMax: stats.hpMax,
      armor: stats.armor,
      deprived: stats.deprived,
    },
    coins: {
      gp: coins.gp,
      sp: coins.sp,
      cp: coins.cp,
    },
    inventory: inventory
  }
}