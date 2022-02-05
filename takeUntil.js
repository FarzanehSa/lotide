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

const takeUntil = function(array, callback) {
  let index = 0;
  while (index < array.length && !callback(array[index])) {
      index ++;
    }
  return array.slice(0,index);
};

// ***** Test 1 *****

const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[1,2,3,4,5,6,7,8,9]);

// ***** Test 2 *****

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ]);

// ***** Test 3 *****

const data3 = [1, 2, 3, 4, 5, 6, 7, -1, 8, 9];
const results3 = takeUntil(data3, x => x < 0);
assertArraysEqual(results3,[1,2,3,4,5,6,7]);

// ***** Test 4 *****

const data4 = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const results4 = takeUntil(data4, x => x < 0);
assertArraysEqual(results4,[]);