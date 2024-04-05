export default {
  title: 'Jongleur',
  description: 'What inspires the soul more than song, words, and spectacle? Why practice for years to master the arcane when you`ve already got real magic inside?',
  names: ['Jax', 'Selene', 'Baladria', 'Ada', 'Felix', 'Saylor', 'Tripp', 'Lantos', 
  'Echo', 'Jubilo'],
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
      title: 'Costume',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Makeup',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Lucky Jerkin (1 Armor)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Prop Sword (looks real, no damage)',
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
    title: 'What happened at your final performance?',
    list: [
      {
        content: 'Despite your training in the deadly arts, an actor died and you were blamed. Take a light-weight Rapier (d6) and a false identity.',
        items: [
          {
            title: 'Rapier (d6)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'The crowd loved your catchy tune about a noble and his romantic failings. The noble in question, not so much. Take the Read Mind Spellbook and a warrant for your arrest.',
        items: [
          {
            title: 'Read Mind Spellbook',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Your debut composition reduced the audience to a gibbering mess, murmuring of bright creatures descending from the night sky. Later, you noticed that the notes resembled stellar constellations. Take a Book on Astronomy, and a lot of questions.',
        items: [
          {
            title: 'Book on Astronomy',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'You mocked a forgotten trickster god, and were cursed for it. You speak only in perfect rhyme. Ironically, this has only made you more popular among your peers. Take a Thesaurus (20gp). Without it you are deprived.',
        items: [
          {
            title: 'Thesaurus (20gp)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'You were scarred in an on-stage accident. The crowd cheered, thinking it was part of the act. Take well-worn Stage Mail (1 Armor), a memorable scar, and a fear of applause.',
        items: [
          {
            title: 'Stage Mail (1 Armor)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'Your respectable puppeteering skills were matched only by your mimicry. You were so good you were branded a witch (literally) and banished. Take an Uncanny Hand-Puppet and a Rabbit Skull (sewn with grass) that protects against charms.',
        items: [
          {
            title: 'Uncanny Hand-Puppet',
            inHand: false,
            fatigue: false
          },
          {
            title: 'Rabbit Skull (sewn with grass)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'What trinket were you unable to leave behind?',
    list: [
      {
        title: 'False Cuffs',
        content: 'Comfortable, realistic-looking cuffs. Only you know the trick to get out of them.',
        items: [
          {
            title: 'False Cuffs',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Pocket Theatre',
        content: 'A set of small puppets and folding stage. Good for quick distractions.',
        items: [
          {
            title: 'Pocket Theatre',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Ghost Violin',
        content: 'A dark grey violin that plays a haunting tune, mirrored by an invisible, distant twin.',
        items: [
          {
            title: 'Ghost Violin',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Tragic Tales',
        content: 'Banned in proper company, it becomes less bawdy and more harrowing towards the end. Worth 100gp.',
        items: [
          {
            title: 'Tragic Tales (100gp)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Mythos Mask',
        content: 'A plaster mask that allows one to take on a monster`s countenance. Once it comes off, add a Fatigue.',
        items: [
          {
            title: 'Mythos Mask',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Rebreak Glass',
        content: 'A wine flute that can be broken multiple times, reforming after 24 hours. Makes a really loud noise.',
        items: [
          {
            title: 'Rebreak Glass',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  }
}