const assert = require('chai').assert;
const {countOnly} = require('../countOnly');

describe("#countOnly", () => {

  it("input = ['apple', 'banana', 'grape', 'apple', 'orange', 'banana', 'grape', 'kiwi', 'apple']\nasked for: {'apple': true, 'kiwi': true, 'banana': false, 'pear': true}\nreturns { apple: 3, kiwi: 1 }", () => {
    const fruits = ['apple', 'banana', 'grape', 'apple', 'orange', 'banana', 'grape', 'kiwi', 'apple'];
    const result = countOnly(fruits, { "apple": true, "kiwi": true});
    assert.deepEqual(result, { apple: 3, kiwi: 1 });
  })

})