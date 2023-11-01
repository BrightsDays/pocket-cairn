import getCharacter from "./getCharacter"

export default (character: string) => {
  const testCharacter = getCharacter()
  let isValid = true
  
  Object.keys(testCharacter).forEach((key: string) => {
    if (!Object.keys(character).includes(key)) {
      console.log(testCharacter, character);
      
      isValid = false
    }
  })

  return isValid
}