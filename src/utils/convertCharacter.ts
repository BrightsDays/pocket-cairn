import { biography } from "../store/biographyStore"
import { abilities, coins, inventory, name, petty, stats } from "../store/characterStore"
import { companions } from "../store/companionsStore"
import { edition } from "../store/editionStore"
import { notes } from "../store/notesStore"
import { scars } from "../store/scarsStore"
import checkJson from "./checkJson"
import setLocalCharacter from "./setLocalCharacter"

export default (event: Event) => {
  if (event.target) {
    const reader = new FileReader()

    reader.onload = async () => {
      try {
          const character = await JSON.parse(reader.result as string)
          
          if (character.edition === 'second') {
            return
          }
            
          if (checkJson(character)) {
            edition.set('second')
            name.set(character.name)
            abilities.set(character.abilities)
            stats.set(character.stats)
            coins.set(character.coins)
            inventory.set(character.inventory)
            petty.set([
              {
                title: ''
              },
              {
                title: ''
              },
              {
                title: ''
              },
              {
                title: ''
              },
              {
                title: ''
              },
              {
                title: ''
              },
            ])
            scars.set(character.scars)
            biography.set({
              background: '',
              description: 'You are an experienced adventurer. There are legends here that you have even seen the First Age.',
              firstPerk: {
                title: '',
                content: ''
              },
              secondPerk: {
                title: '',
                subtitle: '',
                content: ''
              },
              bonds: ['']
            })
            notes.set(character.notes)
            companions.set([])

            setLocalCharacter()
          }
      } catch (err) {
        console.log(err)
      }
    }
    
    const result = (event.target as HTMLInputElement).files
    if (result) reader.readAsText(result[0])
  }
}