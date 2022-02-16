const assert = require('chai').assert;
const {takeUntil} = require('../takeUntil');

describe("#takeUntil", () => {
  
  it("returns [1,2,3,4] when [1,2,3,4] waits to 'x < 0' happens!", () => {
    const data = [1,2,3,4];
    const result = takeUntil(data, x => x < 0);
    assert.deepEqual(result,[1,2,3,4]);
  })
  
  it("returns ['a','b','c'] when ['a','b','c','!','d','e'] waits to 'x === !' happens!", () => {
    const data = ['a','b','c','!','d','e'];
    const result = takeUntil(data, x => x === '!');
    assert.deepEqual(result,['a','b','c']);
  })
  
  it("returns [] when [-1, 1, 2] waits to 'x < 0' happens!", () => {
    const data = [-1, 1, 2];
    const result = takeUntil(data, x => x < 0);
    assert.deepEqual(result,[]);
  })

})