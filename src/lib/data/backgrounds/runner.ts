export default {
  title: 'Rill Runner',
  description: 'You sing the stories of rivers and lakes, your talents soothing friends and the elements alike. You`ve seen more than most, but somehow it never seems to be enough.',
  names: ['Gale', 'Piper', 'Brook', 'Adair', 'Stone', 'Dale', 'Wren', 'Cliff', 
  'Rain', 'Robin'],
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
      title: 'Water Shoes',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Brigandine (1 Armor, bulky)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Compass',
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
    title: 'What songs are you best known for?',
    list: [
      {
        content: 'The Tinker`s Two-Step. A humorous fairy tale about a gift-giving traveler. Start with a Reed Whistle. Anyone in earshot must pass a WIL save to perform an act of violence.',
        items: [
          {
            title: 'Reed Whistle.',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'The Sylph and Her Lover. A bawdy tale of lost love. Start with a Breeze Knot (3 charges). Creates a strong breeze. Recharge: Tie it to a mast during a storm.',
        items: [
          {
            title: 'Breeze Knot (3 charges)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Harper`s Devotion. A sad, short tale about a musician that falls in love with a star. Start with a Celestial Lute. Reveals the constellations above, no matter the weather.',
        items: [
          {
            title: 'Celestial Lute',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'The Reed Fisher. A celebrated song about a massive carp that always seems to get away. Begin with a spool of River Twine (5 uses). Each dip into the river guarantees a catch, though it might not be pleasant.',
        items: [
          {
            title: 'Spool of River Twine (5 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Song of the Silver Stream. A wordless lullaby that mimics flowing water. Take a Stone Flute that can calm almost any river.',
        items: [
          {
            title: 'Stone Flute',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'The Thrush and the Meadow. A moody tale told in alternating chorus. Start with a Feather Quill (1 use, petty). A map drawn with this quill reveals the most expedient course between any two points.',
        items: null,
        petty: [
          {
            title: 'Feather Quill (1 use)'
          }
        ]
      }
    ]
  },
  secondPerk: {
    title: 'What pays your way across the land?',
    list: [
      {
        title: 'Performance',
        content: 'Performing at taverns always yields both room and board. Sometimes you even get tips! Start with an extra d6 gold.',
        items: null,
        petty: [
          {
            title: 'extra d6 gp'
          }
        ]
      },
      {
        title: 'Bodyguard',
        content: 'You are a protector for those afraid to travel alone. Start with a rapier (d8).',
        items: [
          {
            title: 'Rapier (d8)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Wares',
        content: 'You buy low and sell high, always making just enough to get by. Take a Single Item worth 20gp or less from the equipment table.',
        items: null,
        petty: [
          {
            title: 'take any item for 20 or less gp'
          }
        ]
      },
      {
        title: 'Transport',
        content: 'You deliver “delicate” packages throughout the lands. You have at least one contact in any major town.',
        items: null,
        petty: null
      },
      {
        title: 'Sailor`s Friend',
        content: 'Whether water, wind, or sail, your aid brings ships to their destination. For you, passage is always free.',
        items: null,
        petty: null
      },
      {
        title: 'Guide',
        content: 'You shepherd caravans and travelers across water-soaked lands. Start with a Map relevant to your next journey.',
        items: null,
        petty: [
          {
            title: 'Map relevant to your next journey'
          }
        ]
      }
    ]
  }
}