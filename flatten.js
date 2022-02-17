// The function takes in an array containing elements including nested arrays of elements.
// Returns a "flattened" version of the array.
// It can only handle one level of nesting.

const flatten = function(array) {
  let flatArray = [];
  for (let element of array) {
    // push every element till reach an other array -> use concat -> continue push.
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(element);
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

module.exports = {flatten}
