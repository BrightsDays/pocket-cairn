import getCharacter from "./getCharacter"

export default (option: 'character' | 'list' = 'character') => {
  const character = getCharacter()

  const fileName = `${character.name}.json`
  const fileContent = JSON.stringify(character)

  const element = document.createElement('a')
	element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(fileContent))
	element.setAttribute('download', fileName)

	element.style.display = 'none'
	document.body.appendChild(element)

	element.click()
	document.body.removeChild(element)
}