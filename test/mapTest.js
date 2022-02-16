const assert = require('chai').assert;
const {map} = require('../map');

describe("#map", () => {
  
  it("['gig', 'cat', 'to', 'man', 't'] & word => word[0] returns: ['g','c','t','m','t']", () => {
    const words = ['gig', 'cat', 'to', 'man', 't'];
    const result = map(words, word => word[0]);
    assert.deepEqual(result,['g','c','t','m','t']);
  })
  
  it("['123','4','78','0'] & x => Number(x) returns: [123,4,78,0]", () => {
    const strNum = ['123','4','78','0'];
    const result = map(strNum,x => Number(x));
    assert.deepEqual(result,[123,4,78,0]);
  })
  
  it("[0,4,8,16,32] & n => n + 1 returns: [1,5,9,17,33]", () => {
    const numbers = [0,4,8,16,32];
    const result = map(numbers,number => number + 1);
    assert.deepEqual(result,[1,5,9,17,33]);
  })

})