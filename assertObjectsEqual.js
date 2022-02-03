const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1,object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) return false;
    const keys = Object.keys(object1);
    for (const key of keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key],object2[key])) return false;
      }
      else if (object1[key] !== object2[key]) return false;
    }
    return true;
  };

const assertObjectsEqual = function(actualObject,expectedObject) {
  const inspect = require('util').inspect;
  if (eqObjects(actualObject,expectedObject)) {
    console.log(`\u2705 Assertion Passed: ${inspect(actualObject)} === ${inspect(expectedObject)}`);
  } else {
    console.log(`\u274c Assertion Failed: ${inspect(actualObject)} !== ${inspect(expectedObject)}`);
  }
};

// ***** Test *****

assertObjectsEqual({a:1, z:[2,3]},{z:[2,3], a:1});
assertObjectsEqual({a:1, b:2},{b:2, a:1});
assertObjectsEqual({a:1, b:2},{b:2, a:10});
assertObjectsEqual({a:1, b:2},{a:1, b:2, c:3});
assertObjectsEqual({a:1, b:2},{a:1, c:3});
assertObjectsEqual({a:1, z:[2,3]},{a:1 ,z:[12,3]});