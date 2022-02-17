// The function takes in two objects and returns true or false, based on a perfect match.
// 1. check the length of object keys to be equal.
// 2. check value of each key to be equal.
// 3. for numbers or strings check with !==
// 4. for arrays we call eqArrays to compare
// 5. for objects we callback itself!

const {eqArrays} = require('./eqArrays');

const eqObjects = function(object1,object2) {
// first check the length!
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  const keys = Object.keys(object1);
  for (const key of keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key],object2[key])) return false;
    } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      if (!eqObjects(object1[key],object2[key])) return false;
    } else if (object1[key] !== object2[key]) return false;
  }
  return true;
};

module.exports = {eqObjects};