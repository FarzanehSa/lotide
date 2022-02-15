const middle = function(array) {
  const mid = array.length / 2;
  let middleArray = [];
  if (mid > 1) {
    // 1. check if the array has only one or two elements, return [];
    middleArray.push(array[Math.floor(mid)]);
    // [1,2,3] --> [2]  - [1,2,3,4] --> [3]
    if (Number.isInteger(mid)) {
      // for [1,2,3,4] we need 2 as well
      // add it to the left side of array --> [2,3]
      middleArray.unshift(array[mid - 1]);
    }
  }
  return middleArray;
};

module.exports = {middle: middle}