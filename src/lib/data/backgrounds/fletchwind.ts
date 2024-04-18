import type { Background } from "../../../../types/types"

export const fletchwind: Background = {
  title: 'Fletchwind',
  description: 'Protectors of the harvest, defense against pests, thieves, and beasts. A position of great honor, while it lasts: many guardians do not live out their natural lives.',
  names: ['Flint', 'Feather', 'Crier', 'Thunder', 'Falcon', 'Pluck', 'Needle', 
  'Warsong', 'Hawk', 'Cai'],
  inventory: [
    {
      title: 'Rations (3 uses)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Torch (3 uses)',
      inHand: false,
      fatigue: false
    },
    {
      title: '',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Serrated Knife (d6)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Boiled Leather (1 Armor)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Heartroot Salve (restores 1d4 STR, 1 use)',
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
  ],
  petty: [
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
  ],
  goldDices: 3,
  firstPerk: {
    title: 'What kind of wood is your bow made from?',
    list: [
      {
        content: 'Western Yew (d6, bulky). Can be wielded as a blunt weapon (d6). Noisy.',
        items: [
          {
            title: 'Western Yew (d6, bulky)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Sessile Oak (d8, bulky). Slams into targets. On critical damage, something is torn off.',
        items: [
          {
            title: 'Sessile Oak (d8, bulky)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Stone Pine (d6, bulky). Produces one use of Sticky Sap per day. It is highly explosive.',
        items: [
          {
            title: 'Stone Pine (d6, bulky)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'White Ash (d6, bulky). Can be used in place of a shield in melee combat (+1 Armor).',
        items: [
          {
            title: 'White Ash (d6, bulky)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: []
      },
      {
        content: 'Striped Bamboo (d6). Collapsible, it only requires one slot (but still requires both hands).',
        items: [
          {
            title: 'Striped Bamboo (d6)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Wych Elm (d6, bulky). Protects the bearer from poisons and toxins, so long as they are holding it.',
        items: [
          {
            title: 'Wych Elm (d6, bulky)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'How did you earn your bow?',
    list: [
      {
        title: 'War',
        content: 'If you are first to attack, your bow gains the blast property for the first round.',
        items: null,
        petty: null
      },
      {
        title: 'Falconry',
        content: 'You keep a falcon [3 hp, 5 STR, 16 DEX, 4 WIL, claws (d6+d6), bite (d6)]. It only eats live game.',
        items: null,
        petty: null,
        companions: [{
          id: 0,
          name: 'Falcon',
          type: 'Falcon',
          stats: {
            str: 5,
            dex: 16,
            wil: 4,
            hp: 3,
            strMax: 5,
            dexMax: 16,
            wilMax: 4,
            hpMax: 3,
            armor: 0,
          },
          inventory: []
        }]
      },
      {
        title: 'Hunting',
        content: 'When taking the Supply (pg. 80) action your ability to secure Rations increases by one step (e.g. 1d4 becomes 1d6).',
        items: null,
        petty: null
      },
      {
        title: 'Tournaments',
        content: 'Attacks with your bow are enhanced if the target is immobile.',
        items: null,
        petty: null
      },
      {
        title: 'Training',
        content: 'If you are the first to attack, melee attacks against you are impaired until you take STR damage.',
        items: null,
        petty: null
      },
      {
        title: 'Scouting',
        content: 'When taking the Travel (pg. 80) action, your presence decreases the chance of getting lost by one step (e.g. 4-in-6 becomes 3-in-6).',
        items: null,
        petty: null
      }
    ]
  }
}