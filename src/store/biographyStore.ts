import { writable } from 'svelte/store'
import setLocalCharacter from '../utils/setLocalCharacter'

const createBiography = () => {
  const { subscribe, set } = writable({
    background: '',
    description: '',
    firstPerk: {
      title: '',
      content: ''
    },
    secondPerk: {
      title: '',
      content: ''
    },
    bonds: ''
  })

  return {
		subscribe,
    set
	}
}

export const biography = createBiography()