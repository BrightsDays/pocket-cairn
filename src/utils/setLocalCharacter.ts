import getCharacter from "./getCharacter"

export default () => {
  console.log('SET LOCAL CHARACTER');
  
  const character = getCharacter()
  localStorage.setItem('pc__character', JSON.stringify(character))
}