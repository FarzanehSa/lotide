const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
// first check the length!
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  const keys = Object.keys(object1);
  for (const key of keys) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key],object2[key])) return false;
    }
    else if (object1[key] !== object2[key]) return false;
  }
  return true;
};

// ***** Test *****

const ab = {a:1, b:2};
const ba = {b:2, a:1};
const ba2 = {b:2, a:10};
const ac = {a:1, c:3};
const az = {a:1, z:[2,3]};
const za = {z:[2,3], a:1};
const abc = {a:1, b:2, c:3};
const az2 = {a:1 ,z:[12,3]};

assertEqual(eqObjects(ab,ba),true);
assertEqual(eqObjects(az,za),true);

assertEqual(eqObjects(ab,ba2),false);
assertEqual(eqObjects(ab,abc),false);
assertEqual(eqObjects(ab,ac),false);
assertEqual(eqObjects(az,az2),false);