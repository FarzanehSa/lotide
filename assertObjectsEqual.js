// This function takes in 2 objects and prints out a message telling us if they match or not.

const {eqObjects} = require('./eqObjects');

const assertObjectsEqual = function(actualObject,expectedObject) {
  const inspect = require('util').inspect;
  if (eqObjects(actualObject,expectedObject)) {
    console.log(`\u2705 Assertion Passed: ${inspect(actualObject)} === ${inspect(expectedObject)}`);
  } else {
    console.log(`\u274c Assertion Failed: ${inspect(actualObject)} !== ${inspect(expectedObject)}`);
  }
};

module.exports = {assertObjectsEqual};