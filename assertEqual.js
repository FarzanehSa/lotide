const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("LightHouse Lab" , "LightHouse");
assertEqual(1 , 1);