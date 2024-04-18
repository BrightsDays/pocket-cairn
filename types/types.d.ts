export type Edition = 'first' | 'second'

export type Abilities = {
  str: number
  dex: number
  wil: number
  strMax: number
  dexMax: number
  wilMax: number
}

export type Stats = {
  hp: number
  hpMax: number
  armor: number
  deprived: boolean
}

export type Coins = {
  gp: string
  sp: string
  cp: string
}

export type Item = {
  title: string
  inHand: boolean
  fatigue: boolean
}

export type Petty = {
  title: string
}

export type Scar = {
  content: string
  resolve?: Resolve
}

export type Resolve = {
  action: 'increaseHP' | 'increaseAbility',
  type: 'add' | 'change',
  num?: number,
  key?: AbilityKeys
}

export type Background = {
  title: string
  description: string
  names: string[]
  inventory: Item[],
  petty: Petty[]
  goldDices: number
  firstPerk: {
    title: string
    list: {
      content: string
      items: Item[] | null
      petty: Petty[] | null
      hp?: boolean
      companions?: Companion[]
    }[]
  }
  secondPerk: {
    title: string,
    list: {
      title: string
      content: string
      items: Item[] | null
      petty: Petty[] | null
      companions?: Companion[]
    }[]
  }
}

export type Biography = {
  background: string
  description: string
  firstPerk: {
    title: string
    content: string
  },
  secondPerk: {
    title: string
    content: string
  },
  bonds: string[]
}

export type Bond = {
  content: string,
  items: Item[] | null,
  petty: Petty[] | null,
  gold: number
}

export type Companion = {
  id: number
  name: string
  type: string
  stats: {
    str: number
    dex: number
    wil: number
    hp: number
    strMax: number
    dexMax: number
    wilMax: number
    hpMax: number
    armor: number
  },
  inventory: Petty[]
}

export type Inventory = Item[]

export type AbilityKeys = 'str' | 'dex' | 'wil'
export type CompanionAbilityKeys = 'str' | 'dex' | 'wil' | 'hp' | 'armor'
export type CoinKeys = 'gp' | 'sp' |'cp'

export type StatItem = 'str' | 'dex' | 'wil' | 'hp'
export type Change = {
  stat: Stat
  value: number
}