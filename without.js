const without = function(source,itemsToRemove) {
  let goodArr = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      goodArr.push(item);
    }
  }
  return goodArr;
};

module.exports = {without};