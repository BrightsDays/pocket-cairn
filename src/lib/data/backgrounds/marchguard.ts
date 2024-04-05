export default {
  title: 'Marchguard',
  description: 'Bound by blood Oath to patrol the border and protect the realm. Once sworn, the Oath cannot be broken. The Guard always finds their own.',
  names: ['Gann', 'Light', 'Gale', 'Frost', 'Thorn', 'Reed', 'Flint', 'Brook', 
  'Brie', 'Aasim'],
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
      title: 'Long Sword (d10, bulky)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Boiled Leather (1 Armor)',
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
    title: 'Why did you take the Oath?',
    list: [
      {
        content: 'Your family has a long tradition of serving, and you were trained from an early age on how to survive in the wild. When taking the Supply (pg. 80) action your yield increases by one step (e.g. 1d4 > 1d6).',
        items: null,
        petty: null
      },
      {
        content: 'As a convict, the Oath was simply a means of avoiding punishment. Take Lockpicks, and the Key to a safehouse (petty).',
        items: [
          {
            title: 'Lockpicks',
            inHand: false,
            fatigue: false
          }
        ],
        petty: [
          {
            title: 'Key to a safehouse'
          }
        ]
      },
      {
        content: 'Noble-born, you joined to escape family trouble. Take a Goosefelt Tarp (fits two) that you stole before leaving home.',
        items: [
          {
            title: 'Goosefelt Tarp (fits two)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'When your family lost everything, you took the Oath to avoid becoming a burden. Take extra Rations (3 uses) and Throwing Knives (d6).',
        items: [
          {
            title: 'Rations (3 uses)',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Throwing Knives (d6)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Your life was saved by a member of the Marchguard, and you were inspired to join their ranks. Take a Snare Trap and a Sketchbook filled with detailed drawings.',
        items: [
          {
            title: 'Snare Trap',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Sketchbook',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'You were in a dark place, and decided that your life needed a little direction. You`re still not so sure it was the right choice. Take an Oilskin Coat and Mapping Paper.',
        items: [
          {
            title: 'Oilskin Coat',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Mapping Paper',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'What do you carry as proof of your Oath?',
    list: [
      {
        title: 'Impressive Pin',
        content: 'A metal badge of honor from the Guard. It can open doors, but leaves a trail (petty).',
        items: null,
        petty: [
          {
            title: 'Impressive Pin'
          }
        ]
      },
      {
        title: 'Oath Compass',
        content: 'Points not towards North, but instead to the nearest member of the Guard. It also lets you know when they`re getting close.',
        items: [
          {
            title: 'Oath Compass',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Pullstones',
        content: 'Two jet-black stones. When separated, the stones will always roll in the direction of the other.',
        items: [
          {
            title: 'Pullstones',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Fireflask',
        content: 'Highly alcoholic, yet strangely delicious. When thrown creates a wall of flames 10ft high that burns out after a few minutes (1 use).',
        items: [
          {
            title: 'Fireflask (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Pain Band',
        content: 'Touch an injured creature to transfer their wounds to you (exchange their lost STR with your own). Recharge: Wear the ring while in perfect health. It will take 1 STR, permanently (petty).',
        items: null,
        petty: [
          {
            title: 'Pain Band'
          }
        ]
      },
      {
        title: 'Poacher`s Woe',
        content: 'Strongly-scented arrows (3 uses). The scent is powerful enough to track with ease.',
        items: [
          {
            title: 'Poacher`s Woe',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  }
}