import { writable } from 'svelte/store'
import setLocalCharacter from '../utils/setLocalCharacter'

const createNotes = () => {
  const { subscribe, set, update } = writable('')

  return {
		subscribe,
    set,
    change: (value: string) => update((notes) => {
      notes = value
      setLocalCharacter()      
      return notes
    })
	}
}

export const notes = createNotes()