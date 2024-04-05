import type { Item, Petty } from "../../types/types"
import { inventory, petty } from "../store/characterStore"

function isItem(item: Item | Petty): item is Item {
  return (item as Item).fatigue !== undefined
}

export default (list: Item[] | Petty[]) => {
  let inventoryValue: Item[]
  inventory.subscribe(value => inventoryValue = value)
  let pettyValue: Petty[]
  petty.subscribe(value => pettyValue = value)

  list.forEach((item) => {
    if (isItem(item)) {
      const temporal = [...inventoryValue]
      const index = temporal.findIndex((element) => !element.title.length)
      temporal[index] = item
      inventory.set(temporal)
    } else {
      const temporal = [...pettyValue]
      const index = temporal.findIndex((element) => !element.title.length)
      temporal[index] = item
      petty.set(temporal)
    }
  })
}