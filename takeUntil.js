// The function takes in an array and a callback.
// Return a slice of the array with elements taken from the beginning.
// It should keep going until the callback returns a truthy value.

const takeUntil = function(array, callback) {
  let index = 0;
  while (index < array.length && !callback(array[index])) {
      index ++;
    }
  return array.slice(0,index);
};

module.exports = {takeUntil};