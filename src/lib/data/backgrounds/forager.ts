import type { Background } from "../../../../types/types"

export const forager: Background = {
  title: 'Fungal Forager',
  description: 'You follow the whisperings of the deep earth, the rhythmic pulse of the mycelium forest that grows beneath the surface. The dark holds no terror for you. Also, you really love mushrooms.',
  names: ['Unther', 'Woozy', 'Hilda', 'Current', 'Leif', 'Ratan', 'Mourella', 
  'Lal', 'Per', 'Madrigal'],
  inventory: [
    {
      title: 'Rations (3 uses)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Sharpened Trowel (d6)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Candle Helmet (+1 Armor, dim, 6 uses)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Rope (25ft)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Metal Pail',
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
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
  ],
  goldDices: 3,
  firstPerk: {
    title: 'What strange fungi did you discover?',
    list: [
      {
        content: 'Shrieking Trumpet. When exposed to light it screams so loudly that all nearby attacks (including your own) are impaired (2 uses).',
        items: [
          {
            title: 'Shrieking Trumpet (2 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Torch Fungus. When crushed it creates a heatless light for ten minutes (3 uses).',
        items: [
          {
            title: 'Torch Fungus (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Murderous Truffle. Pungent, highly toxic, and very rare (worth 50gp to assassins). Illegal pretty much everywhere (1 use).',
        items: [
          {
            title: 'Murderous Truffle (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Hellcap. Exposure to its aroma causes intense nausea, even vomiting. Either way, it clears the room. Bottled (1 use).',
        items: [
          {
            title: 'Hellcap (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Sproutcup. Ingest to shrink down to the size of a mouse (your belongings stay the same size). You return to normal size within the hour, often in fits and starts (1 use).',
        items: [
          {
            title: 'Sproutcup (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Rootflower. A white fungus found only on corpses deep underground. Ingest to restore d6 WIL. You will dream of the dead, and their stories (1 use).',
        items: [
          {
            title: 'Rootflower (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'What keeps you sane, even in utter darkness?',
    list: [
      {
        title: 'Glowsnail',
        content: 'Casts a soft, bioluminescent light. Feeds on one ration every two days.',
        items: [
          {
            title: 'Glowsnail',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Silk Moth Shawl',
        content: 'A weatherproof blanket, it can also douse a fire without being damaged.',
        items: [
          {
            title: 'Silk Moth Shawl',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Milkflower',
        content: 'A gentle stimulant. Chewing makes you immune to panic for the next hour (3 uses).',
        items: [
          {
            title: 'Milkflower (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Luxcompass',
        content: 'Hums softly as it moves closer to the Sun. Eventually, the noise becomes unbearably loud.',
        items: [
          {
            title: 'Luxcompass',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Sloth-Tarp',
        content: 'A tough and weatherproof fabric, useful for hanging off trees. When inside, take +1 Armor.',
        items: [
          {
            title: 'Sloth-Tarp',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Miner`s Grease',
        content: 'Great for dislodging a gem, tool, or limb from a tight crack. Highly explosive (3 uses).',
        items: [
          {
            title: 'Miner`s Grease (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  }
}