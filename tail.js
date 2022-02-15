const tail = function(arr) {
  const myArr = [];
  for (let i = 1; i < arr.length; i++) {
    myArr.push(arr[i]);
  }
  return myArr;
};

module.exports = {tail};