import type { Background } from "../../../../types/types"

export const witch: Background = {
  title: 'Half Witch',
  description: 'Born of both the mortal world and the unseen, a crossing of veils that makes you an enigma to many. You are both a conduit and a caution of what happens when two worlds collide.',
  names: ['Solena', 'Veles', 'Bryn', 'Sabine', 'Razvan', 'Rowena', 'Galen', 
  'Nyx', 'Vex', 'Iwan'],
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
      title: 'Spellbook (Thicket)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Iron Dagger (d6)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Herbs Pouch (restore 1 STR, 3 uses)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Ghillie Suit',
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
    title: 'What did you bring back from the unseelie court?',
    list: [
      {
        content: 'A Black Rose Fiddle (bulky). Its music causes intense sadness and immobility in nearby mortals (others are merely fascinated). You don`t know how to play.',
        items: [
          {
            title: 'Black Rose Fiddle (bulky)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Paper Legs. You are extremely light, and can fall a few stories without getting hurt. Try to avoid tearing them or getting them wet.',
        items: [
          {
            title: 'Paper Legs',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A Living Nightmare that dwells within you, but manifests whenever youare in danger. It has your same Attributes and HP, and attacks with claws(d8+d8). It disappears on Critical Damage (take 1d4 WIL damage), re-appearing again on the next full moon.',
        items: null,
        petty: null
      },
      {
        content: 'A Raven Familiar [8 HP, 3 STR, 11 DEX, 13 WIL, beak (d6)]. It speaks as an intelligent being and is entirely devoted to you.',
        items: null,
        petty: null,
        companions: [{
          id: 0,
          name: 'Raven Familiar',
          type: 'Raven',
          stats: {
            str: 3,
            dex: 11,
            wil: 13,
            hp: 8,
            strMax: 3,
            dexMax: 11,
            wilMax: 13,
            hpMax: 8,
            armor: 0,
          },
          inventory: []
        }]
      },
      {
        content: 'A Briar Thorn. It can pierce any organic material (quite painfully) but when removed leaves no trace of the intrusion.',
        items: [
          {
            title: 'Briar Thorn',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A Fae creature`s True Name. Use it to summon its owner for an act of great service, but only once. It could also fetch a hefty price, to the right buyer.',
        items: null,
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'What concoction do you carry, and what rare ingredients did you gather to make it?',
    list: [
      {
        title: 'Rebirth Ash',
        content: 'Remnants of a bark spirit. Sprinkle to reignite a fire that has died, or return to life a creature that has died only moments before (3 uses).',
        items: [
          {
            title: 'Rebirth Ash (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Glamour Feather',
        content: 'Plume of a firebird. Can make any creature appear convincingly as someone (or something) else (1 use).',
        items: [
          {
            title: 'Glamour Feather (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Hawthorn Seed',
        content: 'An acorn from the other side, gathered on the spring equinox. When planted it sprouts a luxurious shelter, collapsing at moonrise the next day (1 use).',
        items: [
          {
            title: 'Hawthorn Seed (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Stonetree Sap',
        content: 'Sap obtained in exchange for blood. Hardens when rubbed on any surface (+1 Armor, 3 uses).',
        items: [
          {
            title: 'Stonetree Sap (+1 Armor, 3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Nightdust Powder',
        content: 'Made from the ritual burning of six owls. When tossed in the air, day turns to night for a short while (2 uses).',
        items: [
          {
            title: 'Nightdust Powder (2 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Hex Stone',
        content: 'Gathered from a river that flows from the other side. Removed from its iron tin, it can absorb the effects of an active magical effect. If destroyed, the magic is released (1 use).',
        items: [
          {
            title: 'Hex Stone (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  }
}