// This function retrieve every element except the head (first element) of the array.
// Function should not modify the array that is passed in. 
// It should return a new array.

const tail = function(arr) {
  const myArr = [];
  for (let i = 1; i < arr.length; i++) {
    myArr.push(arr[i]);
  }
  return myArr;
};

module.exports = {tail};