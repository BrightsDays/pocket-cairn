import type { Background } from "../../../../types/types"
import rollDices from "../../../utils/rollDices"

const stats = {
  str: rollDices(3, 6),
  dex: rollDices(3, 6),
  wil: rollDices(3, 6),
  hp: rollDices(3, 6)
}

export const outrider: Background = {
  title: 'Outrider',
  description: 'Your coin comes from escorting caravans, tracking fugitives, or lending your blade to a cause. You`ve been a savior, an executioner, a hero, and even a villain. Yours is not a solitary path, however: you`ll always have your horse.',
  names: ['Drake', 'Cyra', 'Keir', 'Darius', 'Valen', 'Rorik', 'Yara', 'Rui', 
  'Talon', 'Jory'],
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
      title: 'Long Sword (d10, bulky)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Leather Jerkin (1 Armor)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Crossbow (d8, bulky)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Spyglass',
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
    title: 'What personal code or principle do you uphold?',
    list: [
      {
        content: 'No innocent blood: No bystanders will come to harm on your watch. Take a Steadymade Buckler (+1 Armor). While holding this shield you cannot be moved so long as both feet are planted on firm ground.',
        items: [
          {
            title: 'Steadymade Buckler (+1 Armor)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Revere the tools of death: Weapons are to be respected and maintained. Take a Wyrmbone Whetstone. Following a half hour ritual sharpening, attacks with the weapon are enhanced until STR damage is dealt.',
        items: [
          {
            title: 'Wyrmbone Whetstone',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'To the death, always: You never back down from a fight, no matter the odds. Take a Death-Whistle, 1 charge. Its scream frightens away all who hear it (save WIL or flee). Recharge: Capture the final breath of a dying warrior.',
        items: [
          {
            title: 'Death-Whistle, 1 charge',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Revere the Dead: Death is a journey we all take, and it deserves respect. Take an extra 30gp. You always place two gold pieces on the eyelids of a slain foe. Somehow, you always find the coin.',
        items: null,
        petty: [
          {
            title: 'extra 30gp'
          }
        ]
      },
      {
        content: 'Loyalty to the work: Your word is your bond. Once you`ve accepted a job, you see it through to the end. Take a weathered Tally Stick. Once a vow is marked unto its face, the stick hardens (d8) until it is complete. The stick will snap in half if the vow is ever broken.',
        items: null,
        petty: [
          {
            title: 'Tally Stick'
          }
        ]
      },
      {
        content: 'Always pay your debts: You always repay what you owe, whether in coin or in kind. You expect nothing less from all others. Take a blacked-out ledger, then roll a second time on the Bonds (pg. 15) table.',
        items: [
          {
            title: 'Blacked-out Ledger',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'What breed is your horse?',
    list: [
      {
        title: 'Heavy Destrier',
        content: 'A beast built for war; an imposing creature. 8 HP, 1 Armor, hooves (d10+d10), +2 slots.',
        items: null,
        petty: null,
        companions: [{
          id: 0,
          name: 'Heavy Destrier',
          type: 'Horse',
          stats: {
            str: stats.str,
            dex: stats.dex,
            wil: stats.wil,
            hp: 8,
            strMax: stats.str,
            dexMax: stats.dex,
            wilMax: stats.wil,
            hpMax: 8,
            armor: 1,
          },
          inventory: [
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
          ]
        }]
      },
      {
        title: 'Blacklegged Dandy',
        content: 'Hardy and adaptable, Tough or Perilous terrain (pg. 76) are one step easier. 6 HP. +4 slots.',
        items: null,
        petty: null,
        companions: [{
          id: 0,
          name: 'Blacklegged Dandy',
          type: 'Horse',
          stats: {
            str: stats.str,
            dex: stats.dex,
            wil: stats.wil,
            hp: 6,
            strMax: stats.str,
            dexMax: stats.dex,
            wilMax: stats.wil,
            hpMax: 6,
            armor: 0,
          },
          inventory: [
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
          ]
        }]
      },
      {
        title: 'Rivertooth',
        content: 'Impressively strong, capable of carrying heavy loads. 4 HP. +6 slots (+2 if carrying two people).',
        items: null,
        petty: null,
        companions: [{
          id: 0,
          name: 'Rivertooth',
          type: 'Horse',
          stats: {
            str: stats.str,
            dex: stats.dex,
            wil: stats.wil,
            hp: 4,
            strMax: stats.str,
            dexMax: stats.dex,
            wilMax: stats.wil,
            hpMax: 4,
            armor: 0,
          },
          inventory: [
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
          ]
        }]
      },
      {
        title: 'Piebald Cob',
        content: 'Intelligent, it can understand simple commands, and even has an instinct for danger. 6 HP. +4 slots.',
        items: null,
        petty: null,
        companions: [{
          id: 0,
          name: 'Piebald Cob',
          type: 'Horse',
          stats: {
            str: stats.str,
            dex: stats.dex,
            wil: stats.wil,
            hp: 6,
            strMax: stats.str,
            dexMax: stats.dex,
            wilMax: stats.wil,
            hpMax: 6,
            armor: 0,
          },
          inventory: [
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
          ]
        }]
      },
      {
        title: 'Linden White',
        content: 'Highly trained and agile, it can perform intricate maneuvers in a time of need (no DEX save to flee). +3 slots.',
        items: null,
        petty: null,
        companions: [{
          id: 0,
          name: 'Linden White',
          type: 'Horse',
          stats: {
            str: stats.str,
            dex: stats.dex,
            wil: stats.wil,
            hp: stats.hp,
            strMax: stats.str,
            dexMax: stats.dex,
            wilMax: stats.wil,
            hpMax: stats.hp,
            armor: 0,
          },
          inventory: [
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
          ]
        }]
      },
      {
        title: 'Stray Fogger',
        content: 'Wild, but very fast, even in Tough terrain (pg. 76). Rides light. 4 HP. +2 slots.',
        items: null,
        petty: null,
        companions: [{
          id: 0,
          name: 'Stray Fogger',
          type: 'Horse',
          stats: {
            str: stats.str,
            dex: stats.dex,
            wil: stats.wil,
            hp: 4,
            strMax: stats.str,
            dexMax: stats.dex,
            wilMax: stats.wil,
            hpMax: 4,
            armor: 0,
          },
          inventory: [
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' },
          ]
        }]
      }
    ]
  }
}