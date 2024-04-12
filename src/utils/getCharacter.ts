import type { Abilities, Coins, Stats, Inventory, Scar, Edition, Biography, Companion } from "../../types/types"
import { biography } from "../store/biographyStore"
import { abilities, coins, inventory, name, petty, stats } from "../store/characterStore"
import { edition } from "../store/editionStore"
import { notes } from "../store/notesStore"
import { scars } from "../store/scarsStore"
import { companions } from "../store/companionsStore"

export default () => {
  let editionValue: Edition
  edition.subscribe((value: Edition) => (editionValue = value))
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
  let pettyValue: {title: string}[]
  petty.subscribe((value) => (pettyValue = value))
  let scarsValue: Scar[]
  scars.subscribe((value) => scarsValue = value)
  let biographyValue: Biography
  biography.subscribe((value) => biographyValue = value)
  let companionsValue: Companion[]
  companions.subscribe((value) => companionsValue = value)
  let notesValue: string
  notes.subscribe((value) => notesValue = value)

  if (editionValue === 'first') {
    return {
      edition: editionValue,
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
      scars: scarsValue,
      notes: notesValue
    }
  }

  if (editionValue === 'second') {
    return {
      edition: editionValue,
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
        gp: coinsValue.gp
      },
      inventory: inventoryValue,
      petty: pettyValue,
      scars: scarsValue,
      biography: biographyValue,
      notes: notesValue,
      companions: companionsValue
    }
  }
}