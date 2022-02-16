const assert = require('chai').assert;
const {findKey} = require('../findKey');

describe("#findKey", () => {

  it("returns the first key for which the callback returns a truthy value.", () => {
    const restaurants = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const result = findKey(restaurants,x => x.stars === 2);
    console.log('\nrestaurants',restaurants);
    console.log("\n search for '2 stars' restaurants returns 'noma'");
    assert.strictEqual(result, 'noma');
  });
  
  it("If no key is found, then it should return undefined.", () => {
    const restaurants = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const result = findKey(restaurants,x => x.stars === 4);
    console.log("\n search for '4 stars' restaurants returns undefined");
    assert.isUndefined(result);
  });

})