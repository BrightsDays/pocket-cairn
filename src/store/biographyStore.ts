import { writable } from 'svelte/store'

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
      subtitle: '',
      content: ''
    },
    bonds: ['']
  })

  return {
		subscribe,
    set
	}
}

export const biography = createBiography()