const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};

assertEqual(head(['hi',3,4]),'hi');
assertEqual(head([1,3,4]),1);
assertEqual(head([4]),4);
assertEqual(head([]),undefined);
console.assert(head([]) === undefined);
