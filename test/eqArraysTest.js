const assert = require('chai').assert;
const {eqArrays} = require('../eqArrays');

describe('#eqArrays', () => {

  it('[] = []', () => {
    assert.isTrue(eqArrays([],[]));
  })
  
  it('[1,2,3] = [1,2,3]', () => {
    assert.isTrue(eqArrays([1,2,3],[1,2,3]));
  })
  
  it("['abc','def'] = ['abc','def']", () => {
    assert.isTrue(eqArrays(['abc','def'],['abc','def']));
  })
  
  it("[[2, 3], ['a']] = [[2, 3], ['a']]", () => {
    assert.isTrue(eqArrays([[2, 3], ['a']], [[2, 3], ['a']]));
  })
  
  it('[1] != []', () => {
    assert.isFalse(eqArrays([1],[]));
  })
  
  it("[1,2,3] != [1,2,'3']", () => {
    assert.isFalse(eqArrays([1,2,3],[1,2,'3']));
  })
  
  it("[1,2,3] != [1,2]", () => {
    assert.isFalse(eqArrays([1,2,3],[1,2]));
  })
  
  it("[3,2,1] != [1,2,3]", () => {
    assert.isFalse(eqArrays([3,2,1],[1,2,3]));
  })
  
  it("[[2, 3], [4]] != [[2, 3], 4]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  })

})