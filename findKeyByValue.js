// The function takes in an object and a value.
// Returns the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(obj,val) {
  for (const key in obj) {
    if (obj[key] === val) return key;
  }
  return undefined;
};

module.exports = {findKeyByValue};