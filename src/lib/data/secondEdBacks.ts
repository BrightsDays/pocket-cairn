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
  {
    title: 'Cutpurse',
    description: 'You live in the grey space between those who have power and those who don`t. You find opportunity where others see only chaos. With nimble fingers, you unburden both the richest merchant and the lowliest guard.',
    names: ['Sable', 'Lyra', 'Eamon', 'Salina', 'Elara', 'Freya', 'Isolde', 
    'Sparrow', 'Ivy', 'Silas'],
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
        title: 'Twin Daggers (d6+d6, bulky)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Padded Leather (1 Armor)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Lockpicks',
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
      {title: 'Black Outfit'},
      {title: ''},
      {title: ''},
      {title: ''},
      {title: ''},
      {title: ''},
    ],
    goldDices: 3,
    firstPerk: {
      title: 'What was your last big job?',
      list: [
        {
          content: 'A noble`s summer home. The place was full of fancy wine (+20gp) but not much else. Take Fence Cutters.',
          items: [
            {
              title: 'Fence Cutters',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'A bank (you were caught). You bear a brand only visible by firelight, and anyone that sees the mark can ask you for a beer. Take Retractable Wires.',
          items: [
            {
              title: 'Retractable Wires',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'A guild warehouse. Take a Ladder (bulky, 10ft) and Blinding Powder (1 use).',
          items: [
            {
              title: 'Ladder (bulky, 10ft)',
              inHand: false,
              fatigue: false
            },
            {
              title: 'Blinding Powder (1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Moneylender. Someone beat you to the job, but left behind a Scroll of Arcane Eye (petty).',
          items: null,
          petty: [
            {
              title: 'Scroll of Arcane Eye'
            }
          ]
        },
        {
          content: 'Constable`s quarters. You escaped, but left some friends behind. Take Strong Silk Rope and a queasy feeling.',
          items: [
            {
              title: 'Strong Silk Rope',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'A university. You were seen, but not pursued. You still don`t know why. Take Smoke Pellets (3 uses).',
          items: [
            {
              title: 'Smoke Pellets (3 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        }
      ]
    },
    secondPerk: {
      title: 'What helps you steal?',
      list: [
        {
          title: 'Catring',
          content: '2 charges. Climb up walls and fall safely. Recharge: Place the ring on a stray cat`s tail.',
          items: [
            {
              title: 'Catring (2 charges)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Gildfinger',
          content: '1 charge. A finger glove that mimics any mundane key. Recharge: Bundle it with at least 100gp for a night.',
          items: [
            {
              title: 'Gildfinger (1 charge)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Glimpse Glass',
          content: '3 charges. A monocle that lets you see through walls or other obstructions. It shatters after the last use.',
          items: [
            {
              title: 'Glimpse Glass (3 charges)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Sweetwhistle',
          content: '1 charge. Listeners hear a soft, familiar voice in the distance that they cannot resist following. Recharge: Lose a dear memory (describe it).',
          items: [
            {
              title: 'Sweetwhistle (1 charge)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Vagrant`s Veil',
          content: '1 charge. Wear it to blend seamlessly into crowds, appearing as a simple pauper. Recharge: Donate all the day`s winnings to the poor (Petty).',
          items: null,
          petty: [
            {
              title: 'Vagrant`s Veil (1 charge)'
            }
          ]
        },
        {
          title: 'Smokestack Marble',
          content: '3 uses. Crush to release a dense cloud of smoke that follows you (Petty).',
          items: null,
          petty: [
            {
              title: 'Smokestack Marble (3 uses)'
            }
          ]
        }
      ]
    }
  },
  {
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
          items: null,
          petty: [
            {
              title: 'Diseased Crop (6 uses)'
            }
          ]
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
          petty: null
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
  },
  {
    title: 'Fletchwind',
    description: 'Protectors of the harvest, defense against pests, thieves, and beasts. A position of great honor, while it lasts: many guardians do not live out their natural lives.',
    names: ['Flint', 'Feather', 'Crier', 'Thunder', 'Falcon', 'Pluck', 'Needle', 
    'Warsong', 'Hawk', 'Cai'],
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
        title: '',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Serrated Knife (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Boiled Leather (1 Armor)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Heartroot Salve (restores 1d4 STR, 1 use)',
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
      title: 'What kind of wood is your bow made from?',
      list: [
        {
          content: 'Western Yew (d6, bulky). Can be wielded as a blunt weapon (d6). Noisy.',
          items: [
            {
              title: 'Western Yew (d6, bulky)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Sessile Oak (d8, bulky). Slams into targets. On critical damage, something is torn off.',
          items: [
            {
              title: 'Sessile Oak (d8, bulky)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Stone Pine (d6, bulky). Produces one use of Sticky Sap per day. It is highly explosive.',
          items: [
            {
              title: 'Stone Pine (d6, bulky)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'White Ash (d6, bulky). Can be used in place of a shield in melee combat (+1 Armor).',
          items: [
            {
              title: 'White Ash (d6, bulky)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: []
        },
        {
          content: 'Striped Bamboo (d6). Collapsible, it only requires one slot (but still requires both hands).',
          items: [
            {
              title: 'Striped Bamboo (d6)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Wych Elm (d6, bulky). Protects the bearer from poisons and toxins, so long as they are holding it.',
          items: [
            {
              title: 'Wych Elm (d6, bulky)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        }
      ]
    },
    secondPerk: {
      title: 'How did you earn your bow?',
      list: [
        {
          title: 'War',
          content: 'If you are first to attack, your bow gains the blast property for the first round.',
          items: null,
          petty: null
        },
        {
          title: 'Falconry',
          content: 'You keep a falcon [3 hp, 5 STR, 16 DEX, 4 WIL, claws (d6+d6), bite (d6)]. It only eats live game.',
          items: null,
          petty: null
        },
        {
          title: 'Hunting',
          content: 'When taking the Supply (pg. 80) action your ability to secure Rations increases by one step (e.g. 1d4 becomes 1d6).',
          items: null,
          petty: null
        },
        {
          title: 'Tournaments',
          content: 'Attacks with your bow are enhanced if the target is immobile.',
          items: null,
          petty: null
        },
        {
          title: 'Training',
          content: 'If you are the first to attack, melee attacks against you are impaired until you take STR damage.',
          items: null,
          petty: null
        },
        {
          title: 'Scouting',
          content: 'When taking the Travel (pg. 80) action, your presence decreases the chance of getting lost by one step (e.g. 4-in-6 becomes 3-in-6).',
          items: null,
          petty: null
        }
      ]
    }
  },
  {
    title: 'Foundling',
    description: 'An odd birthmark, a strange smell: somehow, the touch of elsewhere still lingers. You`ll never fit in, at least not where you`re at. Roll on the Omens table, but keep the results private for now.',
    names: ['Faunus', 'Snowdrop', 'Wisp', 'Silverdew', 'Brim', 'Solstice', 'Steeleye', 
    'Sileas', 'Gossamer', 'Hazel'],
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
        title: 'Salt Pouch',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Sling (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Dagger (d6)',
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
      {title: 'Heirloom Amulet (glows in the presence of magic)'},
      {title: ''},
      {title: ''},
      {title: ''},
      {title: ''},
      {title: ''},
    ],
    goldDices: 3,
    firstPerk: {
      title: 'Who took you in?',
      list: [
        {
          content: 'An old hunter. You were both quite happy, until it all ended. Take a Weathered Longbow (d8, bulky) and a Leather Jerkin (1 Armor).',
          items: [
            {
              title: 'Weathered Longbow (d8, bulky)',
              inHand: false,
              fatigue: false
            },
            {
              title: 'Leather Jerkin (1 Armor)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'A wizened apothecary, who taught you the healing arts but maintained a clinical detachment. Take a Healing Ungent (restores d4 STR).',
          items: [
            {
              title: 'Healing Ungent (restores d4 STR)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'A druid, who taught you the language of trees. When it came time to leave you took with you only a Gnarled Staff (d8) and the promise that one day you would return.',
          items: [
            {
              title: 'Gnarled Staff (d8)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'A gruff blacksmith from a sleepy river town. You were always kept at arm`s length. Now the forge is cold, and you`ve moved on. Take a Smith`s Apron (petty) and a set of oft-mended Chain Mail (2 Armor, bulky).',
          items: [
            {
              title: 'Chain Mail (2 Armor, bulky)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: [
            {
              title: 'Smith`s Apron'
            }
          ]
        },
        {
          content: 'A troupe of traveling entertainers. For a time, they were like family to you. One day you woke up and they were gone with no explanation. Take a Storybook, a Dagger (d6), and some burning questions.',
          items: [
            {
              title: 'Storybook',
              inHand: false,
              fatigue: false
            },
            {
              title: 'Dagger (d6)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'The monks of a secluded forest monastery. When their rules became too strict, you snuck away. Take a Monk`s Habit (warm, petty) and a Spellbook of Control Plants.',
          items: [
            {
              title: 'Spellbook of Control Plants',
              inHand: false,
              fatigue: false
            }
          ],
          petty: [
            {
              title: 'Monk`s Habit (warm)'
            }
          ]
        }
      ]
    },
    secondPerk: {
      title: 'What keeps away bad tidings?',
      list: [
        {
          title: 'Pipeweed',
          content: 'Your good luck charm. Conversations tend to flow more easily after a smoke (6 uses).',
          items: [
            {
              title: 'Pipeweed',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Stink Jar',
          content: 'Shattering this jar releases an odor so foul all nearby must make a STR save or immediately vomit (1 use).',
          items: [
            {
              title: 'Stink Jar (1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Ivy Worm',
          content: 'A green worm often mistaken for a weed. Swallowed whole, it absorbs any toxins or rot in the body before exiting through the usual way.',
          items: [
            {
              title: 'Ivy Worm',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Dream Stone',
          content: 'A smooth blue stone that helps recall dreams more clearly. Overuse can cause dream-addiction.',
          items: [
            {
              title: 'Dream Stone',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Drowning Rod',
          content: 'A finger-sized wooden stick that doubles in size each time it is fully submerged in water. It doesn`t shrink back down.',
          items: [
            {
              title: 'Drowning Rod',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Rabbit`s Foot',
          content: 'You were wearing it when they found you. They say it is the foot of she who left you, and that it protects you from witch magic.',
          items: [
            {
              title: 'Rabbit`s Foot',
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
    title: 'Fungal Forager',
    description: 'You follow the whisperings of the deep earth, the rhythmic pulse of the mycelium forest that grows beneath the surface. The dark holds no terror for you. Also, you really love mushrooms.',
    names: ['Unther', 'Woozy', 'Hilda', 'Current', 'Leif', 'Ratan', 'Mourella', 
    'Lal', 'Per', 'Madrigal'],
    inventory: [
      {
        title: 'Rations (3 uses)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Sharpened Trowel (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Candle Helmet (+1 Armor, dim, 6 uses)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Rope (25ft)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Metal Pail',
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
      title: 'What strange fungi did you discover?',
      list: [
        {
          content: 'Shrieking Trumpet. When exposed to light it screams so loudly that all nearby attacks (including your own) are impaired (2 uses).',
          items: [
            {
              title: 'Shrieking Trumpet (2 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Torch Fungus. When crushed it creates a heatless light for ten minutes (3 uses).',
          items: [
            {
              title: 'Torch Fungus (3 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Murderous Truffle. Pungent, highly toxic, and very rare (worth 50gp to assassins). Illegal pretty much everywhere (1 use).',
          items: [
            {
              title: 'Murderous Truffle (1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Hellcap. Exposure to its aroma causes intense nausea, even vomiting. Either way, it clears the room. Bottled (1 use).',
          items: [
            {
              title: 'Hellcap (1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Sproutcup. Ingest to shrink down to the size of a mouse (your belongings stay the same size). You return to normal size within the hour, often in fits and starts (1 use).',
          items: [
            {
              title: 'Sproutcup (1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Rootflower. A white fungus found only on corpses deep underground. Ingest to restore d6 WIL. You will dream of the dead, and their stories (1 use).',
          items: [
            {
              title: 'Rootflower (1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        }
      ]
    },
    secondPerk: {
      title: 'What keeps you sane, even in utter darkness?',
      list: [
        {
          title: 'Glowsnail',
          content: 'Casts a soft, bioluminescent light. Feeds on one ration every two days.',
          items: [
            {
              title: 'Glowsnail',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Silk Moth Shawl',
          content: 'A weatherproof blanket, it can also douse a fire without being damaged.',
          items: [
            {
              title: 'Silk Moth Shawl',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Milkflower',
          content: 'A gentle stimulant. Chewing makes you immune to panic for the next hour (3 uses).',
          items: [
            {
              title: 'Milkflower (3 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Luxcompass',
          content: 'Hums softly as it moves closer to the Sun. Eventually, the noise becomes unbearably loud.',
          items: [
            {
              title: 'Luxcompass',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Sloth-Tarp',
          content: 'A tough and weatherproof fabric, useful for hanging off trees. When inside, take +1 Armor.',
          items: [
            {
              title: 'Sloth-Tarp',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Miner`s Grease',
          content: 'Great for dislodging a gem, tool, or limb from a tight crack. Highly explosive (3 uses).',
          items: [
            {
              title: 'Miner`s Grease (3 uses)',
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
    title: 'Greenwise',
    description: 'You delve deep into The Woods, prying its secrets from between rough boughs and whispering leaves. In this verdant kingdom, you are no mere scholar, but its confidant as well.',
    names: ['Briar', 'Moss', 'Fern', 'Lichen', 'Root', 'Willow', 'Sage', 'Yarrow', 
    'Rowan', 'Ash'],
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
        title: 'Iron Pot',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Root Knife (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Healing Salve (restores 1d4 STR, 1 use)',
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
      {title: 'Twine Bauble (petty, Ward once per day)'},
      {title: ''},
      {title: ''},
      {title: ''},
      {title: ''},
      {title: ''},
    ],
    goldDices: 3,
    firstPerk: {
      title: 'How have The Woods failed you?',
      list: [
        {
          content: 'An ill-tempered forest spirit cursed you for stealing, marking you as an enemy of their kind. Take a Bezoar Stone. Ingesting it cures any poison (1 use, unless retrieved).',
          items: [
            {
              title: 'Bezoar Stone',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'A close friend, swallowed whole. Now you see their face in any tea you brew. Take a Soporific Concoction (3 uses).',
          items: [
            {
              title: 'Soporific Concoction (3 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'You were poisoned, losing your sense of taste and smell. You can now withstand noxious fumes, and always carry Antitoxin (2 uses).',
          items: [
            {
              title: 'Antitoxin (2 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Your radical experiments turned your skin green, and you now gain nourishment as a plant. You don`t need rations, but a day without sufficient sunlight and water leaves you deprived.',
          items: null,
          petty: null
        },
        {
          content: 'Your impressive corpseflower won a local contest then promptly killed a judge. You fled, but not without the Prize Money (100gp) and a warrant for your arrest.',
          items: [
            {
              title: 'Prize Money (100gp)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'You created a restorative tincture that also caused accidental infertility. Take a Healing Potion that completely restores STR. Only you know of its unintended side-effects.',
          items: [
            {
              title: 'Healing Potion',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        }
      ]
    },
    secondPerk: {
      title: 'What keeps you safe while in The Woods?',
      list: [
        {
          title: 'Amadou',
          content: 'A vermillion fungus that catches fire quite easily (3 uses).',
          items: [
            {
              title: 'Amadou (3 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Delphinium',
          content: 'Breathe water for up to one hour (1 use, but can be divided into fractional doses).',
          items: [
            {
              title: 'Delphinium (1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Tacky Stalk',
          content: 'A woody reed that hardens into a permanent adhesive when chewed (2 uses).',
          items: [
            {
              title: 'Tacky Stalk (2 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Wisp Lantern',
          content: 'Caged in wrought iron, provides a dim light so long as the wisp is able to feed on nearby pain and fear.',
          items: [
            {
              title: 'Wisp Lantern',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Seed Bomb',
          content: 'A canvas sack filled with seeds that explodes on impact. d6 damage (blast, 3 uses).',
          items: [
            {
              title: 'Seed Bomb (3 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Briarvine',
          content: 'Entangles any creature up to horse size (STR to break free, reusable).',
          items: [
            {
              title: 'Briarvine',
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
          petty: null
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
  },
  {
    title: 'Hexenbane',
    description: 'You are a mere digit on the unerring hand of justice. You go where others fear to tread, unyielding and unbroken.',
    names: ['Percival', 'Felix', 'Isolde', 'Wolfram', 'Aldric', 'Eira', 'Oswin', 
    'Ivor', 'Brunhilda', 'Beatrix'],
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
        title: 'Blessed Tinctures',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Silver Knife (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Crossbow (d8, bulky)',
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
      {title: 'Vestments of the Order'},
      {title: ''},
      {title: ''},
      {title: ''},
      {title: ''},
      {title: ''},
    ],
    goldDices: 3,
    firstPerk: {
      title: 'To which order do you belong?',
      list: [
        {
          content: 'Order of the Crossroads. Take a Pocket Leyfinder. It points to nearby ley lines and other sources of arcane power. If you lose it, the punishment is death.',
          items: [
            {
              title: 'Pocket Leyfinder',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Order of the Bleeding Star. Take a Star-Iron mace (d8). It shines faintly in darkness, and becomes very hot in the presence of witchcraft.',
          items: [
            {
              title: 'Star-Iron mace (d8)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Order of the Glass Sigil. Take a Short Sword (d8) and Chainmail (2 Armor, bulky). You have contacts in most towns (the more rural, the better) willing to provide aid, food, or even weapons.',
          items: [
            {
              title: 'Short Sword (d8)',
              inHand: false,
              fatigue: false
            },
            {
              title: 'Chainmail (2 Armor, bulky)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Order of the Blank Eye. Take a Voidglass Shard. Peer through it to see invisible marks, creatures, and other magical effects. Lose the use of your eye for an hour afterwards (you are deprived).',
          items: [
            {
              title: 'Voidglass Shard',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Order of Canaas. Once per day you can change into a wolf. Take a Quicksilver Chain. Without it, you are unable to shift back.',
          items: [
            {
              title: 'Quicksilver Chain',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Order of the Silent Veil. Take a Quell Stone (2 uses) wrapped in burlap. Extinguishes any nearby flames once exposed to air.',
          items: [
            {
              title: 'Quell Stone (2 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        }
      ]
    },
    secondPerk: {
      title: 'What was your vow?',
      list: [
        {
          title: 'Honesty',
          content: 'Choose a weapon type (blunt, blade, etc). Attacks against you of this type are impaired. If your vow is broken, you lose d4 WIL.',
          items: null,
          petty: null
        },
        {
          title: 'Poverty',
          content: 'You carry the Disassemble Spellbook. Only you can use it. If your vow is broken, it explodes (d12 STR damage).',
          items: [
            {
              title: 'Disassemble Spellbook',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Selflessness',
          content: 'You are immune to magical effects such as charm, hatred, frenzy, and so on. If you break this vow, you lose d6 WIL.',
          items: null,
          petty: null
        },
        {
          title: 'Mercy',
          content: 'Choose a weapon type (blunt, blade, etc). Attacks with this weapon are enhanced. If your vow is broken, you can never use that weapon type again.',
          items: null,
          petty: null
        },
        {
          title: 'Charity',
          content: 'Once per day you can shrug off a Fatigue. If your vow is ever broken, you permanently lose one inventory slot.',
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
          title: 'Valor',
          content: 'The first time you inflict Critical Damage you receive d4 HP, returning to the previous limit at the end of combat. If your vow is broken, you die.',
          items: null,
          petty: null
        }
      ]
    }
  },
  {
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
  },
  {
    title: 'Kettlewright',
    description: 'You are known by the smell of molten metal and the jingle of tin. You are not a mere merchant, but an artisan of fire and metal.',
    names: ['Fergus', 'Eamon', 'Bram', 'Idris', 'Elara', 'Darragh', 'Seren', 
    'Rónán', 'Berek', 'Lorenz'],
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
        title: 'Pincers',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Roll of Tin',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Tent (fits 2)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Hammer (d6)',
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
      title: 'What is your trade?',
      list: [
        {
          content: 'You build small contraptions for local guilds (and don`t ask too many questions). Take an extra 40gp and a wanted poster with your face on it. Given time and materials, you can open almost any door or vault.',
          items: null,
          petty: [
            {
              title: 'extra 40gp'
            }
          ]
        },
        {
          content: 'You deal in home goods and tools, hawking your wares to townspeople across the lands. Take 20gp of items from the gear table. You are fluent in the Traveller`s Cant.',
          items: null,
          petty: [
            {
              title: 'extra 20gp'
            }
          ]
        },
        {
          content: 'You were a military smelter, before peace destroyed your livelihood. Take a Smelting Hammer (d10, bulky) and a Tin Helm (+1 Armor). Given time and adequate materials, you can repair armor.',
          items: [
            {
              title: 'Smelting Hammer (d10, bulky)',
              inHand: false,
              fatigue: false
            },
            {
              title: 'Tin Helm (+1 Armor).',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'You sell rare and quality items to monasteries and nobles alike. Take a Spyglass, a Necklace (petty) worth 20gp, and a Scroll of Mirrorwalk (petty).',
          items: [
            {
              title: 'Spyglass',
              inHand: false,
              fatigue: false
            }
          ],
          petty: [
            {
              title: 'Necklace '
            },
            {
              title: 'Scroll of Mirrorwalk'
            }
          ]
        },
        {
          content: 'You offer protection as a service, quietly watching for threats as money exchanges hands. You start with +d4 HP, and carry a Long Sword (d10, bulky) and a Brigandine (1 Armor, bulky).',
          items: [
            {
              title: 'Long Sword (d10, bulky)',
              inHand: false,
              fatigue: false
            },
            {
              title: 'Brigandine (1 Armor, bulky)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'You scavenge raw tin and iron from battlefields, pulling teeth from still- twitching corpses. Start with a young Donkey (+4 slots, slow), a Crossbow (d8 damage, bulky), and a Saw (d6).',
          items: [
            {
              title: 'Crossbow (d8 damage, bulky)',
              inHand: false,
              fatigue: false
            },
            {
              title: 'Saw (d6)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        }
      ]
    },
    secondPerk: {
      title: 'What never fails to get you out of trouble?',
      list: [
        {
          title: 'Fire Eggs',
          content: 'Six small pellets made of sea salt, wood, and crockery-dust. They explode at low heat (d8, blast) but dissipate quickly.',
          items: [
            {
              title: 'Fire Eggs (6 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Black Tar',
          content: 'Versatile: both sticky and highly flammable (3 uses).',
          items: [
            {
              title: 'Black Tar (3 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Spiked Boots',
          content: 'Cracks heads (d8) as easily as it does ice and muck. Travel is also a bit slower, but easier.',
          items: [
            {
              title: 'Spiked Boots (d8)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Tinker`s Paste',
          content: 'Seals shut any fist-sized opening (3 uses).',
          items: [
            {
              title: 'Tinker`s Paste (3 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Fireworks',
          content: 'A dazzling, albeit dangerous display. Enough explosive material to blow off a finger or three (2 uses remain).',
          items: [
            {
              title: 'Fireworks (2 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Carrion Cat',
          content: 'A clever pet, small enough to hide in your pack (bulky) strong enough to scare off smaller predators. Requires one Ration a day, and it must be meat.',
          items: [
            {
              title: 'Carrion Cat (bulky)',
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
    title: 'Marchguard',
    description: 'Bound by blood Oath to patrol the border and protect the realm. Once sworn, the Oath cannot be broken. The Guard always finds their own.',
    names: ['Gann', 'Light', 'Gale', 'Frost', 'Thorn', 'Reed', 'Flint', 'Brook', 
    'Brie', 'Aasim'],
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
        title: 'Long Sword (d10, bulky)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Boiled Leather (1 Armor)',
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
      title: 'Why did you take the Oath?',
      list: [
        {
          content: 'Your family has a long tradition of serving, and you were trained from an early age on how to survive in the wild. When taking the Supply (pg. 80) action your yield increases by one step (e.g. 1d4 > 1d6).',
          items: null,
          petty: null
        },
        {
          content: 'As a convict, the Oath was simply a means of avoiding punishment. Take Lockpicks, and the Key to a safehouse (petty).',
          items: [
            {
              title: 'Lockpicks',
              inHand: false,
              fatigue: false
            }
          ],
          petty: [
            {
              title: 'Key to a safehouse'
            }
          ]
        },
        {
          content: 'Noble-born, you joined to escape family trouble. Take a Goosefelt Tarp (fits two) that you stole before leaving home.',
          items: [
            {
              title: 'Goosefelt Tarp (fits two)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'When your family lost everything, you took the Oath to avoid becoming a burden. Take extra Rations (3 uses) and Throwing Knives (d6).',
          items: [
            {
              title: 'Rations (3 uses)',
              inHand: false,
              fatigue: false
            },
            {
              title: 'Throwing Knives (d6)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Your life was saved by a member of the Marchguard, and you were inspired to join their ranks. Take a Snare Trap and a Sketchbook filled with detailed drawings.',
          items: [
            {
              title: 'Snare Trap',
              inHand: false,
              fatigue: false
            },
            {
              title: 'Sketchbook',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'You were in a dark place, and decided that your life needed a little direction. You`re still not so sure it was the right choice. Take an Oilskin Coat and Mapping Paper.',
          items: [
            {
              title: 'Oilskin Coat',
              inHand: false,
              fatigue: false
            },
            {
              title: 'Mapping Paper',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        }
      ]
    },
    secondPerk: {
      title: 'What do you carry as proof of your Oath?',
      list: [
        {
          title: 'Impressive Pin',
          content: 'A metal badge of honor from the Guard. It can open doors, but leaves a trail (petty).',
          items: null,
          petty: [
            {
              title: 'Impressive Pin'
            }
          ]
        },
        {
          title: 'Oath Compass',
          content: 'Points not towards North, but instead to the nearest member of the Guard. It also lets you know when they`re getting close.',
          items: [
            {
              title: 'Oath Compass',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Pullstones',
          content: 'Two jet-black stones. When separated, the stones will always roll in the direction of the other.',
          items: [
            {
              title: 'Pullstones',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Fireflask',
          content: 'Highly alcoholic, yet strangely delicious. When thrown creates a wall of flames 10ft high that burns out after a few minutes (1 use).',
          items: [
            {
              title: 'Fireflask (1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Pain Band',
          content: 'Touch an injured creature to transfer their wounds to you (exchange their lost STR with your own). Recharge: Wear the ring while in perfect health. It will take 1 STR, permanently (petty).',
          items: null,
          petty: [
            {
              title: 'Pain Band'
            }
          ]
        },
        {
          title: 'Poacher`s Woe',
          content: 'Strongly-scented arrows (3 uses). The scent is powerful enough to track with ease.',
          items: [
            {
              title: 'Poacher`s Woe',
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
        title: 'Cart (+4 slots, bulky when pulled)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Playing Cards (tricked)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Cane Sword (d6)',
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
          petty: null
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
          petty: null
        },
        {
          content: 'You were a peddler of fake prophesies, but when one turned out to be true, it drew unwanted attention. Roll on the Omens (pg. 15) table, but keep the result to yourself. Start with a concealable Knife (d6, petty).',
          items: null,
          petty: [
            {
              title: 'Knife (d6, petty)'
            }
          ]
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
          ]
        },
        {
          content: 'You were cursed by a hedgewitch for fooling some innocent village folk. Magic acts unpredictably in your hands (WIL save to avoid disaster). If you are the target of magic, the same applies to its wielder.',
          items: null,
          petty: null
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
          petty: null
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
  },
  {
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
          petty: null
        },
        {
          title: 'Blacklegged Dandy',
          content: 'Hardy and adaptable, Tough or Perilous terrain (pg. 76) are one step easier. 6 HP. +4 slots.',
          items: null,
          petty: null
        },
        {
          title: 'Rivertooth',
          content: 'Impressively strong, capable of carrying heavy loads. 4 HP. +6 slots (+2 if carrying two people).',
          items: null,
          petty: null
        },
        {
          title: 'Piebald Cob',
          content: 'Intelligent, it can understand simple commands, and even has an instinct for danger. 6 HP. +4 slots.',
          items: null,
          petty: null
        },
        {
          title: 'Linden White',
          content: 'Highly trained and agile, it can perform intricate maneuvers in a time of need (no DEX save to flee). +3 slots.',
          items: null,
          petty: null
        },
        {
          title: 'Stray Fogger',
          content: 'Wild, but very fast, even in Tough terrain (pg. 76). Rides light. 4 HP. +2 slots.',
          items: null,
          petty: null
        }
      ]
    }
  },
  {
    title: 'Prowler',
    description: 'You are a specter in the night, a fleeting shadow that slips by its prey, unseen. Each kill a test of cunning and animal determination, a contest between life and death. You know that one day you will lose. You look forward to it.',
    names: ['Winda', 'Brielle', 'Theron', 'Chayse', 'Nuja', 'Dev', 'Raven', 
    'Lyra', 'Sable'],
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
        title: 'Tarp (shelters 1)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Boiled Leather (1 Armor)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Short Sword (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Spring-Loaded Trap (4 STR damage)',
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
      title: 'What did you last hunt?',
      list: [
        {
          content: 'A mock firefly, baiting water carriers with its glowing lure. Take an Alchemical Limb (d8) to replace the one it tore off. It works as well as the real thing, and is immune to poison, fire, and heat. Sometimes it jams.',
          items: [
            {
              title: 'Alchemical Limb (d8)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'An ice nettle, trapping and draining sheep. You lost your commission when the fungus you introduced killed half the flock. Take a Rime Seed (1 use). It freezes any body of water, no matter the size. Don`t eat it.',
          items: [
            {
              title: 'Rime Seed (1 use)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'A silver marsh crawler that killed someone close to you. You now carry its Tooth (petty) on a chain around your neck as a warning to others of its kind. The tooth hums softly when something is stalking you.',
          items: null,
          petty: [
            {
              title: 'Tooth'
            }
          ]
        },
        {
          content: 'A malicious forest spirit that poisoned a homestead. You saved a Heartseed from the roots of a dying tree (plant to create a a new forest). Also, take Iron Bracers (+1 Armor, bulky).',
          items: [
            {
              title: 'Iron Bracers (+1 Armor, bulky)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'A hollow wolf that had been frightening travellers. You took pity on the half-starved creature, and nursed it back to health. Now it is loyal to you unto death. It is also a great tunneler. 5 HP, 11 STR, 13 DEX, 8 WIL, teeth (d6).',
          items: null,
          petty: null
        },
        {
          content: 'An azure warbler. The gametes attract a sizeable profit, if properly extracted. You succeeded, but left its nest to the wolves. Take a Paring Knife (d6), an extra 20gp, and a pang of regret.',
          items: [
            {
              title: 'Paring Knife (d6)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: [
            {
              title: 'extra 20gp'
            }
          ]
        }
      ]
    },
    secondPerk: {
      title: 'What tool is always in your pack?',
      list: [
        {
          title: 'Fermented Spirits',
          content: 'Keeps you warm at the best of times, and can be used as an explosive at the worst (3 Uses).',
          items: [
            {
              title: 'Fermented Spirits (3 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Trail Shaker',
          content: 'A noisy instrument that reveals nearby trails, even when deeply hidden.',
          items: [
            {
              title: 'Trail Shaker',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Drowse Balm',
          content: 'A wax bar. If boiled in water, the steam acts as a soporific agent.',
          items: [
            {
              title: 'Drowse Balm',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Spike and Cord',
          content: 'For traversing or securing difficult terrains, or for creating makeshift traps and structures.',
          items: [
            {
              title: 'Spike and Cord',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Iron Rattle',
          content: 'Touch an injured creature to transfer their wounds to you (exchange their lost STR with your own). Recharge: Wear the ring while in perfect health. It will take 1 STR, permanently (petty).',
          items: [
            {
              title: 'Iron Rattle',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Hardening Glue',
          content: 'Makes any flat material (cloth, leather, sand) as hard as stone. Expensive (20gp a bottle, 3 uses).',
          items: [
            {
              title: 'Hardening Glue (20gp a bottle, 3 uses)',
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
    title: 'Rill Runner',
    description: 'You sing the stories of rivers and lakes, your talents soothing friends and the elements alike. You`ve seen more than most, but somehow it never seems to be enough.',
    names: ['Gale', 'Piper', 'Brook', 'Adair', 'Stone', 'Dale', 'Wren', 'Cliff', 
    'Rain', 'Robin'],
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
        title: 'Water Shoes',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Brigandine (1 Armor, bulky)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Compass',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Dagger (d6)',
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
      title: 'What songs are you best known for?',
      list: [
        {
          content: 'The Tinker`s Two-Step. A humorous fairy tale about a gift-giving traveler. Start with a Reed Whistle. Anyone in earshot must pass a WIL save to perform an act of violence.',
          items: [
            {
              title: 'Reed Whistle.',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'The Sylph and Her Lover. A bawdy tale of lost love. Start with a Breeze Knot (3 charges). Creates a strong breeze. Recharge: Tie it to a mast during a storm.',
          items: [
            {
              title: 'Breeze Knot (3 charges)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Harper`s Devotion. A sad, short tale about a musician that falls in love with a star. Start with a Celestial Lute. Reveals the constellations above, no matter the weather.',
          items: [
            {
              title: 'Celestial Lute',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'The Reed Fisher. A celebrated song about a massive carp that always seems to get away. Begin with a spool of River Twine (5 uses). Each dip into the river guarantees a catch, though it might not be pleasant.',
          items: [
            {
              title: 'Spool of River Twine (5 uses)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'Song of the Silver Stream. A wordless lullaby that mimics flowing water. Take a Stone Flute that can calm almost any river.',
          items: [
            {
              title: 'Stone Flute',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          content: 'The Thrush and the Meadow. A moody tale told in alternating chorus. Start with a Feather Quill (1 use, petty). A map drawn with this quill reveals the most expedient course between any two points.',
          items: null,
          petty: [
            {
              title: 'Feather Quill (1 use)'
            }
          ]
        }
      ]
    },
    secondPerk: {
      title: 'What pays your way across the land?',
      list: [
        {
          title: 'Performance',
          content: 'Performing at taverns always yields both room and board. Sometimes you even get tips! Start with an extra d6 gold.',
          items: null,
          petty: [
            {
              title: 'extra d6 gp'
            }
          ]
        },
        {
          title: 'Bodyguard',
          content: 'You are a protector for those afraid to travel alone. Start with a rapier (d8).',
          items: [
            {
              title: 'Rapier (d8)',
              inHand: false,
              fatigue: false
            }
          ],
          petty: null
        },
        {
          title: 'Wares',
          content: 'You buy low and sell high, always making just enough to get by. Take a Single Item worth 20gp or less from the equipment table.',
          items: null,
          petty: [
            {
              title: 'take any item for 20 or less gp'
            }
          ]
        },
        {
          title: 'Transport',
          content: 'You deliver “delicate” packages throughout the lands. You have at least one contact in any major town.',
          items: null,
          petty: null
        },
        {
          title: 'Sailor`s Friend',
          content: 'Whether water, wind, or sail, your aid brings ships to their destination. For you, passage is always free.',
          items: null,
          petty: null
        },
        {
          title: 'Guide',
          content: 'You shepherd caravans and travelers across water-soaked lands. Start with a Map relevant to your next journey.',
          items: null,
          petty: [
            {
              title: 'Map relevant to your next journey'
            }
          ]
        }
      ]
    }
  },
  {
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
]//TODO: move backs to files (?)
// Fieldwarden, Outrider - extra bond
// Hexenbane, Kettlewright, Marchguard - change stats