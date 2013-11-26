var test = require('tape');
var intersect = require('..');

test('intersect', function (t) {
  t.deepEqual(intersect([1], [2]), [], 'empty');
  t.deepEqual(intersect([1, 2], [2]), [2], 'intersection');
  t.end();
});

test('big', function (t) {
  t.deepEqual(intersect.big([1], [2]), [], 'empty');
  t.deepEqual(intersect.big([1, 2], [2]), [2], 'intersection');
  t.end();
});

test('compliance', function(t) {
  for (var algo in intersect) {
    if (intersect.hasOwnProperty(algo) && typeof intersect[algo] === 'function') {
      t.deepEqual(intersect[algo]([2], [2,2,2]), intersect([2], [2,2,2]), algo + '-complies-1');
      t.deepEqual(intersect[algo]([2,2,2], [2]), intersect([2,2,2], [2]), algo + '-complies-2');
    }
  }
  t.end();
});
