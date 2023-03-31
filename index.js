const many = sets => {
  if (sets.length === 0) return []

  const l = sets.length - 1
  const first = sets[0]
  const last = sets[l]
  const o = Object.fromEntries(first.map(el => [el, 0]))

  for (const [i, row] of sets.entries()) {
    for (const el of row) {
      if (o[el] === i - 1) o[el] = i
    }
  }

  return last.filter(el => o[el] === l)
}

const intersect = (a, b) => {
  if (!b) return many(a)
  return a.filter(el => b.includes(el))
}

export default intersect

export const big = (a, b) => {
  if (!b) return many(a)
  const index = Object.fromEntries(b.map(el => [el, true]))
  return a.filter(el => index[el])
}
