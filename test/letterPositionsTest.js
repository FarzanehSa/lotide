const assert = require('chai').assert;
const {letterPositions} = require('../letterPositions');

describe("#letterPositions", () => {

  it("returns {h: [0], e: [1], l: [2, 3], o: [4]} for 'hello'", () => {
    assert.deepEqual(letterPositions("hello"),{h: [0], e: [1], l: [2, 3], o: [4]});
  })
  
  it("returns {b: [0, 4], i: [1], g: [2], r: [5, 10], o: [6], t: [7], h: [8], e: [9]} for 'big brother'", () => {
    assert.deepEqual(letterPositions("big brother"),{b: [0, 4], i: [1], g: [2], r: [5, 10], o: [6], t: [7], h: [8], e: [9]});
  })

})