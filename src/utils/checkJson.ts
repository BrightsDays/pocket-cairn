import type { Companion, Edition } from "../../types/types"
import { edition } from "../store/editionStore"
import getCharacter from "./getCharacter"

export default (character: {edition: Edition, companions: Companion[]}) => {
  edition.set(character.edition || 'first')
  if (!character.edition) character.edition = 'first'
  if (!character.companions) character.companions = []
  
  const testCharacter = getCharacter()
  
  let isValid = true
  
  Object.keys(testCharacter).forEach((key: string) => {
    if (!Object.keys(character).includes(key)) {
      isValid = false
    }
  })

  return isValid
}