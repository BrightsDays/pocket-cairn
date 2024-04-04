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
  petty: { title: string }[]
  goldDices: number
  firstPerk: {
    title: string
    list: [
      {
        content: string
        items: Item[] | null
        petty: { title: string }[] | null
      }
    ]
  }
  secondPerk: {
    title: string,
    list: {
      title: string
      content: string
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
  bond: string
}

export type Bond = {
  content: string,
  items: Item[] | null,
  petty: { title: string }[] | null,
  gold: number
}

export type Inventory = Item[]
export type Petty = { title: string }[]

export type AbilityKeys = 'str' | 'dex' | 'wil'
export type CoinKeys = 'gp' | 'sp' |'cp'