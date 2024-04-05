export default {
  title: 'Scrivener',
  description: 'You copy ancient texts and illuminate manuscripts, recording the voices of the clever, the great, and the powerful. You will prove that the pen truly is mightier than the sword.',
  names: ['Per', 'Stilo', 'Akshara', 'Pisa', 'Ji-Yun', 'Kalamos', 'Hugo', 
  'Shui', 'Kalam', 'Julius'],
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
      title: 'Quill & Ink',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Blank Book',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Awl (d6)',
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
    {title: 'Badge'},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
  ],
  goldDices: 3,
  firstPerk: {
    title: 'What work did you keep for yourself?',
    list: [
      {
        content: 'The Wild Tongue. A bundle of leather-bound scrolls. A seminal work, cataloging the hidden languages of beasts, and how to understand them.',
        items: [
          {
            title: 'The Wild Tongue',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'The Silent Symphony. Bound in fluorescent wrap. Very rare, it chronicles the subtle signs used by those employing invisibility magic.',
        items: [
          {
            title: 'The Silent Symphony',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A Treatise on the Abyss. A non-descript black book. An in-depth, largely theoretical text describing The Roots, as well as information around the location of a nearby Gate.',
        items:  [
          {
            title: 'A Treatise on the Abyss',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'The Star Waltz. A comet-shaped clasp embracing a fine leather cover. Detailed astronomical charts, celestial movements, and stellar festivals. Highly valued (100gp) for its usefulness to travelers.',
        items: [
          {
            title: 'The Star Waltz (100gp)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'The Cathedral and the Canopy. Large-leaf binding over vellum. Nominally a children`s storybook, the margins detail information about traveling, eating, and sleeping in the cloud forests.',
        items: [
          {
            title: 'The Cathedral and the Canopy',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Garden of Glass. Bound in the cover of another book. A heretical work, it describes the materials, procedures, and optimal locations required to open a Gate.',
        items: [
          {
            title: 'Garden of Glass',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'How do you transcribe sensitive information?',
    list: [
      {
        title: 'Fib Ink',
        content: 'Glows when used to write true statements, but fades if used to write false ones.',
        items: [
          {
            title: 'Fib Ink',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Cipher Stone',
        content: 'A pair of sharp black stones. Decrypts any message written by the other.',
        items: [
          {
            title: 'Cipher Stone',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Everquill',
        content: 'A quill that writes on any surface. You still need ink (petty).',
        items: null,
        petty: [
          {
            title: 'Everquill'
          }
        ]
      },
      {
        title: 'Whisper Vial',
        content: 'Whisper a message into the vial and it will play back to whomever opens it next.',
        items: [
          {
            title: 'Whisper Vial',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Voyeur`s Suringa',
        content: 'Extracts blood from a target without their knowledge. A stolen drop placed on the eye reveals memories from the past day.',
        items: [
          {
            title: 'Voyeur`s Suringa',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Echo Leaf',
        content: 'A blank parchment. Whomever unfurls it sees their actions of the day slowly revealed in a tight scrawl.',
        items: [
          {
            title: 'Echo Leaf',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  }
}