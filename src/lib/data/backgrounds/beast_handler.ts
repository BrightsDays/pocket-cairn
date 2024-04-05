export default {
  title: 'Beast Handler',
  description: 'You alone can walk among the creatures of the wild, fearless and in control. You share a connection with animals that others can only dream of...so long as you don`t become their snack.',
  names: ['Amara', 'Wulf', 'Mireille', 'Soren', 'Freki', 'Aster', 
  'Gerrik', 'Boreas', 'Delphine', 'Matheus'],
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
      title: 'Leather Whip (d6)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Soporific Darts (STR save or fall asleep, 6 uses)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Lure',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Rope (25ft)',
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
    title: 'What do creatures of the wild understand that your kind do not?',
    list: [
      {
        content: 'There is far more to the world than meets the eye. With quiet concentration, you can borrow the senses of a nearby creature of your specialty.',
        items: null,
        petty: null
      },
      {
        content: 'The behavior of beasts is a language in itself. When observing beasts of your specialty, you gain insight into weather patterns and impending disasters.',
        items: null,
        petty: null
      },
      {
        content: 'The pulse of the hunt is a powerful impulse. You have a sense for when predators, even those not of your specialty, are near.',
        items: null,
        petty: null
      },
      {
        content: 'You know some lands intimately. Your chance of becoming lost in a terrain dominated by the beasts of your specialty is reduced by one step (e.g. 4-in-6 becomes 3-in-6).',
        items: null,
        petty: null
      },
      {
        content: 'Nature`s symphony can be heard if you attune to its rhythm. When surrounded by creatures of your specialty they can alert you to approaching danger before it arrives.',
        items: null,
        petty: null
      },
      {
        content: 'Survival is about adaptability. Once per day, you may take on a simple feature from a creature of your speciality (webbed fingers, night vision, etc.). Add a Fatigue each time.',
        items: null,
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'What creature is your specialty?',
    list: [
      {
        title: 'Arachnids',
        content: 'Take a Quick-Flame Rod and an Oil Can (6 uses). It can destroy a large spider nest in seconds.',
        items: [
          {
            title: 'Quick-Flame Rod',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Oil Can (6 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Felines',
        content: 'Take a sack of Whiskerwort. Its odor can calm and control even the largest of cats.',
        items: [
          {
            title: 'Sack of Whiskerwort',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Canines',
        content: 'Take a wreath of Wolfsbane and a Large Net. Also effective against werewolves!',
        items: [
          {
            title: 'Wreath of Wolfsbane',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Large Net',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Birds',
        content: 'Take a Warble-Whistle (3 charges). It can imitate any bird call, and can even be used to send simple messages. Recharge: Feed a baby bird as its mother would, then blow.',
        items: [
          {
            title: 'Warble-Whistle (3 charges)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Rodents',
        content: 'Take a Windpipe that emits a high-pitched sound that only rodents can hear. So long as you play, they will follow. Even to their deaths.',
        items: [
          {
            title: 'Windpipe',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Serpents',
        content: 'Take a Warming Stone that generates an irresistible heat, and a vial of Antitoxin (2 uses).',
        items: [
          {
            title: 'Warming Stone',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Vial of Antitoxin (2 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  }
}