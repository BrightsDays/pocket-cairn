export default (dices: number = 1, facets: number = 6): number => {
  const result = []

  for (let i = 0; i < dices; i++) {
    const roll = Math.floor(Math.random() * facets) + 1
    result.push(roll)
  }
  
  return result.reduce((a, b) => a + b, 0)
}