module.exports = intersect;

function intersect (a, b, options) {
    return (options && options.big) ? intersect_big(a, b) : intersect_small(a, b);
}

function indexOf(arr, el) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i;
  }
  return -1;
}

function intersect_small(a, b) {
    var res = [];
    for (var i = 0; i < a.length; i++) {
        if (indexOf(b, a[i]) > -1) res.push(a[i]);
    }
    return res;
}

function intersect_big(a, b) {
    var res = [],
      temp = {};
    for (var i = 0; i < b.length; i++) {
      temp[b[i]] = true;
    }
    for (var i = 0; i < a.length; i++) {
      if (temp[a[i]]) res.push(a[i]);
    }
    return res;
}
