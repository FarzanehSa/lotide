// findKey takes in an object and a callback.
// return the first key for which the callback returns a truthy value.
// If no key is found, then it should return undefined.

const findKey = function(obj,callback) {
  for (const Key in obj) {
    if (callback(obj[Key])) {
      return Key;
    }
  }
  return undefined;
};

module.exports = {findKey};
