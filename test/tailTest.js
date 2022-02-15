const assert = require('chai').assert;
const {tail} = require('../tail');

describe("#tail", () => {

  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  })

  it('it shouldn\'t change the input array. \n input: [1,2,3,4] after runing the tail, length of input is still 4 ', () => {
    const input = [1,2,3,4];
    tail(input);
    assert.equal(input.length,4);
  })

  it('returns [] for ["item"]', () => {
    assert.deepEqual(tail(["item"]),[]);
  })

  it('returns [] for []', () => {
    assert.deepEqual(tail([]),[]);
  })

})