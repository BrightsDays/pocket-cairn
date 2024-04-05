export default {
  title: 'Prowler',
  description: 'You are a specter in the night, a fleeting shadow that slips by its prey, unseen. Each kill a test of cunning and animal determination, a contest between life and death. You know that one day you will lose. You look forward to it.',
  names: ['Winda', 'Brielle', 'Theron', 'Chayse', 'Nuja', 'Dev', 'Raven', 
  'Lyra', 'Sable'],
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
      title: 'Tarp (shelters 1)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Boiled Leather (1 Armor)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Short Sword (d6)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Spring-Loaded Trap (4 STR damage)',
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
    title: 'What did you last hunt?',
    list: [
      {
        content: 'A mock firefly, baiting water carriers with its glowing lure. Take an Alchemical Limb (d8) to replace the one it tore off. It works as well as the real thing, and is immune to poison, fire, and heat. Sometimes it jams.',
        items: [
          {
            title: 'Alchemical Limb (d8)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'An ice nettle, trapping and draining sheep. You lost your commission when the fungus you introduced killed half the flock. Take a Rime Seed (1 use). It freezes any body of water, no matter the size. Don`t eat it.',
        items: [
          {
            title: 'Rime Seed (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A silver marsh crawler that killed someone close to you. You now carry its Tooth (petty) on a chain around your neck as a warning to others of its kind. The tooth hums softly when something is stalking you.',
        items: null,
        petty: [
          {
            title: 'Tooth'
          }
        ]
      },
      {
        content: 'A malicious forest spirit that poisoned a homestead. You saved a Heartseed from the roots of a dying tree (plant to create a a new forest). Also, take Iron Bracers (+1 Armor, bulky).',
        items: [
          {
            title: 'Iron Bracers (+1 Armor, bulky)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A hollow wolf that had been frightening travellers. You took pity on the half-starved creature, and nursed it back to health. Now it is loyal to you unto death. It is also a great tunneler. 5 HP, 11 STR, 13 DEX, 8 WIL, teeth (d6).',
        items: null,
        petty: null
      },
      {
        content: 'An azure warbler. The gametes attract a sizeable profit, if properly extracted. You succeeded, but left its nest to the wolves. Take a Paring Knife (d6), an extra 20gp, and a pang of regret.',
        items: [
          {
            title: 'Paring Knife (d6)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: [
          {
            title: 'extra 20gp'
          }
        ]
      }
    ]
  },
  secondPerk: {
    title: 'What tool is always in your pack?',
    list: [
      {
        title: 'Fermented Spirits',
        content: 'Keeps you warm at the best of times, and can be used as an explosive at the worst (3 Uses).',
        items: [
          {
            title: 'Fermented Spirits (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Trail Shaker',
        content: 'A noisy instrument that reveals nearby trails, even when deeply hidden.',
        items: [
          {
            title: 'Trail Shaker',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Drowse Balm',
        content: 'A wax bar. If boiled in water, the steam acts as a soporific agent.',
        items: [
          {
            title: 'Drowse Balm',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Spike and Cord',
        content: 'For traversing or securing difficult terrains, or for creating makeshift traps and structures.',
        items: [
          {
            title: 'Spike and Cord',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Iron Rattle',
        content: 'Touch an injured creature to transfer their wounds to you (exchange their lost STR with your own). Recharge: Wear the ring while in perfect health. It will take 1 STR, permanently (petty).',
        items: [
          {
            title: 'Iron Rattle',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Hardening Glue',
        content: 'Makes any flat material (cloth, leather, sand) as hard as stone. Expensive (20gp a bottle, 3 uses).',
        items: [
          {
            title: 'Hardening Glue (20gp a bottle, 3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  }
}