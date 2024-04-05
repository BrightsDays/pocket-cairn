import getCharacter from "./getCharacter"

export default () => {  
  const character = getCharacter()
  localStorage.setItem('pc__character', JSON.stringify(character))
}