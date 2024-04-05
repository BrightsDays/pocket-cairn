export default {
  title: 'Cutpurse',
  description: 'You live in the grey space between those who have power and those who don`t. You find opportunity where others see only chaos. With nimble fingers, you unburden both the richest merchant and the lowliest guard.',
  names: ['Sable', 'Lyra', 'Eamon', 'Salina', 'Elara', 'Freya', 'Isolde', 
  'Sparrow', 'Ivy', 'Silas'],
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
      title: 'Twin Daggers (d6+d6, bulky)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Padded Leather (1 Armor)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Lockpicks',
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
    {title: 'Black Outfit'},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
  ],
  goldDices: 3,
  firstPerk: {
    title: 'What was your last big job?',
    list: [
      {
        content: 'A noble`s summer home. The place was full of fancy wine (+20gp) but not much else. Take Fence Cutters.',
        items: [
          {
            title: 'Fence Cutters',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A bank (you were caught). You bear a brand only visible by firelight, and anyone that sees the mark can ask you for a beer. Take Retractable Wires.',
        items: [
          {
            title: 'Retractable Wires',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A guild warehouse. Take a Ladder (bulky, 10ft) and Blinding Powder (1 use).',
        items: [
          {
            title: 'Ladder (bulky, 10ft)',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Blinding Powder (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Moneylender. Someone beat you to the job, but left behind a Scroll of Arcane Eye (petty).',
        items: null,
        petty: [
          {
            title: 'Scroll of Arcane Eye'
          }
        ]
      },
      {
        content: 'Constable`s quarters. You escaped, but left some friends behind. Take Strong Silk Rope and a queasy feeling.',
        items: [
          {
            title: 'Strong Silk Rope',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A university. You were seen, but not pursued. You still don`t know why. Take Smoke Pellets (3 uses).',
        items: [
          {
            title: 'Smoke Pellets (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'What helps you steal?',
    list: [
      {
        title: 'Catring',
        content: '2 charges. Climb up walls and fall safely. Recharge: Place the ring on a stray cat`s tail.',
        items: [
          {
            title: 'Catring (2 charges)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Gildfinger',
        content: '1 charge. A finger glove that mimics any mundane key. Recharge: Bundle it with at least 100gp for a night.',
        items: [
          {
            title: 'Gildfinger (1 charge)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Glimpse Glass',
        content: '3 charges. A monocle that lets you see through walls or other obstructions. It shatters after the last use.',
        items: [
          {
            title: 'Glimpse Glass (3 charges)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Sweetwhistle',
        content: '1 charge. Listeners hear a soft, familiar voice in the distance that they cannot resist following. Recharge: Lose a dear memory (describe it).',
        items: [
          {
            title: 'Sweetwhistle (1 charge)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Vagrant`s Veil',
        content: '1 charge. Wear it to blend seamlessly into crowds, appearing as a simple pauper. Recharge: Donate all the day`s winnings to the poor (Petty).',
        items: null,
        petty: [
          {
            title: 'Vagrant`s Veil (1 charge)'
          }
        ]
      },
      {
        title: 'Smokestack Marble',
        content: '3 uses. Crush to release a dense cloud of smoke that follows you (Petty).',
        items: null,
        petty: [
          {
            title: 'Smokestack Marble (3 uses)'
          }
        ]
      }
    ]
  }
}