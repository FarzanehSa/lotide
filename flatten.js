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

const flatten = function(array) {
  let flatArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(element);
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

assertArraysEqual(flatten([1,2,[3,4,5],[6,7,8,9,10],11,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
assertArraysEqual(flatten([1,2,[],[],11,12]),[1,2,11,12]);
assertArraysEqual(flatten([1,2,[1,2],[1,2,1,2],1,2]),[1,2,1,2,1,2,1,2,1,2]);
assertArraysEqual(flatten([['hi'],['a','b']]),['hi','a','b']);
