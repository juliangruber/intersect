var test = require('tape');
var intersect = require('..');

test('intersect', function (t) {
  t.deepEqual(intersect([1], [2]), [], 'empty');
  t.deepEqual(intersect([1, 2], [2]), [2], 'intersection');
  t.deepEqual(intersect([1], [2], {big: true}), [], 'empty-object');
  t.deepEqual(intersect([1,2], [2], {big: true}), [2], 'intersection-object');
  t.deepEqual(intersect([1,2,2], [2]), intersect([1,2,2], [2], {big: true}), 'intersect-big-small-semantics-equal-1')
  t.deepEqual(intersect([1,2], [2,2]), intersect([1,2], [2,2], {big: true}), 'intersect-big-small-semantics-equal-2')
  t.end();
});
