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

const without = function(source,itemsToRemove) {
  let goodArr = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      goodArr.push(item);
    }
  }
  return goodArr;
};

assertArraysEqual(without([1,2,3,4,5],[3]),[1,2,4,5]);
assertArraysEqual(without([1,2,3,4,'3'],[3]),[1,2,4,'3']);
assertArraysEqual(without([1,2,3,4,'3'],[]),[1,2,3,4,'3']);
assertArraysEqual(without([],[1,2]),[]);
assertArraysEqual(without([1,2,1,2,1,2,'1'],[1,2]),['1']);
assertArraysEqual(without([1,2,1,2,1,2,'1'],[6,7]),[1,2,1,2,1,2,'1']);

// console.log(without([1,2,3,4,5],[3]));
// console.log(without([1,2,3,4,'3'],[3]));
// console.log(without([1,2,3,4,'3'],[]));
// console.log(without([],[1,2]));
// console.log(without([1,2,1,2,1,2,'1'],[1,2]));