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

export type Inventory = Item[]

export type AbilityKeys = 'str' | 'dex' | 'wil'
export type CoinKeys = 'gp' | 'sp' |'cp'