import type { Background } from "../../../../types/types"

export const mountebank: Background = {
  title: 'Mountebank',
  description: 'Wits are your sharpest weapon, a facade your strongest shield. But when you do lose, you lose badly.',
  names: ['Ambrose', 'Lucius', 'Beauregard', 'Cornelius', 'Aria', 'Seren', 'Indigo', 
  'Delphine', 'Solene', 'Noa'],
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
      title: 'Cane Sword (d6)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Playing Cards (tricked)',
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
    {title: 'Fancy Hat'},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
  ],
  goldDices: 3,
  firstPerk: {
    title: 'How was your fraud exposed?',
    list: [
      {
        content: 'Your “patients” kept reporting miraculous recoveries, despite your lack of training. Start with Bandages (3 uses) and a knack for healing.',
        items: [
          {
            title: 'Bandages (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null,
        companions: [{
          id: 0,
          name: 'Cart',
          type: 'Transport',
          stats: {
            str: 1,
            dex: 1,
            wil: 1,
            hp: 2,
            strMax: 1,
            dexMax: 1,
            wilMax: 1,
            hpMax: 2,
            armor: 0,
          },
          inventory: [
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' }
          ]
        }]
      },
      {
        content: 'After seducing a wealthy patron, their family hired a criminal gang to retrieve you. You got away and need to lay low. Start with Beauty Cream (2 uses). Apply to appear irresistibly beautiful for the next 12 hours.',
        items: [
          {
            title: 'Beauty Cream (2 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null,
        companions: [{
          id: 0,
          name: 'Cart',
          type: 'Transport',
          stats: {
            str: 1,
            dex: 1,
            wil: 1,
            hp: 2,
            strMax: 1,
            dexMax: 1,
            wilMax: 1,
            hpMax: 2,
            armor: 0,
          },
          inventory: [
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' }
          ]
        }]
      },
      {
        content: 'You were a peddler of fake prophesies, but when one turned out to be true, it drew unwanted attention. Roll on the Omens (pg. 15) table, but keep the result to yourself. Start with a concealable Knife (d6, petty).',
        items: null,
        petty: [
          {
            title: 'Knife (d6, petty)'
          }
        ],
        companions: [{
          id: 0,
          name: 'Cart',
          type: 'Transport',
          stats: {
            str: 1,
            dex: 1,
            wil: 1,
            hp: 2,
            strMax: 1,
            dexMax: 1,
            wilMax: 1,
            hpMax: 2,
            armor: 0,
          },
          inventory: [
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' }
          ]
        }]
      },
      {
        content: 'Your latest stunt destroyed a priceless artifact and injured a dozen bystanders. Start with a Captain`s Uniform (petty), a Ceremonial Sword (harmless, 60gp), and a Bouquet of Flowers.',
        items: [
          {
            title: 'Ceremonial Sword (harmless, 60gp)',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Bouquet of Flowers',
            inHand: false,
            fatigue: false
          }
        ],
        petty: [
          {
            title: 'Captain`s Uniform'
          }
        ],
        companions: [{
          id: 0,
          name: 'Cart',
          type: 'Transport',
          stats: {
            str: 1,
            dex: 1,
            wil: 1,
            hp: 2,
            strMax: 1,
            dexMax: 1,
            wilMax: 1,
            hpMax: 2,
            armor: 0,
          },
          inventory: [
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' }
          ]
        }]
      },
      {
        content: 'You were cursed by a hedgewitch for fooling some innocent village folk. Magic acts unpredictably in your hands (WIL save to avoid disaster). If you are the target of magic, the same applies to its wielder.',
        items: null,
        petty: null,
        companions: [{
          id: 0,
          name: 'Cart',
          type: 'Transport',
          stats: {
            str: 1,
            dex: 1,
            wil: 1,
            hp: 2,
            strMax: 1,
            dexMax: 1,
            wilMax: 1,
            hpMax: 2,
            armor: 0,
          },
          inventory: [
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' }
          ]
        }]
      },
      {
        content: 'Your “seances” with the dead were in actuality a ruse involving a cleverly hidden Spellbook of Auditory Illusion. Inevitably, a patron discovered your secret. Start with the spellbook and a Bundle of Scarves.',
        items: [
          {
            title: 'Spellbook of Auditory Illusion',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Bundle of Scarves',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null,
        companions: [{
          id: 0,
          name: 'Cart',
          type: 'Transport',
          stats: {
            str: 1,
            dex: 1,
            wil: 1,
            hp: 2,
            strMax: 1,
            dexMax: 1,
            wilMax: 1,
            hpMax: 2,
            armor: 0,
          },
          inventory: [
            { title: '' },
            { title: '' },
            { title: '' },
            { title: '' }
          ]
        }]
      }
    ]
  },
  secondPerk: {
    title: 'What keepsake could always identify you?',
    list: [
      {
        title: 'Royal Crest',
        content: 'Born into royalty, you chose a different life. The crest grants you access, but also alerts your family of your whereabouts.',
        items: null,
        petty: [
          {
            title: 'Royal Crest'
          }
        ]
      },
      {
        title: 'Miracle Oil',
        content: 'A smelly concoction that is also very, very, slippery (2 uses).',
        items: [
          {
            title: 'Miracle Oil (2 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Surgeon`s Soap',
        content: 'A lye and ash block that makes skin temporarily transparent, revealing the anatomy within (4 uses).',
        items: [
          {
            title: 'Surgeon`s Soap (4 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Goat Powder',
        content: 'Derived from the placenta of a baby goat. Temporarily cures any affliction, but symptoms return within hours.',
        items: [
          {
            title: 'Goat Powder',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Cursed Sapphire',
        content: 'Touch an injured creature to transfer their wounds to you (exchange their lost STR with your own). Recharge: Wear the ring while in perfect health. It will take 1 STR, permanently (petty).',
        items: null,
        petty: [
          {
            title: 'Cursed Sapphire'
          }
        ]
      },
      {
        title: 'Alchemical Tattoo',
        content: 'A dog, cat, or bird that can leave your body on demand. It follows your commands to the best of its abilities, and can pass its injuries (as STR loss) back onto you.',
        items: null,
        petty: null
      }
    ]
  }
}