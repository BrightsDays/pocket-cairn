import spells from '../lib/data/spells'
import {
  startingArmor,
  startingGear,
  startingHelmOrShield,
  startingTools,
  startingTrinkets,
  startingWeapons,
} from '../lib/data/startingGear'
import rollDices from './rollDices'

export default () => {
  const helmOrShield = startingHelmOrShield()[rollDices(1, 20)]
  const bonusItem = (number: number) => {
    if (number <= 3) {
      return startingTools[rollDices(1, 20)]
    } else if (number <= 5) {
      return startingTrinkets[rollDices(1, 20)]
    } else if (number <= 13) {
      return startingGear[rollDices(1, 20)]
    } else if (number <= 15) {
      return startingArmor()[rollDices(1, 20)]
    } else if (number <= 17) {
      return startingWeapons()[rollDices(1, 20)]
    } else {
     return `Spellbook (${spells[rollDices(1, 100)]})`
    }
  }

  const inventory = [
    {
      title: 'Rations (3)',
      inHand: false,
      fatigue: false,
    },
    {
      title: 'Torch',
      inHand: false,
      fatigue: false,
    },
    {
      title: startingArmor()[rollDices(1, 20)],
      inHand: false,
      fatigue: false,
    },
    {
      title: startingWeapons()[rollDices(1, 20)],
      inHand: false,
      fatigue: false,
    },
    {
      title: helmOrShield === 'both' ? 'Helmet (+1 Armor)' : helmOrShield,
      inHand: false,
      fatigue: false,
    },
    {
      title: helmOrShield === 'both' ? 'Shield (+1 Armor)' : '',
      inHand: false,
      fatigue: false,
    },
    {
      title: startingGear[rollDices(1, 20)],
      inHand: false,
      fatigue: false,
    },
    {
      title: startingTools[rollDices(1, 20)],
      inHand: false,
      fatigue: false,
    },
    {
      title: startingTrinkets[rollDices(1, 20)],
      inHand: false,
      fatigue: false,
    },
    {
      title: bonusItem(rollDices(1, 20)),
      inHand: false,
      fatigue: false,
    },
  ].sort((a, b) => a.title > b.title ? -1 : 1)
  
  return inventory
}