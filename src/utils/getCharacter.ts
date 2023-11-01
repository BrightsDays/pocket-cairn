import type { Abilities, Coins, Stats, Inventory, Scar } from "../../types/types"
import { abilities, coins, inventory, name, stats } from "../store/characterStore"
import { scars } from "../store/scarsStore"

export default () => {
  let nameValue: string
  name.subscribe((value) => (nameValue = value))
  let abilitiesValue: Abilities
  abilities.subscribe((value) => (abilitiesValue = value))
  let statsValue: Stats
  stats.subscribe((value) => (statsValue = value))
  let coinsValue: Coins
  coins.subscribe((value) => (coinsValue = value))
  let inventoryValue: Inventory
  inventory.subscribe((value) => (inventoryValue = value))
  let scarsValue: Scar[]
  scars.subscribe((value) => scarsValue = value)

  return {
    name: nameValue,
    abilities: {
      str: abilitiesValue.str,
      dex: abilitiesValue.dex,
      wil: abilitiesValue.wil,
      strMax: abilitiesValue.strMax,
      dexMax: abilitiesValue.dexMax,
      wilMax: abilitiesValue.wilMax,
    },
    stats: {
      hp: statsValue.hp,
      hpMax: statsValue.hpMax,
      armor: statsValue.armor,
      deprived: statsValue.deprived,
    },
    coins: {
      gp: coinsValue.gp,
      sp: coinsValue.sp,
      cp: coinsValue.cp,
    },
    inventory: inventoryValue,
    scars: scarsValue
  }
}