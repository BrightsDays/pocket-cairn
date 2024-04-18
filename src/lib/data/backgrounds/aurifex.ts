import type { Background } from "../../../../types/types";

export const aurifex: Background = {
    title: 'Aurifex',
    description: 'You are an artisan of the arcane, a smith of subtle forces. In the crucible of your workshop, the laws that govern this world are warped to suit your needs.',
    names: ['Hestia', 'Basil', 'Rune', 'Prism', 'Ember', 'Quintess', 
    'Aludel', 'Mordant', 'Salaman', 'Jazia'],
    inventory: [
      {
        title: 'Rations (3 uses)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Lantern',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Oil Can (6 uses)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Needle-Knife (d6)',
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
    ],
    petty: [
      {title: 'Protective Gloves'},
      {title: ''},
      {title: ''},
      {title: ''},
      {title: ''},
      {title: ''},
    ],
    goldDices: 3,
    firstPerk: {
      title: 'What experiment went horribly wrong?',
      list: [
        {
          content: 'There was an explosion, and you lost your sense of smell. Well, almost: you can sniff out gold as a pig does truffles. Take a Tin of Snuff (6 uses) to dampen the impact. Use it every day or become deprived.',
          items: [
            {
              title: 'Tin of Snuff (6 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'You dematerialized a beloved pet. Now it follows you around, invisible but always present. Although it cannot interact with the physical realm, you are able to share its senses (add a Fatigue each time). It follows basic commands.',
          items: null,
          petty: null
        },
        {
          content: 'You were exposed to a long-acting truth serum whose effects have yet to wear off. The disorder has its advantages: you cannot repeat lies you`ve heard, either.',
          items: null,
          petty: null
        },
        {
          content: 'You were adept at creating fake gold, which is almost as good. Eventually, your ruse was discovered and you had to make a hasty retreat. Take a heavy Metal Ingot and Gold Powder (3 uses).',
          items: [
            {
              title: 'Metal Ingot',
              inHand: false,
              fatigue: false
            },
            {
              title: 'Gold Powder (3 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Your recipe worked, but a rival stole the blueprint before your claims could be proven. Take a prototype Blunderbuss (d12, blast, bulky) and a taste for revenge.',
          items: [
            {
              title: 'Blunderbuss (d12, blast, bulky)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Ridiculed for discovering how to turn gold into lead, you were a laughing stock. Take a bottle of Universal Solvent (2 uses) that dissolves anything it touches into its constituent parts.',
          items: [
            {
              title: 'Universal Solvent (2 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        }
      ]
    },
    secondPerk: {
      title: 'What alchemical marvel is the product of your latest ingenuity?',
      list: [
        {
          title: 'Pyrophoric Gel',
          content: 'A sticky green fluid that catches fire when exposed to air, then burns for 8 hours. Cannot be extinguished (1 use).',
          items: [
            {
              title: 'Pyrophoric Gel (1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Blast Sphere',
          content: 'A head-sized iron ball filled with explosive powder that explodes on impact (d12, blast, bulky, 1 use).',
          items: [
            {
              title: 'Blast Sphere (d12, blast, bulky, 1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Aqua Vita',
          content: 'Purifies any liquid, converting it to pure water. Drinking it cures 1d6 STR (1 use).',
          items: [
            {
              title: 'Aqua Vita (1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Mimic Stone',
          content: 'Records a short phrase that can later be played back.',
          items: [
            {
              title: 'Mimic Stone',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Spark Dust',
          content: 'Ignites easily and quickly. Useful for starting a fire or as an incendiary device (3 uses).',
          items: [
            {
              title: 'Spark Dust (3 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Homunculus',
          content: 'A miniature clay replica of yourself that follows your every command to the letter. It hates being enthralled to you and complains bitterly whenever possible. Any damage done to the homunculus is also done to you.',
          items: [
            {
              title: 'Homunculus',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        }
      ]
    }
  }