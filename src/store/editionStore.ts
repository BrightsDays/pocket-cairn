import { writable } from "svelte/store"

const createEdition = () => {
  const { subscribe, set, update } = writable('first')

  return {
		subscribe,
    set,
    change: () => update((edition) => {
      edition = edition === 'second' ? 'first' : 'second'      
      return edition
    })
	}
}

export const edition = createEdition()