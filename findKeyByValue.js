const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj,val) {
  for (const key in obj) {
    if (obj[key] === val) return key;
  }
  return undefined;
};

// ***** Test 1 *****
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// ***** Test 2 *****
const oscarWinners = {
  actor_leading: "The Father",
  actor_supporting: "Judas and the Black Messiah",
  actress_leading: "Nomadland",
  actress_supporting: "Minari",
  directing: "Nomadland",
  best_picture:  "Nomadland"
};
assertEqual(findKeyByValue(oscarWinners, "Minari"), "actress_supporting");
assertEqual(findKeyByValue(oscarWinners, "Nomadland"), "actress_leading");
assertEqual(findKeyByValue(oscarWinners, "That '70s Show"), undefined);