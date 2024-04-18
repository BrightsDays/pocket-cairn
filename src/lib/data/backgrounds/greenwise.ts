import type { Background } from "../../../../types/types"

export const greenwise: Background = {
  title: 'Greenwise',
  description: 'You delve deep into The Woods, prying its secrets from between rough boughs and whispering leaves. In this verdant kingdom, you are no mere scholar, but its confidant as well.',
  names: ['Briar', 'Moss', 'Fern', 'Lichen', 'Root', 'Willow', 'Sage', 'Yarrow', 
  'Rowan', 'Ash'],
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
      title: 'Iron Pot',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Root Knife (d6)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Healing Salve (restores 1d4 STR, 1 use)',
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
    {title: 'Twine Bauble (petty, Ward once per day)'},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
  ],
  goldDices: 3,
  firstPerk: {
    title: 'How have The Woods failed you?',
    list: [
      {
        content: 'An ill-tempered forest spirit cursed you for stealing, marking you as an enemy of their kind. Take a Bezoar Stone. Ingesting it cures any poison (1 use, unless retrieved).',
        items: [
          {
            title: 'Bezoar Stone',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A close friend, swallowed whole. Now you see their face in any tea you brew. Take a Soporific Concoction (3 uses).',
        items: [
          {
            title: 'Soporific Concoction (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'You were poisoned, losing your sense of taste and smell. You can now withstand noxious fumes, and always carry Antitoxin (2 uses).',
        items: [
          {
            title: 'Antitoxin (2 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Your radical experiments turned your skin green, and you now gain nourishment as a plant. You don`t need rations, but a day without sufficient sunlight and water leaves you deprived.',
        items: null,
        petty: null
      },
      {
        content: 'Your impressive corpseflower won a local contest then promptly killed a judge. You fled, but not without the Prize Money (100gp) and a warrant for your arrest.',
        items: [
          {
            title: 'Prize Money (100gp)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'You created a restorative tincture that also caused accidental infertility. Take a Healing Potion that completely restores STR. Only you know of its unintended side-effects.',
        items: [
          {
            title: 'Healing Potion',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'What keeps you safe while in The Woods?',
    list: [
      {
        title: 'Amadou',
        content: 'A vermillion fungus that catches fire quite easily (3 uses).',
        items: [
          {
            title: 'Amadou (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Delphinium',
        content: 'Breathe water for up to one hour (1 use, but can be divided into fractional doses).',
        items: [
          {
            title: 'Delphinium (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Tacky Stalk',
        content: 'A woody reed that hardens into a permanent adhesive when chewed (2 uses).',
        items: [
          {
            title: 'Tacky Stalk (2 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Wisp Lantern',
        content: 'Caged in wrought iron, provides a dim light so long as the wisp is able to feed on nearby pain and fear.',
        items: [
          {
            title: 'Wisp Lantern',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Seed Bomb',
        content: 'A canvas sack filled with seeds that explodes on impact. d6 damage (blast, 3 uses).',
        items: [
          {
            title: 'Seed Bomb (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Briarvine',
        content: 'Entangles any creature up to horse size (STR to break free, reusable).',
        items: [
          {
            title: 'Briarvine',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  }
}