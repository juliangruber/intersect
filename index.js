module.exports = intersect;

function intersect (a, b) {
  var res = [];
  for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) > -1) res.push(a[i]);
  }
  return res;
}
