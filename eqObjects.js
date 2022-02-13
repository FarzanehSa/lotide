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
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key],object2[key])) return false;
    } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      if (!eqObjects(object1[key],object2[key])) return false;
    } else if (object1[key] !== object2[key]) return false;
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
const ob1 = {a:1, b:{kk:2}, c:[1]};
const ob2 = {b:{kk:2}, c:[1], a:1};
const ob3 = {b:{kk:2, ll:1}, c:[1], a:1};
const ob4 = {b:{kk:2, nn: {ll: 1}}, c:[1], a:1};
const ob5 = {c:[1], a:1, b:{kk:2, nn: {ll: 1}}};
const ob6 = {c:[1], a:1, b:{kk:2, nn: {cc: 8, oo: {pp:7}, ll: 2}}};
const ob7 = {c:[1], b:{nn: {oo: {pp: 7}, ll: 2, cc: 8}, kk:2}, a:1};
const ba3 = {b:2, a:{j: 10}};
const zab = { a: { z: 1 }, b: 2 };
const azb = { a: { z: 1 }, b: 2 };
const ayzb = { a: { y: 0, z: 1 }, b: 2 };


assertEqual(eqObjects(ba,ab),true);
assertEqual(eqObjects(ab,ba),true);
assertEqual(eqObjects(az,za),true);
assertEqual(eqObjects(ob1,ob2),true);
assertEqual(eqObjects(ob4,ob5),true);
assertEqual(eqObjects(ob6,ob7),true);
assertEqual(eqObjects(azb,zab),true);

assertEqual(eqObjects(ab,ba2),false);
assertEqual(eqObjects(ab,abc),false);
assertEqual(eqObjects(ab,ac),false);
assertEqual(eqObjects(az,az2),false);
assertEqual(eqObjects(ob1,ob3),false);
assertEqual(eqObjects(ob5,ob6),false);
assertEqual(eqObjects(ba2,ba3),false);
assertEqual(eqObjects(azb,ayzb),false);
assertEqual(eqObjects(ayzb,ab),false);