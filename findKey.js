const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj,callback) {
  for (const Key in obj) {
    if (callback(obj[Key])) {
      return Key;
    }
  }
  return undefined;
};

// ***** Test 1 *****

const restaurans = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const result1 = findKey(restaurans,x => x.stars === 2);
assertEqual(result1,'noma');

// ***** Test 2 *****

const result2 = findKey(restaurans,x => x.stars === 4);
assertEqual(result2,undefined);

// ***** Test 3 *****

const users = {
  'barney':  { 'age': 36, 'active': false },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
const result3 = findKey(users, x => x.age < 39 && x.active);
assertEqual(result3,'pebbles');
