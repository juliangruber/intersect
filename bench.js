import intersect from './index.js'

const a = []
const b = []

for (let i = 0; i < 500; i++) {
  a[i] = i
  b[i] = i + 200
}

const start = Date.now()
for (let i = 0; i < 10000; i++) intersect(a, b)
console.log('%s ms', Date.now() - start)
