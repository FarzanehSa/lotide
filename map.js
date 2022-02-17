// The function takes in an array and a callback function.
// Returns a new array based on the results of the callback function.

const map = function(array,callback) {
  let results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = {map};