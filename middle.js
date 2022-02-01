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

const middle = function(array) {
  const mid = array.length / 2;
  let middleArray = [];
  if (mid > 1) {
    // 1. check if the array has only one or two elements, return [];
    middleArray.push(array[Math.floor(mid)]);
    // [1,2,3] --> [2]  - [1,2,3,4] --> [3]
    if (Number.isInteger(mid)) {
      // for [1,2,3,4] we need 2 as well
      // add it to the left of array --> [2,3]
      middleArray.unshift(array[mid - 1]);
    }
  }
  return middleArray;
};

assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]);