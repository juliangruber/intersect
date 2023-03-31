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
  if (!b) return many(a)

  const res = []
  for (let i = 0; i < a.length; i++) {
    if (indexOf(b, a[i]) > -1) res.push(a[i])
  }
  return res
}

export default intersect

export const big = (a, b) => {
  if (!b) return many(a)

  const ret = []
  const temp = {}

  for (let i = 0; i < b.length; i++) {
    temp[b[i]] = true
  }
  for (let i = 0; i < a.length; i++) {
    if (temp[a[i]]) ret.push(a[i])
  }

  return ret
}

const indexOf = (arr, el) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i
  }
  return -1
}
