const many = sets => {
  const o = {}
  const l = sets.length - 1
  const first = sets[0]
  const last = sets[l]

  for (const i in first) o[first[i]] = 0

  for (let i = 1; i <= l; i++) {
    const row = sets[i]
    for (const j in row) {
      const key = row[j]
      if (o[key] === i - 1) o[key] = i
    }
  }

  const a = []
  for (const i in last) {
    const key = last[i]
    if (o[key] === l) a.push(key)
  }

  return a
}

const intersect = (a, b) => {
  return b
    ? a.filter(el => b.includes(el))
    : many(a)
}

export default intersect

export const big = (a, b) => {
  if (!b) return many(a)
  const index = Object.fromEntries(b.map(el => [el, true]))
  return a.filter(el => index[el])
}
