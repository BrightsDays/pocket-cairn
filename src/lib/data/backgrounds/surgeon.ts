export default {
  title: 'Barber-Surgeon',
  description: 'You walk the line between healer and harrower, knowing the frailty of the flesh but also the secrets that lay within. With the right tools, life and death are merely words.',
  names: ['Wilmot', 'Patch', 'Lancet', 'Sawbones', 'Theo', 'Cutwell', 
  'Humor', 'Landsford', 'Goodeye', 'Johanna'],
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
      title: 'Amputation Knife (d6)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Bandages (3 uses)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Leech (restores 1 STR, 3 uses)',
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
    {title: 'Stained Medical Finery'},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
  ],
  goldDices: 3,
  firstPerk: {
    title: 'How have you “improved” yourself?',
    list: [
      {
        content: 'You have a replacement eye that can magnify objects, acts as a telescope, and provides minimal night vision. You cannot wear anything metal on your head, and strong magnets make you deprived.',
        items: null,
        petty: null
      },
      {
        content: 'One foot is mostly metal (kick, d6), and you treat some Tough Terrain as Easy. Carry an Oil Can (6 uses). Without a daily application you are deprived and noisy.',
        items: [
          {
            title: 'Oil Can (6 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'One of your fingers has been swapped, the bone replaced by gold and iron. Take a Hook and a Screwdriver that can attach to the fingertip.',
        items: null,
        petty: [{title: 'Hook and Screwdriver'}]
      },
      {
        content: 'Both ears have been surgically enhanced, tripling your hearing. You can focus on a specific sound at a great distance, such as a conversation. You wear an ear flap to protect against sudden loud noises (WIL save to avoid temporary paralysis).',
        items: null,
        petty: null
      },
      {
        content: 'Your chest is lined with alchemical sigils, toughening the skin (1 Armor). Wearing other metallic armor nullifies the effect.',
        items: null,
        petty: null
      },
      {
        content: 'One arm is fully metal, and comes off at the shoulder. It can be used as a weapon (d8, bulky when not attached) and can move independently if you are within sight of it.',
        items: null,
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'What rare tool is essential to your work?',
    list: [
      {
        title: 'Regrowth Salve',
        content: 'Regrows a body part over the course of a day (1 use).',
        items: [
          {
            title: 'Regrowth Salve (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Graftgrub',
        content: 'A small worm that can fuse inanimate objects with parts of the body (1 use).',
        items: [
          {
            title: 'Graftgrub (1 use)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Woundwax',
        content: 'Heals wounds from fire or chemicals (restoring full STR), but nothing else (2 uses).',
        items: [
          {
            title: 'Woundwax (2 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Quicksilver',
        content: 'A stimulant. Go first in combat, and automatically pass any WIL saves for one hour. Addictive: Save STR or become deprived after 24 hours without it (4 uses).',
        items: [
          {
            title: 'Quicksilver (4 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Pneuma Pump',
        content: 'Portable iron lungs (bulky). Enables life-saving surgery, or underwater breathing.',
        items: [
          {
            title: 'Pneuma Pump (bulky)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Lodestone',
        content: 'Draws out dangerous elements from the body, and acts as a powerful magnetic force.',
        items: [
          {
            title: 'Lodestone',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  }
}