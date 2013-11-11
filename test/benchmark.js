var r = function (seed) {
	var s = seed;

	return function () {
		var x = ~~(Math.sin(s++) * 1E4);
		return x > 0 ? x : -x;
	};
};

var prng1 = r(5369);
var prng2 = r(1973);

var arr1 = []; for (var i = 0; i < 1E4; ++i) arr1.push(prng1());
var arr2 = []; for (var i = 0; i < 1E4; ++i) arr2.push(prng2());

// intersect 1.
	var indexOf = function (arr, el) {
		for (var i = 0, arrlen = arr.length; i < arrlen; i++) {
			if (arr[i] === el) return i;
		}
		return -1;
	}

	var intersect1 = function (a, b) {
		var res = [];
		for (var i = 0, alen = a.length; i < alen; i++) {
			if (~indexOf(b, a[i])) res.push(a[i]);
		}
		return res;
	}

// intersect 2.
	var intersect2 = function(a, b) {
		return a.filter(function(n) {
			return ~b.indexOf(n)
		})
	}

var bench = function ( name, routine ) {
	var start = process.hrtime();

	for(var i = 0; i < 1E3; ++i) routine(arr1, arr2);

	var end = process.hrtime(start);

	console.log(name + " \u2014 " + end[0] + " s, " + (end[1] / 1E6).toFixed(3) + " ms.")
}

bench("intersect1", intersect1);
bench("intersect2", intersect2);