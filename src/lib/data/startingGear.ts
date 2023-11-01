export const startingArmor = () => {
  const list = ['']

  for (let item = 1; item <= 20; item++) {
    if (item <= 3) {
      list.push('')
    } else if (item <= 14) {
      list.push('Brigandine (1 Armor, bulky)')
    } else if (item <= 19) {
      list.push('Chainmail (2 Armor, bulky)')
    } else {
      list.push('Plate (3 Armor, bulky)')
    }
  }

  return list
}

export const startingHelmOrShield = () => {
  const list = ['']

  for (let item = 1; item <= 20; item++) {
    if (item <= 13) {
      list.push('')
    } else if (item <= 16) {
      list.push('Helmet (+1 Armor)')
    } else if (item <= 19) {
      list.push('Shield (+1 Armor)')
    } else {
      list.push('both')
    }
  }

  return list
}

export const startingWeapons = () => {
  const list = ['']

  for (let item = 1; item <= 20; item++) {
    if (item <= 5) {
      list.push('Dagger/Cudgel/Staff  (d6 damage)')
    } else if (item <= 14) {
      list.push('Sword/Mace/Axe (d8 damage)')
    } else if (item <= 16) {
      list.push('Sling (d4 damage)')
    } else if (item <= 18) {
      list.push('Bow (d6 damage, bulky)')
    } else if (item <= 19) {
      list.push('Crossbow (d8 damage, bulky)')
    } else {
      list.push('Halberd/War Hammer/Battleaxe  (d10 damage, bulky)')
    }
  }
  
  return list
}

export const startingGear = [
  '', 'Air Bladder', 'Fire Oil',	'Manacles',	'Rope (25ft)',
  'Antitoxin',	'Grappling Hook',	'Pick',	'Spirit Ward',
  'Cart (+4 slots, bulky)',	'Large Sack',	'Pole (10ft)',	'Spyglass',
  'Chain (10ft)',	'Large Trap',	'Pulley',	'Tinderbox',
  'Dowsing Rod',	'Lockpicks', 'Repellent',	'Wolfsbane'
]

export const startingTools = [
  '', 'Bellows',	'Cook Pots',	'Grease',	'Net',
  'Bucket',	'Crowbar',	'Hammer',	'Saw',
  'Caltrops',	'Drill (Manual)',	'Hour Glass',	'Sealant',
  'Chalk',	'Fishing Rod',	'Metal File',	'Shovel',
  'Chisel', 'Glue',	'Nails',	'Tongs'
]

export const startingTrinkets = [
  '', 'Bottle',	'Horn',	'Mirror',	'Soap',
  'Card Deck',	'Incense',	'Perfume',	'Sponge',
  'Dice Set',	'Instrument',	'Quill & Ink',	'Tar Pot',
  'Face Paint',	'Lens',	'Salt Pack',	'Twine',
  'Fake Jewels',	'Marbles',	'Small Bell',	'Whistle'
]