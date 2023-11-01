import { abilities, coins, inventory, name, stats } from "../store/characterStore"
import { scars } from "../store/scarsStore"
import checkJson from "./checkJson"
import getCharacter from "./getCharacter"

export default (event: Event) => {
  if (event.target) {
    const reader = new FileReader()

    reader.onload = () => {
      if (reader.result) {
        const character = JSON.parse(reader.result as string)
          
        if (checkJson(character)) {
          name.set(character.name)
          abilities.set(character.abilities)
          stats.set(character.stats)
          coins.set(character.coins)
          inventory.set(character.inventory)
          scars.set(character.scars)
        }
      }
    }
    
    const result = (event.target as HTMLInputElement).files
    if (result) reader.readAsText(result[0])
  }
}