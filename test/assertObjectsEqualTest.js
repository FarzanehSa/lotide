const {assertObjectsEqual} = require('../assertObjectsEqual');

console.log("\n-------     Test assertObjectsEqual     -------\n")

console.log("     test should pass\n")
assertObjectsEqual({a:1, b:2},{b:2, a:1});
assertObjectsEqual({a:1, z:[2,3]},{z:[2,3], a:1});

console.log("\n     test should fail\n")
assertObjectsEqual({a:1, b:2},{a:1, c:2});
assertObjectsEqual({a:1, b:2},{a:3, b:2});
assertObjectsEqual({a:1, b:2},{a:1, b:2, c:3});
assertObjectsEqual({a:1, z:[2,3]},{a:1 ,z:[12,3]});