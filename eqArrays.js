const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (Array.isArray(arr1[index]) && Array.isArray(arr2[index])) {
      if (!eqArrays(arr1[index],arr2[index])) return false;
    } else if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

module.exports = {eqArrays};