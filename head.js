// takes in an array and returns the first element in the array.

const head = function(arr) {
  // returns undefined if array is empty!
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};

module.exports = {head};