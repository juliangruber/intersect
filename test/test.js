import test from 'tape'
import intersect, { big } from '../index.js'

test('intersect', t => {
  t.deepEqual(intersect([1], [2]), [], 'empty')
  t.deepEqual(intersect([1, 2], [2]), [2], 'intersection')
  t.end()
})

test('big', t => {
  t.deepEqual(big([1], [2]), [], 'empty')
  t.deepEqual(big([1, 2], [2]), [2], 'intersection')
  t.end()
})

test('compliance', t => {
  for (const algo in intersect) {
    if (typeof intersect[algo] === 'function') {
      t.deepEqual(intersect[algo]([2], [2, 2, 2]), intersect([2], [2, 2, 2]), algo + '-complies-1')
      t.deepEqual(intersect[algo]([2, 2, 2], [2]), intersect([2, 2, 2], [2]), algo + '-complies-2')
    }
  }
  t.end()
})

test('multiple sets at once', t => {
  [intersect, big].forEach(fn => {
    t.deepEqual(
      fn([
        [1, 2, 3, 4, 6],
        [2, 4, 5, 6],
        [2, 5, 6]
      ]),
      [2, 6]
    )
    t.deepEqual(
      fn([
        [1, 2, 3, 4, 6],
        [2, 4, 5, 6],
        [2, 5, 6],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      ]),
      [2, 6]
    )
    t.deepEqual(
      fn([
        [1, 2, 3, 4, 6],
        [2, 5, 6]
      ]),
      [2, 6]
    )
    t.deepEqual(
      fn([
        [1, 2, 3, 4, 6],
        [2, 5, 6]
      ]),
      [2, 6]
    )
    t.deepEqual(
      fn([
        [2, 5, 6]
      ]),
      [2, 5, 6]
    )

    t.deepEqual(
      fn([]),
      []
    )
  })
  t.end()
})
