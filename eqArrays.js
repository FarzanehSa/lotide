// The function eqArrays takes in two arrays and returns true or false, based on a perfect match.
// eqArrays does not return true for arrays of objects that are identical.

const eqArrays = function(arr1,arr2) {
  // first check by lenght of them.
  if (arr1.length !== arr2.length) {
    return false;
  }
  // check by type/value each element of arrays
  for (let index = 0; index < arr1.length; index++) {
    // callback itself if type of them is array
    if (Array.isArray(arr1[index]) && Array.isArray(arr2[index])) {
      if (!eqArrays(arr1[index],arr2[index])) return false;
    } else if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

module.exports = {eqArrays};