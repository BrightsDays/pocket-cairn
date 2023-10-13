import type { Abilities, Coins, Stats, inventory } from "../../types/types"
import { abilitiesStore, coinsStore, inventoryStore, nameStore, statsStore } from "../store/characterStore"

export default () => {
  let name: string
  nameStore.subscribe((value) => (name = value))
  let abilities: Abilities
  abilitiesStore.subscribe((value) => (abilities = value))
  let stats: Stats
  statsStore.subscribe((value) => (stats = value))
  let coins: Coins
  coinsStore.subscribe((value) => (coins = value))
  let inventory: inventory
  inventoryStore.subscribe((value) => (inventory = value))

  return {
    name: name,
    abilities: {
      str: abilities.str,
      dex: abilities.dex,
      wil: abilities.wil,
      strMax: abilities.strMax,
      dexMax: abilities.dexMax,
      wilMax: abilities.wilMax,
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