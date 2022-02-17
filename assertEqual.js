// The function takes in 2 values and prints out a message telling us if they match or not.

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = {assertEqual: assertEqual};