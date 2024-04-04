import { writable } from 'svelte/store'
import type { AbilityKeys, CoinKeys, Inventory, Petty } from '../../types/types'
import setLocalCharacter from '../utils/setLocalCharacter'

const createAbilities = () => {
	const { subscribe, set, update } = writable({
    str: 0,
    dex: 0,
    wil: 0,
    strMax: 0,
    dexMax: 0,
    wilMax: 0
  })

	return {
		subscribe,
    set,
		increase: (key: AbilityKeys) => update((abilities) => {
      abilities[key] += abilities[key] < abilities[`${key}Max`] ? 1 : 0
      setLocalCharacter()
      return {...abilities}
    }),
		decrease: (key: AbilityKeys) => update((abilities) => {
      abilities[key] -= abilities[key] > 0 ? 1 : 0
      setLocalCharacter()
      return {...abilities}
    }),
    setMaxAbility: (key: AbilityKeys, value: number) => update((abilities) => {
      abilities[`${key}Max`] = value
      setLocalCharacter()
      return {...abilities}
    })
	}
}

const createStats = () => {
  const { subscribe, set, update } = writable({
    hp: 0,
    hpMax: 10,
    armor: 0,
    deprived: false
  })

  return {
    subscribe,
    set,
    increaseHp: () => update((stats) => {
      stats.hp += stats.hp < stats.hpMax ? 1 : 0
      setLocalCharacter()
      return {...stats}
    }),
    decreaseHp: () => update((stats) => {
      stats.hp -= stats.hp > 0 ? 1 : 0
      setLocalCharacter()
      return {...stats}
    }),
    setMaxHp: (value: number) => update((stats) => {
      stats.hpMax = value
      setLocalCharacter()
      return {...stats}
    }),
    increaceArmor: () => update((stats) => {
      stats.armor += stats.armor < 9 ? 1 : 0
      setLocalCharacter()
      return {...stats}
    }),
    decreaseArmor: () => update((stats) => {
      stats.armor -= stats.armor > 0 ? 1 : 0
      setLocalCharacter()
      return {...stats}
    }),
    changeDeprived: () => update((stats) => {
      stats.deprived = !stats.deprived
      setLocalCharacter()
      return {...stats}
    })
  }
}

const createCoins = () => {
  const { subscribe, set, update } = writable({
    gp: '0',
    sp: '0',
    cp: '0'
  })

  return {
		subscribe,
    set,
    change: (key: CoinKeys, value: string) => update((coins) => {
      coins[key] = value
      setLocalCharacter()
      return {...coins}
    })
	}
}

const createInventory = () => {
  const { subscribe, set, update } = writable([
    {
      title: 'Rations (3)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Torch',
      inHand: false,
      fatigue: false
    },
    {
      title: '',
      inHand: false,
      fatigue: false
    },
    {
      title: '',
      inHand: false,
      fatigue: false
    },
    {
      title: '',
      inHand: false,
      fatigue: false
    },
    {
      title: '',
      inHand: false,
      fatigue: false
    },
    {
      title: '',
      inHand: false,
      fatigue: false
    },
    {
      title: '',
      inHand: false,
      fatigue: false
    },
    {
      title: '',
      inHand: false,
      fatigue: false
    },
    {
      title: '',
      inHand: false,
      fatigue: false
    }
  ])

  return {
		subscribe,
    set,
    change: (value: Inventory) => update((inventory) => {
      inventory = value
      setLocalCharacter()
      return [...inventory]
    })
	}
}

const createPetty = () => {
  const { subscribe, set, update } = writable([
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

  return {
		subscribe,
    set,
    change: (value: Petty) => update((petty) => {
      petty = value
      setLocalCharacter()
      return [...petty]
    })
	}
}

export const name = writable('')
export const abilities = createAbilities()
export const stats = createStats()
export const coins = createCoins()
export const inventory = createInventory()
export const petty = createPetty()