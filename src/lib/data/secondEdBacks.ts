import type { Background } from "../../../types/types"

export const secondEdBacks: Background[] = [
  {
    title: 'Aurifex',
    description: 'You are an artisan of the arcane, a smith of subtle forces. In the crucible of your workshop, the laws that govern this world are warped to suit your needs.',
    names: ['Hestia', 'Basil', 'Rune', 'Prism', 'Ember', 'Quintess', 
    'Aludel', 'Mordant', 'Salaman', 'Jazia'],
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
        title: 'Needle-Knife (d6)',
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
      {title: 'Protective Gloves'},
      {title: ''},
      {title: ''},
      {title: ''},
      {title: ''},
      {title: ''},
    ],
    goldDices: 3,
    firstPerk: {
      title: 'What experiment went horribly wrong?',
      list: [
        {
          content: 'There was an explosion, and you lost your sense of smell. Well, almost: you can sniff out gold as a pig does truffles. Take a Tin of Snuff (6 uses) to dampen the impact. Use it every day or become deprived.',
          items: [
            {
              title: 'Tin of Snuff (6 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'You dematerialized a beloved pet. Now it follows you around, invisible but always present. Although it cannot interact with the physical realm, you are able to share its senses (add a Fatigue each time). It follows basic commands.',
          items: null,
          petty: null
        },
        {
          content: 'You were exposed to a long-acting truth serum whose effects have yet to wear off. The disorder has its advantages: you cannot repeat lies you`ve heard, either.',
          items: null,
          petty: null
        },
        {
          content: 'You were adept at creating fake gold, which is almost as good. Eventually, your ruse was discovered and you had to make a hasty retreat. Take a heavy Metal Ingot and Gold Powder (3 uses).',
          items: [
            {
              title: 'Metal Ingot',
              inHand: false,
              fatigue: false
            },
            {
              title: 'Gold Powder (3 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Your recipe worked, but a rival stole the blueprint before your claims could be proven. Take a prototype Blunderbuss (d12, blast, bulky) and a taste for revenge.',
          items: [
            {
              title: 'Blunderbuss (d12, blast, bulky)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Ridiculed for discovering how to turn gold into lead, you were a laughing stock. Take a bottle of Universal Solvent (2 uses) that dissolves anything it touches into its constituent parts.',
          items: [
            {
              title: 'Universal Solvent (2 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        }
      ]
    },
    secondPerk: {
      title: 'What alchemical marvel is the product of your latest ingenuity?',
      list: [
        {
          title: 'Pyrophoric Gel',
          content: 'A sticky green fluid that catches fire when exposed to air, then burns for 8 hours. Cannot be extinguished (1 use).',
          items: [
            {
              title: 'Pyrophoric Gel (1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Blast Sphere',
          content: 'A head-sized iron ball filled with explosive powder that explodes on impact (d12, blast, bulky, 1 use).',
          items: [
            {
              title: 'Blast Sphere (d12, blast, bulky, 1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Aqua Vita',
          content: 'Purifies any liquid, converting it to pure water. Drinking it cures 1d6 STR (1 use).',
          items: [
            {
              title: 'Aqua Vita (1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Mimic Stone',
          content: 'Records a short phrase that can later be played back.',
          items: [
            {
              title: 'Mimic Stone',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Spark Dust',
          content: 'Ignites easily and quickly. Useful for starting a fire or as an incendiary device (3 uses).',
          items: [
            {
              title: 'Spark Dust (3 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Homunculus',
          content: 'A miniature clay replica of yourself that follows your every command to the letter. It hates being enthralled to you and complains bitterly whenever possible. Any damage done to the homunculus is also done to you.',
          items: [
            {
              title: 'Homunculus',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        }
      ]
    }
  },
  {
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
  },
  {
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
  },
  {
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
  },
  // {
  //   title: 'Cutpurse',
  //   description: 'You live in the grey space between those who have power and those who don`t. You find opportunity where others see only chaos. With nimble fingers, you unburden both the richest merchant and the lowliest guard.',
  //   names: ['Sable', 'Lyra', 'Eamon', 'Salina', 'Elara', 'Freya', 'Isolde', 
  //   'Sparrow', 'Ivy', 'Silas'],
  //   inventory: [
  //     {
  //       title: 'Rations (3 uses)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Torch (3 uses)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Twin Daggers (d6+d6, bulky)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Padded Leather (1 Armor)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Lockpicks',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     }
  //   ],
  //   petty: [
  //     {title: 'Black Outfit'},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //   ],
  //   goldDices: 3,
  //   firstPerk: {
  //     title: 'What was your last big job?',
  //     list: [
  //       {
  //         content: 'A noble`s summer home. The place was full of fancy wine (+20gp) but not much else. Take Fence Cutters.',
  //         items: [
  //           {
  //             title: 'Fence Cutters',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'A bank (you were caught). You bear a brand only visible by firelight, and anyone that sees the mark can ask you for a beer. Take Retractable Wires.',
  //         items: [
  //           {
  //             title: 'Retractable Wires',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'A guild warehouse. Take a Ladder (bulky, 10ft) and Blinding Powder (1 use).',
  //         items: [
  //           {
  //             title: 'Ladder (bulky, 10ft)',
  //             inHand: false,
  //             fatigue: false
  //           },
  //           {
  //             title: 'Blinding Powder (1 use)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'Moneylender. Someone beat you to the job, but left behind a Scroll of Arcane Eye (petty).',
  //         items: null,
  //         petty: [
  //           {
  //             title: 'Scroll of Arcane Eye'
  //           }
  //         ]
  //       },
  //       {
  //         content: 'Constable`s quarters. You escaped, but left some friends behind. Take Strong Silk Rope and a queasy feeling.',
  //         items: [
  //           {
  //             title: 'Strong Silk Rope',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'A university. You were seen, but not pursued. You still don`t know why. Take Smoke Pellets (3 uses).',
  //         items: [
  //           {
  //             title: 'Smoke Pellets (3 uses)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       }
  //     ]
  //   },
  //   secondPerk: {
  //     title: 'What helps you steal?',
  //     list: [
  //       {
  //         title: 'Catring',
  //         content: '2 charges. Climb up walls and fall safely. Recharge: Place the ring on a stray cat`s tail.'
  //       },
  //       {
  //         title: 'Gildfinger',
  //         content: '1 charge. A finger glove that mimics any mundane key. Recharge: Bundle it with at least 100gp for a night.'
  //       },
  //       {
  //         title: 'Glimpse Glass',
  //         content: '3 charges. A monocle that lets you see through walls or other obstructions. It shatters after the last use.'
  //       },
  //       {
  //         title: 'Sweetwhistle',
  //         content: '1 charge. Listeners hear a soft, familiar voice in the distance that they cannot resist following. Recharge: Lose a dear memory (describe it).'
  //       },
  //       {
  //         title: 'Vagrant`s Veil',
  //         content: '1 charge. Wear it to blend seamlessly into crowds, appearing as a simple pauper. Recharge: Donate all the day`s winnings to the poor (Petty).'
  //       },
  //       {
  //         title: 'Smokestack Marble',
  //         content: '3 uses. Crush to release a dense cloud of smoke that follows you (Petty).'
  //       }
  //     ]
  //   }
  // },
  // {
  //   title: 'Fieldwarden',
  //   description: 'Protectors of the harvest, defense against pests, thieves, and beasts. A position of great honor, while it lasts: many guardians do not live out their natural lives.',
  //   names: ['Seed', 'Thresh', 'Dibber', 'Sow', 'Stalk', 'Harrow', 'Cobb', 
  //   'Flax', 'Briar', 'Rye'],
  //   inventory: [
  //     {
  //       title: 'Rations (3 uses)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Torch (3 uses)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Brigandine (1 Armor, bulky)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Sling (d6)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Hand Axe (d6)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Repellent (state the creature, 3 uses)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     }
  //   ],
  //   petty: [
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //   ],
  //   goldDices: 3,
  //   firstPerk: {
  //     title: 'What got the better of you?',
  //     list: [
  //       {
  //         content: 'A voracious swarm of pests that swallowed crops and animals alike. With nothing to defend, you left. Take Gale Seed Extract (3 uses). Ingesting one lets you sprint with a speed four times your regular rate. Afterward you add two Fatigue.',
  //         items: [
  //           {
  //             title: 'Gale Seed Extract (3 uses)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'A crop spirit, angered by a poor tithing. The fires consumed nearly everything, and afterwards you were able to gather a pouch of Fireseeds (d8, blast, 4 uses).',
  //         items: [
  //           {
  //             title: 'Fireseeds (d8, blast, 4 uses)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'An antlered, toothy demon that nearly ended you. Take a blood-stained bone knife (d6). On critical damage, its next attack becomes enhanced from contact with blood.',
  //         items: [
  //           {
  //             title: 'blood-stained bone knife (d6)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'The Withering, a type of stem rot from The Roots. Take a Diseased Crop (6 uses) that decays any plant it touches.',
  //         items: null,
  //         petty: [
  //           {
  //             title: 'Diseased Crop (6 uses)'
  //           }
  //         ]
  //       },
  //       {
  //         content: 'Wolves, or so you thought. You are now a Werewolf [8 HP, 15 STR, 14 DEX, claws (d6+d6) or bite (d8)]. Your WIL remains the same. You can turn at will (once per day) but must make a WIL save to revert. Anyone left alive from your attacks must make a WIL save to avoid infection.',
  //         items: null,
  //         petty: null
  //       },
  //       {
  //         content: 'Crop thieves. Not all of them survived, but you were outnumbered. Take a +d4 HP and a Hilted Broadsword (d8, bulky).',
  //         items: [
  //           {
  //             title: 'Smoke Pellets (3 uses)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       }
  //     ]
  //   },
  //   secondPerk: {
  //     title: 'What tool saved your life?',
  //     list: [
  //       {
  //         title: 'Bloodvine Whip',
  //         content: 'd8 damage. On Critical Damage it drains the target`s blood, granting the weapon`s next attack the blast quality.'
  //       },
  //       {
  //         title: 'Clatter Keeper',
  //         content: 'A hand-cranked device that emits a loud noise, frightening away most creatures.'
  //       },
  //       {
  //         title: 'Sun Stick',
  //         content: 'Provides ample warmth and light for up to one hour (1 use). Recharge: Leave in heavy sunlight for a full day.'
  //       },
  //       {
  //         title: 'Root Tether',
  //         content: 'When thrown, binds up to a wolf-sized creature to the soil for a short time.'
  //       },
  //       {
  //         title: 'Greenwhistle',
  //         content: 'A small flute that calms plants, making passage through areas heavy with plant life a bit easier.'
  //       },
  //       {
  //         title: 'Everbloom Band',
  //         content: 'A circlet adorned with flowers that never wilt. On taking Critical Damage the flowers dissolve into dust, but you act as if your save succeeded (STR loss still occurs).'
  //       }
  //     ]
  //   }
  // },
  // {
  //   title: 'Fletchwind',
  //   description: 'Protectors of the harvest, defense against pests, thieves, and beasts. A position of great honor, while it lasts: many guardians do not live out their natural lives.',
  //   names: ['Flint', 'Feather', 'Crier', 'Thunder', 'Falcon', 'Pluck', 'Needle', 
  //   'Warsong', 'Hawk', 'Cai'],
  //   inventory: [
  //     {
  //       title: 'Rations (3 uses)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Torch (3 uses)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Serrated Knife (d6)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Boiled Leather (1 Armor)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Heartroot Salve (restores 1d4 STR, 1 use)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     }
  //   ],
  //   petty: [
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //   ],
  //   goldDices: 3,
  //   firstPerk: {
  //     title: 'What kind of wood is your bow made from?',
  //     list: [
  //       {
  //         content: 'Western Yew (d6, bulky). Can be wielded as a blunt weapon (d6). Noisy.',
  //         items: [
  //           {
  //             title: 'Western Yew (d6, bulky)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'Sessile Oak (d8, bulky). Slams into targets. On critical damage, something is torn off.',
  //         items: [
  //           {
  //             title: 'Sessile Oak (d8, bulky)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'Stone Pine (d6, bulky). Produces one use of Sticky Sap per day. It is highly explosive.',
  //         items: [
  //           {
  //             title: 'Stone Pine (d6, bulky)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'White Ash (d6, bulky). Can be used in place of a shield in melee combat (+1 Armor).',
  //         items: [
  //           {
  //             title: 'White Ash (d6, bulky)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: []
  //       },
  //       {
  //         content: 'Striped Bamboo (d6). Collapsible, it only requires one slot (but still requires both hands).',
  //         items: [
  //           {
  //             title: 'Striped Bamboo (d6)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'Wych Elm (d6, bulky). Protects the bearer from poisons and toxins, so long as they are holding it.',
  //         items: [
  //           {
  //             title: 'Wych Elm (d6, bulky)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       }
  //     ]
  //   },
  //   secondPerk: {
  //     title: 'How did you earn your bow?',
  //     list: [
  //       {
  //         title: 'War',
  //         content: 'If you are first to attack, your bow gains the blast property for the first round.'
  //       },
  //       {
  //         title: 'Falconry',
  //         content: 'You keep a falcon [3 hp, 5 STR, 16 DEX, 4 WIL, claws (d6+d6), bite (d6)]. It only eats live game.'
  //       },
  //       {
  //         title: 'Hunting',
  //         content: 'When taking the Supply (pg. 80) action your ability to secure Rations increases by one step (e.g. 1d4 becomes 1d6).'
  //       },
  //       {
  //         title: 'Tournaments',
  //         content: 'Attacks with your bow are enhanced if the target is immobile.'
  //       },
  //       {
  //         title: 'Training',
  //         content: 'If you are the first to attack, melee attacks against you are impaired until you take STR damage.'
  //       },
  //       {
  //         title: 'Scouting',
  //         content: 'When taking the Travel (pg. 80) action, your presence decreases the chance of getting lost by one step (e.g. 4-in-6 becomes 3-in-6).'
  //       }
  //     ]
  //   }
  // },
  // {
  //   title: 'Foundling',
  //   description: 'An odd birthmark, a strange smell: somehow, the touch of elsewhere still lingers. You`ll never fit in, at least not where you`re at. Roll on the Omens table, but keep the results private for now.',
  //   names: ['Faunus', 'Snowdrop', 'Wisp', 'Silverdew', 'Brim', 'Solstice', 'Steeleye', 
  //   'Sileas', 'Gossamer', 'Hazel'],
  //   inventory: [
  //     {
  //       title: 'Rations (3 uses)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Torch (3 uses)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Salt Pouch',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Sling (d6)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Dagger (d6)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     }
  //   ],
  //   petty: [
  //     {title: 'Heirloom Amulet (glows in the presence of magic)'},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //   ],
  //   goldDices: 3,
  //   firstPerk: {
  //     title: 'Who took you in?',
  //     list: [
  //       {
  //         content: 'An old hunter. You were both quite happy, until it all ended. Take a Weathered Longbow (d8, bulky) and a Leather Jerkin (1 Armor).',
  //         items: [
  //           {
  //             title: 'Weathered Longbow (d8, bulky)',
  //             inHand: false,
  //             fatigue: false
  //           },
  //           {
  //             title: 'Leather Jerkin (1 Armor)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'A wizened apothecary, who taught you the healing arts but maintained a clinical detachment. Take a Healing Ungent (restores d4 STR).',
  //         items: [
  //           {
  //             title: 'Healing Ungent (restores d4 STR)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'A druid, who taught you the language of trees. When it came time to leave you took with you only a Gnarled Staff (d8) and the promise that one day you would return.',
  //         items: [
  //           {
  //             title: 'Gnarled Staff (d8)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'A gruff blacksmith from a sleepy river town. You were always kept at arm`s length. Now the forge is cold, and you`ve moved on. Take a Smith`s Apron (petty) and a set of oft-mended Chain Mail (2 Armor, bulky).',
  //         items: [
  //           {
  //             title: 'Chain Mail (2 Armor, bulky)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: [
  //           {
  //             title: 'Smith`s Apron'
  //           }
  //         ]
  //       },
  //       {
  //         content: 'A troupe of traveling entertainers. For a time, they were like family to you. One day you woke up and they were gone with no explanation. Take a Storybook, a Dagger (d6), and some burning questions.',
  //         items: [
  //           {
  //             title: 'Storybook',
  //             inHand: false,
  //             fatigue: false
  //           },
  //           {
  //             title: 'Dagger (d6)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'The monks of a secluded forest monastery. When their rules became too strict, you snuck away. Take a Monk`s Habit (warm, petty) and a Spellbook of Control Plants.',
  //         items: [
  //           {
  //             title: 'Spellbook of Control Plants',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: [
  //           {
  //             title: 'Monk`s Habit (warm)'
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   secondPerk: {
  //     title: 'What keeps away bad tidings?',
  //     list: [
  //       {
  //         title: 'Pipeweed',
  //         content: 'Your good luck charm. Conversations tend to flow more easily after a smoke (6 uses).'
  //       },
  //       {
  //         title: 'Stink Jar',
  //         content: 'Shattering this jar releases an odor so foul all nearby must make a STR save or immediately vomit (1 use).'
  //       },
  //       {
  //         title: 'Ivy Worm',
  //         content: 'A green worm often mistaken for a weed. Swallowed whole, it absorbs any toxins or rot in the body before exiting through the usual way.'
  //       },
  //       {
  //         title: 'Dream Stone',
  //         content: 'A smooth blue stone that helps recall dreams more clearly. Overuse can cause dream-addiction.'
  //       },
  //       {
  //         title: 'Drowning Rod',
  //         content: 'A finger-sized wooden stick that doubles in size each time it is fully submerged in water. It doesn`t shrink back down.'
  //       },
  //       {
  //         title: 'Rabbit`s Foot',
  //         content: 'You were wearing it when they found you. They say it is the foot of she who left you, and that it protects you from witch magic.'
  //       }
  //     ]
  //   }
  // },
  // {
  //   title: 'Fungal Forager',
  //   description: 'You follow the whisperings of the deep earth, the rhythmic pulse of the mycelium forest that grows beneath the surface. The dark holds no terror for you. Also, you really love mushrooms.',
  //   names: ['Unther', 'Woozy', 'Hilda', 'Current', 'Leif', 'Ratan', 'Mourella', 
  //   'Lal', 'Per', 'Madrigal'],
  //   inventory: [
  //     {
  //       title: 'Rations (3 uses)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Sharpened Trowel (d6)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Candle Helmet (+1 Armor, dim, 6 uses)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Rope (25ft)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Metal Pail',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     }
  //   ],
  //   petty: [
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //   ],
  //   goldDices: 3,
  //   firstPerk: {
  //     title: 'What strange fungi did you discover?',
  //     list: [
  //       {
  //         content: 'Shrieking Trumpet. When exposed to light it screams so loudly that all nearby attacks (including your own) are impaired (2 uses).',
  //         items: [
  //           {
  //             title: 'Shrieking Trumpet (2 uses)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'Torch Fungus. When crushed it creates a heatless light for ten minutes (3 uses).',
  //         items: [
  //           {
  //             title: 'Torch Fungus (3 uses)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'Murderous Truffle. Pungent, highly toxic, and very rare (worth 50gp to assassins). Illegal pretty much everywhere (1 use).',
  //         items: [
  //           {
  //             title: 'Murderous Truffle (1 use)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'Hellcap. Exposure to its aroma causes intense nausea, even vomiting. Either way, it clears the room. Bottled (1 use).',
  //         items: [
  //           {
  //             title: 'Hellcap (1 use)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'Sproutcup. Ingest to shrink down to the size of a mouse (your belongings stay the same size). You return to normal size within the hour, often in fits and starts (1 use).',
  //         items: [
  //           {
  //             title: 'Sproutcup (1 use)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'Rootflower. A white fungus found only on corpses deep underground. Ingest to restore d6 WIL. You will dream of the dead, and their stories (1 use).',
  //         items: [
  //           {
  //             title: 'Rootflower (1 use)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       }
  //     ]
  //   },
  //   secondPerk: {
  //     title: 'What keeps you sane, even in utter darkness?',
  //     list: [
  //       {
  //         title: 'Glowsnail',
  //         content: 'Casts a soft, bioluminescent light. Feeds on one ration every two days.'
  //       },
  //       {
  //         title: 'Silk Moth Shawl',
  //         content: 'A weatherproof blanket, it can also douse a fire without being damaged.'
  //       },
  //       {
  //         title: 'Milkflower',
  //         content: 'A gentle stimulant. Chewing makes you immune to panic for the next hour (3 uses).'
  //       },
  //       {
  //         title: 'Luxcompass',
  //         content: 'Hums softly as it moves closer to the Sun. Eventually, the noise becomes unbearably loud.'
  //       },
  //       {
  //         title: 'Sloth-Tarp',
  //         content: 'A tough and weatherproof fabric, useful for hanging off trees. When inside, take +1 Armor.'
  //       },
  //       {
  //         title: 'Miner`s Grease',
  //         content: 'Great for dislodging a gem, tool, or limb from a tight crack. Highly explosive (3 uses).'
  //       }
  //     ]
  //   }
  // },
  // {
  //   title: 'Greenwise',
  //   description: 'You delve deep into The Woods, prying its secrets from between rough boughs and whispering leaves. In this verdant kingdom, you are no mere scholar, but its confidant as well.',
  //   names: ['Briar', 'Moss', 'Fern', 'Lichen', 'Root', 'Willow', 'Sage', 'Yarrow', 
  //   'Rowan', 'Ash'],
  //   inventory: [
  //     {
  //       title: 'Rations (3 uses)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Torch (3 uses)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Iron Pot',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Root Knife (d6)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: 'Healing Salve (restores 1d4 STR, 1 use)',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     },
  //     {
  //       title: '',
  //       inHand: false,
  //       fatigue: false
  //     }
  //   ],
  //   petty: [
  //     {title: 'Twine Bauble (petty, Ward once per day)'},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //     {title: ''},
  //   ],
  //   goldDices: 3,
  //   firstPerk: {
  //     title: 'How have The Woods failed you?',
  //     list: [
  //       {
  //         content: 'An ill-tempered forest spirit cursed you for stealing, marking you as an enemy of their kind. Take a Bezoar Stone. Ingesting it cures any poison (1 use, unless retrieved).',
  //         items: [
  //           {
  //             title: 'Bezoar Stone',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'A close friend, swallowed whole. Now you see their face in any tea you brew. Take a Soporific Concoction (3 uses).',
  //         items: [
  //           {
  //             title: 'Soporific Concoction (3 uses)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'You were poisoned, losing your sense of taste and smell. You can now withstand noxious fumes, and always carry Antitoxin (2 uses).',
  //         items: [
  //           {
  //             title: 'Antitoxin (2 uses)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'Your radical experiments turned your skin green, and you now gain nourishment as a plant. You don`t need rations, but a day without sufficient sunlight and water leaves you deprived.',
  //         items: null,
  //         petty: null
  //       },
  //       {
  //         content: 'Your impressive corpseflower won a local contest then promptly killed a judge. You fled, but not without the Prize Money (100gp) and a warrant for your arrest.',
  //         items: [
  //           {
  //             title: 'Prize Money (100gp)',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       },
  //       {
  //         content: 'You created a restorative tincture that also caused accidental infertility. Take a Healing Potion that completely restores STR. Only you know of its unintended side-effects.',
  //         items: [
  //           {
  //             title: 'Healing Potion',
  //             inHand: false,
  //             fatigue: false
  //           }
  //         ],
  //         petty: null
  //       }
  //     ]
  //   },
  //   secondPerk: {
  //     title: 'What keeps you safe while in The Woods?',
  //     list: [
  //       {
  //         title: 'Amadou',
  //         content: 'A vermillion fungus that catches fire quite easily (3 uses).'
  //       },
  //       {
  //         title: 'Delphinium',
  //         content: 'Breathe water for up to one hour (1 use, but can be divided into fractional doses).'
  //       },
  //       {
  //         title: 'Tacky Stalk',
  //         content: 'A woody reed that hardens into a permanent adhesive when chewed (2 uses).'
  //       },
  //       {
  //         title: 'Wisp Lantern',
  //         content: 'Caged in wrought iron, provides a dim light so long as the wisp is able to feed on nearby pain and fear.'
  //       },
  //       {
  //         title: 'Seed Bomb',
  //         content: 'A canvas sack filled with seeds that explodes on impact. d6 damage (blast, 3 uses).'
  //       },
  //       {
  //         title: 'Briarvine',
  //         content: 'Entangles any creature up to horse size (STR to break free, reusable).'
  //       }
  //     ]
  //   }
  // }
]//TODO: finish list and add items to second perk