const takeUntil = function(array, callback) {
  let index = 0;
  while (index < array.length && !callback(array[index])) {
      index ++;
    }
  return array.slice(0,index);
};

module.exports = {takeUntil};