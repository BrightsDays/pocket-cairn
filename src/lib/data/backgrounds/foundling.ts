import type { Background } from "../../../../types/types"

export const foundling: Background = {
  title: 'Foundling',
  description: 'An odd birthmark, a strange smell: somehow, the touch of elsewhere still lingers. You`ll never fit in, at least not where you`re at. Roll on the Omens table, but keep the results private for now.',
  names: ['Faunus', 'Snowdrop', 'Wisp', 'Silverdew', 'Brim', 'Solstice', 'Steeleye', 
  'Sileas', 'Gossamer', 'Hazel'],
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
      title: 'Salt Pouch',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Sling (d6)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Dagger (d6)',
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
    {title: 'Heirloom Amulet (glows in the presence of magic)'},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
  ],
  goldDices: 3,
  firstPerk: {
    title: 'Who took you in?',
    list: [
      {
        content: 'An old hunter. You were both quite happy, until it all ended. Take a Weathered Longbow (d8, bulky) and a Leather Jerkin (1 Armor).',
        items: [
          {
            title: 'Weathered Longbow (d8, bulky)',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Leather Jerkin (1 Armor)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A wizened apothecary, who taught you the healing arts but maintained a clinical detachment. Take a Healing Ungent (restores d4 STR).',
        items: [
          {
            title: 'Healing Ungent (restores d4 STR)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A druid, who taught you the language of trees. When it came time to leave you took with you only a Gnarled Staff (d8) and the promise that one day you would return.',
        items: [
          {
            title: 'Gnarled Staff (d8)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A gruff blacksmith from a sleepy river town. You were always kept at arm`s length. Now the forge is cold, and you`ve moved on. Take a Smith`s Apron (petty) and a set of oft-mended Chain Mail (2 Armor, bulky).',
        items: [
          {
            title: 'Chain Mail (2 Armor, bulky)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: [
          {
            title: 'Smith`s Apron'
          }
        ]
      },
      {
        content: 'A troupe of traveling entertainers. For a time, they were like family to you. One day you woke up and they were gone with no explanation. Take a Storybook, a Dagger (d6), and some burning questions.',
        items: [
          {
            title: 'Storybook',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Dagger (d6)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'The monks of a secluded forest monastery. When their rules became too strict, you snuck away. Take a Monk`s Habit (warm, petty) and a Spellbook of Control Plants.',
        items: [
          {
            title: 'Spellbook of Control Plants',
            inHand: false,
            fatigue: false
          }
        ],
        petty: [
          {
            title: 'Monk`s Habit (warm)'
          }
        ]
      }
    ]
  },
  secondPerk: {
    title: 'What keeps away bad tidings?',
    list: [
      {
        title: 'Pipeweed',
        content: 'Your good luck charm. Conversations tend to flow more easily after a smoke (6 uses).',
        items: [
          {
            title: 'Pipeweed',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Stink Jar',
        content: 'Shattering this jar releases an odor so foul all nearby must make a STR save or immediately vomit (1 use).',
        items: [
          {
            title: 'Stink Jar (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Ivy Worm',
        content: 'A green worm often mistaken for a weed. Swallowed whole, it absorbs any toxins or rot in the body before exiting through the usual way.',
        items: [
          {
            title: 'Ivy Worm',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Dream Stone',
        content: 'A smooth blue stone that helps recall dreams more clearly. Overuse can cause dream-addiction.',
        items: [
          {
            title: 'Dream Stone',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Drowning Rod',
        content: 'A finger-sized wooden stick that doubles in size each time it is fully submerged in water. It doesn`t shrink back down.',
        items: [
          {
            title: 'Drowning Rod',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Rabbit`s Foot',
        content: 'You were wearing it when they found you. They say it is the foot of she who left you, and that it protects you from witch magic.',
        items: [
          {
            title: 'Rabbit`s Foot',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  }
}