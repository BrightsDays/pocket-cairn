export default {
  title: 'Bonekeeper',
  description: 'You are a shepherd to the departed. You listen to the final whispers of the dead as they descend into the cold, unyielding earth. You know that to fully celebrate the gift of life, we must honor its finale as well.',
  names: ['Rook', 'Ebon', 'Moro', 'Yew', 'Pall', 'Leth', 'Nix', 
  'Barnaby', 'Vesper', 'Leder'],
  inventory: [
    {
      title: 'Rations (3 uses)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Lantern',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Oil Can (6 uses)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Stake (d6)',
      inHand: false,
      fatigue: false
    },
    {
      title: 'Chains (10ft)',
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
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
    {title: ''},
  ],
  goldDices: 3,
  firstPerk: {
    title: 'What did you take from the dead?',
    list: [
      {
        content: 'A Crow-Shaped Amulet. You can ask a question of the dead, but must add a Fatigue each time.',
        items: [
          {
            title: 'Crow-Shaped Amulet',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A mortal wound from a freed revenant. You were healed, but the disfigurement has made you a pariah. You require neither air nor sustenance, but are still subject to pain and death. Trapped between, the dead see you as one of their own.',
        items: null,
        petty: null
      },
      {
        content: 'A Blood Pail (bulky) from a local death-cult. Empty its contents to summon a creature built from items buried below (bones, rocks, pottery, etc). It obeys your command, but if destroyed you permanently lose 1d4 STR. It has 6 HP, 1 Armor, 13 STR, 11 DEX, 4 WIL, shard fists (d8). Recharge: Fill the bucket with the blood of a dying warrior.',
        items: [
          {
            title: 'Blood Pail (bulky)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A Burial Wagon (+6 slots) from your last job. It came with a stubborn old Donkey (+4 slots, +2 slots if pulling wagon, slow).',
        items: null,
        petty: null
      },
      {
        content: 'The Detect Magic Spellbook, stolen from an ancient library. Your family worked in service to an obscure underworld deity, but you lost your faith. Though exiled, you continue to serve, even as an apostate.',
        items: [
          {
            title: 'Detect Magic Spellbook',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        content: 'A Plague Doctor`s Mask, after its owner succumbed to the disease that wiped out everyone you once knew. They should have kept it on.',
        items: [
          {
            title: 'Plague Doctor`s Mask',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  },
  secondPerk: {
    title: 'What tool was invaluable in your work?',
    list: [
      {
        title: 'Manacles',
        content: 'Though old, it`s still effective even against the very strong. You don`t have the key.',
        items: [
          {
            title: 'Manacles',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Sponge',
        content: 'Supposedly made from the remains of a rare sea creature. It never seems to dry out.',
        items: [
          {
            title: 'Sponge',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Pulley',
        content: 'Great for moving gravestones, rocks, or even bodies.',
        items: [
          {
            title: 'Pulley',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Incense',
        content: 'Perfect for rituals, or to keep the flies at bay. Cools the blood.',
        items: [
          {
            title: 'Incense',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Crowbar',
        content: 'd6 damage. Sometimes you just need to get the damn thing open!',
        items: [
          {
            title: 'Crowbar (d6 damage)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      },
      {
        title: 'Repellent',
        content: 'Powerful stuff. Its faded label makes it unclear what it is actually meant to repel, though. Perhaps everything. 3 uses.',
        items: [
          {
            title: 'Repellent (3 uses)',
            inHand: false,
            fatigue: false
          }
        ],
        petty: null
      }
    ]
  }
}