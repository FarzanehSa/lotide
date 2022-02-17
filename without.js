// The function returns a subset of a given array, removing unwanted elements.

const without = function(source,itemsToRemove) {
  let goodArr = [];
  for (let item of source) {
    // check items of sourc one by one.
    // just push them in goodArr if it is not include in toRemove array.
    if (!itemsToRemove.includes(item)) {
      goodArr.push(item);
    }
  }
  return goodArr;
};

module.exports = {without};