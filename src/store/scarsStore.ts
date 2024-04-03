import { writable } from "svelte/store"
import rollDices from "../utils/rollDices"
import { abilities, stats } from "./characterStore"
import type { AbilityKeys } from "../../types/types"
import setLocalCharacter from "../utils/setLocalCharacter"

const rollSave = (abilityKey: AbilityKeys) => {
  let abilityValue: number
  abilities.subscribe(value => abilityValue = value[`${abilityKey}Max`])
  const roll = rollDices(1, 20)
  
  return (roll === 1 || roll <= abilityValue)
}

export const increaseHp = (type: 'change' | 'add', diceNumber: number = 1) => {
  let currentHp: number
  stats.subscribe(value => currentHp = value.hpMax)
  const newHp = rollDices(diceNumber, 6)
  
  if (type !== 'add') {
    if (newHp > currentHp) {
      stats.setMaxHp(newHp)
      scars.addHistory(`HP has been set to ${newHp}.`)
    } else {
      scars.addHistory('HP roll result was too low, no upgrade.')
    }
  } else {
    stats.setMaxHp(currentHp + newHp)
    scars.addHistory(`${newHp} has been added to HP.`)
  }
}

export const increaseAbility = (type: 'change' | 'add', ability?: AbilityKeys) => {
  const abilityKey = ability ? ability : ['', 'str', 'dex', 'wil'][rollDices(1, 3)]

  let currentAbility: number
  abilities.subscribe(value => currentAbility = value[`${abilityKey}Max`])
  const newAbility = rollDices(3, 6)

  if (type !== 'add') {
    if (currentAbility < newAbility) {
      abilities.setMaxAbility(abilityKey as AbilityKeys, newAbility)
      scars.addHistory(`${abilityKey.toUpperCase()} has been set to ${newAbility}.`)
    } else {
      scars.addHistory(`${abilityKey.toUpperCase()} roll result was too low, no upgrade.`)
    }
  } else {
    if (rollSave(abilityKey as AbilityKeys)) {
      const dice = rollDices(1, 4)
      abilities.setMaxAbility(abilityKey as AbilityKeys, currentAbility + dice)
      scars.addHistory(`${dice} has been added to ${abilityKey.toUpperCase()}.`)
    } else {
      scars.addHistory(`${abilityKey.toUpperCase()} save was failed, no upgrade.`)
    }
  }
}

const createScars = () => {
  const defaultScarsState = []

  const { subscribe, set, update } = writable([...defaultScarsState])

  return {
    subscribe,
    set,
    add: (index: number) => update((scars) => {
      switch (index) {
        case 1:
          scars = [...scars, {
            content: `Lasting Scar on ${['', 'Neck', 'Hands', 'Eye', 'Chest', 'Legs', 'Ear'][rollDices(1, 6)]}.`
          }]
          increaseHp('change', 1)
          break
        case 2:
          scars = [...scars, {
            content: 'Rattling Blow. You’re disoriented and shaken. Describe how you refocus.'
          }]
          increaseHp('change', 1)
          break
        case 3:
          scars = [...scars, {
            content: 'Walloped: You’re sent flying and land flat on your face, winded. You are deprived until you rest for a few hours, when resolve.',
            resolve: {
              action: 'increaseHP',
              type: 'add',
              num: 1
            }
          }]
          break
        case 4:
          scars = [...scars, {
            content: `Broken Limb: ${['', 'Leg', 'Leg', 'Arm', 'Arm', 'Rib', 'Skull'][rollDices(1, 6)]}. Once mended, resolve.`,
            resolve: {
              action: 'increaseHP',
              type: 'change',
              num: 2
            }
          }]
          break
        case 5:
          scars = [...scars, {
            content: 'Diseased: You’re afflicted with a gross, uncomfortable infection. When you get over it, resolve.',
            resolve: {
              action: 'increaseHP',
              type: 'change',
              num: 2
            }
          }]
          break
        case 6:
          scars = [...scars, {
            content: 'Reorienting Head Wound.'
          }]
          increaseAbility('change')
          break
        case 7:
          scars = [...scars, {
            content: 'Hamstrung: You can barely move until you get serious help and rest. After recovery, resolve.',
            resolve: {
              action: 'increaseAbility',
              type: 'change',
              key: 'dex'
            }
          }]
          break
        case 8:
          scars = [...scars, {
            content: 'Deafened: You cannot hear anything until you find extraordinary aid. Regardless, resolve.',
            resolve: {
              action: 'increaseAbility',
              type: 'add',
              key: 'wil'
            }
          }]
          break
        case 9:
          ' Roll 3d6. If the total is higher than your max WIL, take the new result.'
          scars = [...scars, {
            content: 'Re-brained: Some hidden part of your psyche is knocked loose.'
          }]
          increaseAbility('change', 'wil')
          break
        case 10:
          scars = [...scars, {
            content: 'Sundered: An appendage is torn off, crippled or useless. The Warden will tell you which. Then resolve.',
            resolve: {
              action: 'increaseAbility',
              type: 'add',
              key: 'wil'
            }
          }]
          break
        case 11:
          scars = [...scars, {
            content: 'Mortal Wound: You are deprived and out of action. You die in one hour unless healed. Upon recovery, resolve.',
            resolve: {
              action: 'increaseHP',
              type: 'change',
              num: 2
            }
          }]
          break
        case 12:
          scars = [...scars, {
            content: 'Doomed: Death seemed ever so close, but somehow you survived. If your next save against critical damage is a fail, you die horribly. If you pass, resolve',
            resolve: {
              action: 'increaseHP',
              type: 'change',
              num: 3
            }
          }]
          break
      }
      setTimeout(() => setLocalCharacter(), 0)
      return [...scars]
    }),
    addHistory: (content: string) => setTimeout(() => update((scars) => {
      scars = [...scars, {
        content: content
      }]
      setTimeout(() => setLocalCharacter(), 0)
      return [...scars]
    }), 0),
    resolve: (index: number) => update((scars) => {
      const resolve = scars[index].resolve
      switch (resolve.action) {
        case 'increaseHP':
          increaseHp(resolve.type, resolve.num)
          break
        case 'increaseAbility':
          increaseAbility(resolve.type, resolve.key)
          break
      }

      scars[index].resolve = null
      setLocalCharacter()
      return [...scars]
    }),
    reset: () => {
      set([...defaultScarsState])
      setLocalCharacter()
    }
  }
}

export const scars = createScars()
//TODO: check and update scars list