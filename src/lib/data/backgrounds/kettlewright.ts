export default {
  title: 'Kettlewright',
  description: 'You are known by the smell of molten metal and the jingle of tin. You are not a mere merchant, but an artisan of fire and metal.',
  names: ['Fergus', 'Eamon', 'Bram', 'Idris', 'Elara', 'Darragh', 'Seren', 
  'Rónán', 'Berek', 'Lorenz'],
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
      title: 'Pincers',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Roll of Tin',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Tent (fits 2)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Hammer (d6)',
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
    title: 'What is your trade?',
    list: [
      {
        content: 'You build small contraptions for local guilds (and don`t ask too many questions). Take an extra 40gp and a wanted poster with your face on it. Given time and materials, you can open almost any door or vault.',
        items: null,
        petty: [
          {
            title: 'extra 40gp'
          }
        ]
      },
      {
        content: 'You deal in home goods and tools, hawking your wares to townspeople across the lands. Take 20gp of items from the gear table. You are fluent in the Traveller`s Cant.',
        items: null,
        petty: [
          {
            title: 'extra 20gp'
          }
        ]
      },
      {
        content: 'You were a military smelter, before peace destroyed your livelihood. Take a Smelting Hammer (d10, bulky) and a Tin Helm (+1 Armor). Given time and adequate materials, you can repair armor.',
        items: [
          {
            title: 'Smelting Hammer (d10, bulky)',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Tin Helm (+1 Armor).',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'You sell rare and quality items to monasteries and nobles alike. Take a Spyglass, a Necklace (petty) worth 20gp, and a Scroll of Mirrorwalk (petty).',
        items: [
          {
            title: 'Spyglass',
            inHand: false,
            fatigue: false
          }
        ],
        petty: [
          {
            title: 'Necklace '
          },
          {
            title: 'Scroll of Mirrorwalk'
          }
        ]
      },
      {
        content: 'You offer protection as a service, quietly watching for threats as money exchanges hands. You start with +d4 HP, and carry a Long Sword (d10, bulky) and a Brigandine (1 Armor, bulky).',
        items: [
          {
            title: 'Long Sword (d10, bulky)',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Brigandine (1 Armor, bulky)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'You scavenge raw tin and iron from battlefields, pulling teeth from still- twitching corpses. Start with a young Donkey (+4 slots, slow), a Crossbow (d8 damage, bulky), and a Saw (d6).',
        items: [
          {
            title: 'Crossbow (d8 damage, bulky)',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Saw (d6)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'What never fails to get you out of trouble?',
    list: [
      {
        title: 'Fire Eggs',
        content: 'Six small pellets made of sea salt, wood, and crockery-dust. They explode at low heat (d8, blast) but dissipate quickly.',
        items: [
          {
            title: 'Fire Eggs (6 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Black Tar',
        content: 'Versatile: both sticky and highly flammable (3 uses).',
        items: [
          {
            title: 'Black Tar (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Spiked Boots',
        content: 'Cracks heads (d8) as easily as it does ice and muck. Travel is also a bit slower, but easier.',
        items: [
          {
            title: 'Spiked Boots (d8)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Tinker`s Paste',
        content: 'Seals shut any fist-sized opening (3 uses).',
        items: [
          {
            title: 'Tinker`s Paste (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Fireworks',
        content: 'A dazzling, albeit dangerous display. Enough explosive material to blow off a finger or three (2 uses remain).',
        items: [
          {
            title: 'Fireworks (2 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Carrion Cat',
        content: 'A clever pet, small enough to hide in your pack (bulky) strong enough to scare off smaller predators. Requires one Ration a day, and it must be meat.',
        items: [
          {
            title: 'Carrion Cat (bulky)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  }
}