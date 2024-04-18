import type { Background } from "../../../../types/types"

export const hexebane: Background = {
  title: 'Hexenbane',
  description: 'You are a mere digit on the unerring hand of justice. You go where others fear to tread, unyielding and unbroken.',
  names: ['Percival', 'Felix', 'Isolde', 'Wolfram', 'Aldric', 'Eira', 'Oswin', 
  'Ivor', 'Brunhilda', 'Beatrix'],
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
      title: 'Blessed Tinctures',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Silver Knife (d6)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Crossbow (d8, bulky)',
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
  ],
  petty: [
    {title: 'Vestments of the Order'},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
  ],
  goldDices: 3,
  firstPerk: {
    title: 'To which order do you belong?',
    list: [
      {
        content: 'Order of the Crossroads. Take a Pocket Leyfinder. It points to nearby ley lines and other sources of arcane power. If you lose it, the punishment is death.',
        items: [
          {
            title: 'Pocket Leyfinder',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Order of the Bleeding Star. Take a Star-Iron mace (d8). It shines faintly in darkness, and becomes very hot in the presence of witchcraft.',
        items: [
          {
            title: 'Star-Iron mace (d8)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Order of the Glass Sigil. Take a Short Sword (d8) and Chainmail (2 Armor, bulky). You have contacts in most towns (the more rural, the better) willing to provide aid, food, or even weapons.',
        items: [
          {
            title: 'Short Sword (d8)',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Chainmail (2 Armor, bulky)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Order of the Blank Eye. Take a Voidglass Shard. Peer through it to see invisible marks, creatures, and other magical effects. Lose the use of your eye for an hour afterwards (you are deprived).',
        items: [
          {
            title: 'Voidglass Shard',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Order of Canaas. Once per day you can change into a wolf. Take a Quicksilver Chain. Without it, you are unable to shift back.',
        items: [
          {
            title: 'Quicksilver Chain',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Order of the Silent Veil. Take a Quell Stone (2 uses) wrapped in burlap. Extinguishes any nearby flames once exposed to air.',
        items: [
          {
            title: 'Quell Stone (2 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'What was your vow?',
    list: [
      {
        title: 'Honesty',
        content: 'Choose a weapon type (blunt, blade, etc). Attacks against you of this type are impaired. If your vow is broken, you lose d4 WIL.',
        items: null,
        petty: null
      },
      {
        title: 'Poverty',
        content: 'You carry the Disassemble Spellbook. Only you can use it. If your vow is broken, it explodes (d12 STR damage).',
        items: [
          {
            title: 'Disassemble Spellbook',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Selflessness',
        content: 'You are immune to magical effects such as charm, hatred, frenzy, and so on. If you break this vow, you lose d6 WIL.',
        items: null,
        petty: null
      },
      {
        title: 'Mercy',
        content: 'Choose a weapon type (blunt, blade, etc). Attacks with this weapon are enhanced. If your vow is broken, you can never use that weapon type again.',
        items: null,
        petty: null
      },
      {
        title: 'Charity',
        content: 'Once per day you can shrug off a Fatigue. If your vow is ever broken, you permanently lose one inventory slot.',
        items: [
          {
            title: 'Nightdust Powder (2 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Valor',
        content: 'The first time you inflict Critical Damage you receive d4 HP, returning to the previous limit at the end of combat. If your vow is broken, you die.',
        items: null,
        petty: null
      }
    ]
  }
}