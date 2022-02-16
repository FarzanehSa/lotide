const assert = require('chai').assert;
const {countLetters} = require('../countLetters');

describe("#countLetters", () => {

  it("returns {a: 2, d: 4, e: 4, f: 1, h: 2, n: 2, o: 4, p: 1, r: 1, s: 1, t: 4, u: 3, w: 1, y: 2} for 'the future depends on what you do today'", () => {
    assert.deepEqual(countLetters('the future depends on what you do today'),{t: 4, h: 2, e: 4, f: 1, u: 3, r: 1, d: 4, p: 1, n: 2, s: 1, o: 4, w: 1, a: 2, y: 2});
  })
  
  it("space should not exist in return, input:'a red apple'", () => {
    const input = 'a red apple';
    const result = countLetters(input);
    assert.isUndefined(result[' ']);
  })

})