// The function takes in 2 arrays and prints out a message telling us if they match or not.

const {eqArrays} = require('./eqArrays');

const assertArraysEqual = function(actualArray,expectedArray) {
  if (eqArrays(actualArray,expectedArray)) {
    console.log(`\u2705 Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`\u274c Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

module.exports = {assertArraysEqual: assertArraysEqual};