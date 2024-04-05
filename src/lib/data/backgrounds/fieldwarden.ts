import type { Background } from "../../../../types/types"

export const fieldwarden: Background = {
  title: 'Fieldwarden',
  description: 'Protectors of the harvest, defense against pests, thieves, and beasts. A position of great honor, while it lasts: many guardians do not live out their natural lives.',
  names: ['Seed', 'Thresh', 'Dibber', 'Sow', 'Stalk', 'Harrow', 'Cobb', 
  'Flax', 'Briar', 'Rye'],
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
      title: 'Brigandine (1 Armor, bulky)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Sling (d6)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Hand Axe (d6)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Repellent (state the creature, 3 uses)',
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
    title: 'What got the better of you?',
    list: [
      {
        content: 'A voracious swarm of pests that swallowed crops and animals alike. With nothing to defend, you left. Take Gale Seed Extract (3 uses). Ingesting one lets you sprint with a speed four times your regular rate. Afterward you add two Fatigue.',
        items: [
          {
            title: 'Gale Seed Extract (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A crop spirit, angered by a poor tithing. The fires consumed nearly everything, and afterwards you were able to gather a pouch of Fireseeds (d8, blast, 4 uses).',
        items: [
          {
            title: 'Fireseeds (d8, blast, 4 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'An antlered, toothy demon that nearly ended you. Take a blood-stained bone knife (d6). On critical damage, its next attack becomes enhanced from contact with blood.',
        items: [
          {
            title: 'blood-stained bone knife (d6)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'The Withering, a type of stem rot from The Roots. Take a Diseased Crop (6 uses) that decays any plant it touches.',
        items: [
          {
            title: 'Diseased Crop (6 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Wolves, or so you thought. You are now a Werewolf [8 HP, 15 STR, 14 DEX, claws (d6+d6) or bite (d8)]. Your WIL remains the same. You can turn at will (once per day) but must make a WIL save to revert. Anyone left alive from your attacks must make a WIL save to avoid infection.',
        items: null,
        petty: null
      },
      {
        content: 'Crop thieves. Not all of them survived, but you were outnumbered. Take a +d4 HP and a Hilted Broadsword (d8, bulky).',
        items: [
          {
            title: 'Smoke Pellets (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null,
        hp: true
      }
    ]
  },
  secondPerk: {
    title: 'What tool saved your life?',
    list: [
      {
        title: 'Bloodvine Whip',
        content: 'd8 damage. On Critical Damage it drains the target`s blood, granting the weapon`s next attack the blast quality.',
        items: [
          {
            title: 'Bloodvine Whip (d8)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Clatter Keeper',
        content: 'A hand-cranked device that emits a loud noise, frightening away most creatures.',
        items: [
          {
            title: 'Clatter Keeper',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Sun Stick',
        content: 'Provides ample warmth and light for up to one hour (1 use). Recharge: Leave in heavy sunlight for a full day.',
        items: [
          {
            title: 'Sun Stick (1 charge)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Root Tether',
        content: 'When thrown, binds up to a wolf-sized creature to the soil for a short time.',
        items: [
          {
            title: 'Root Tether',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Greenwhistle',
        content: 'A small flute that calms plants, making passage through areas heavy with plant life a bit easier.',
        items: [
          {
            title: 'Greenwhistle',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Everbloom Band',
        content: 'A circlet adorned with flowers that never wilt. On taking Critical Damage the flowers dissolve into dust, but you act as if your save succeeded (STR loss still occurs).',
        items: [
          {
            title: 'Everbloom Band',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  }
}