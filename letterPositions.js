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

const letterPositions = function(sentence) {
  let result = {};
  for (let index = 0; index < sentence.length; index++){
    const char = sentence[index];
    if (char === ' ') continue;
    result[char] ? result[char].push(index) : result[char] = [index];
  }
  return result;
}

// ****** Test 1 ******
const mySentence = "hello";
const result = letterPositions(mySentence);
assertArraysEqual(result['h'],[0]);
assertArraysEqual(result['e'],[1]);
assertArraysEqual(result['l'],[2,3]);
assertArraysEqual(result['o'],[4]);

// ****** Test 2 ******
const mySentence2 = "lighthouse in the house";
const result2 = letterPositions(mySentence2);
assertArraysEqual(result2.l,[0]);
assertArraysEqual(result2.i,[1, 11]);
assertArraysEqual(result2.g,[2]);
assertArraysEqual(result2.h,[3, 5, 15, 18]);
assertArraysEqual(result2.t,[4, 14]);
assertArraysEqual(result2.o,[6, 19]);
assertArraysEqual(result2.u,[7, 20]);
assertArraysEqual(result2.s,[8, 21]);
assertArraysEqual(result2.e,[9, 16, 22]);
assertArraysEqual(result2.n,[12]);