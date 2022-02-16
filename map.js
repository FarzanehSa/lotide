const map = function(array,callback) {
  let results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = {map};