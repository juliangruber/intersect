module.exports = intersect;

function intersect (a, b) {
  var res = [],
      temp = {};
  for (var i = 0; i < a.length; i++) {
    temp[a[i]] = true;
  }
  for (var i = 0; i < b.length; i++) {
      if (temp[b[i]]) res.push(b[i]);
  }
  return res;
}
