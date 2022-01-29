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

const assertArraysEqual = function(actualArray,expectedArray) {
  if (eqArrays(actualArray,expectedArray)) {
    console.log(`\u2705 Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`\u274c Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual(['1','2','3'],['1','2','3']);
assertArraysEqual([],[]);
assertArraysEqual(['abc','def'],['abc','def']);
assertArraysEqual([1,2,3],[1,2,'3']);
assertArraysEqual([1,2,3],[1,2]);
assertArraysEqual([1],[]);
assertArraysEqual([1,2,3],[1,2,'a']);
assertArraysEqual([1,2,3],[3,2,1]);