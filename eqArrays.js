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

assertEqual(eqArrays([1,2,3],[1,2,3]),true);
assertEqual(eqArrays(['1','2','3'],['1','2','3']),true);
assertEqual(eqArrays([],[]),true);
assertEqual(eqArrays(['abc','def'],['abc','def']),true);
assertEqual(eqArrays([1,2,3],[1,2,'3']),false);
assertEqual(eqArrays([1,2,3],[1,2]),false);
assertEqual(eqArrays([1],[]),false);
assertEqual(eqArrays([1,2,3],[1,2,'a']),false);
assertEqual(eqArrays([1,2,3],[3,2,1]),false);