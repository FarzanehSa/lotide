// The function takes an array and an object.
// It will return an object containing counts of everything that the input object listed.
// Only keys which have a truthy value should be counted in the resulting object.
// All other strings (either set to false or not included at all in the object) should not be counted.


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      // if key already defined add one to value
      // otherwise define by 1 as value.
      results[item] ? results[item] += 1 : results[item] = 1;
    }
  }
  return results;
};

module.exports = {countOnly};