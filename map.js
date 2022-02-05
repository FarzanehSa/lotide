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

// ********************************************************

const map = function(array,callback) {
  let results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,['g','c','t','m','t']);

const numbers = [0,4,8,16,32];
const results2 = map(numbers,number => number + 1);
assertArraysEqual(results2,[1,5,9,17,33]);

const strNum = ['123','4','78','0'];
const results3 = map(strNum,x => Number(x));
assertArraysEqual(results3,[123,4,78,0]);