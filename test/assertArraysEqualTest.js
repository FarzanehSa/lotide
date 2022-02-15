const {assertArraysEqual} = require('../assertArraysEqual');

console.log("\n-------     Test assertArraysEqual     -------\n")

console.log("     test should pass\n")
assertArraysEqual([],[]);
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual(['abc','def'],['abc','def']);

console.log("\n     test should fail\n")
assertArraysEqual([1],[]);
assertArraysEqual([1,2,3],[1,2,'3']);
assertArraysEqual([1,2,3],[3,2,1]);
assertArraysEqual([1,2,3],[1,2]);
