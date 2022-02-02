const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  for (const char of string) {
    if (char === ' ') continue; // Skip space!
    result[char] ? result[char] += 1 : result[char] = 1;
  }
  return result;
};

// ****** Test ******
const mySentence = "lighthouse in the house";
const result = countLetters(mySentence);
assertEqual(result['l'],1);
assertEqual(result['i'],2);
assertEqual(result['g'],1);
assertEqual(result['h'],4);
assertEqual(result['t'],2);
assertEqual(result['o'],2);
assertEqual(result['u'],2);
assertEqual(result['s'],2);
assertEqual(result['e'],3);
assertEqual(result['n'],1);
assertEqual(result[' '],undefined);