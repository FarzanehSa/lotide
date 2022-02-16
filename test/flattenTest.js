const assert = require('chai').assert;
const {flatten} = require('../flatten');

describe("#flatten", () => {

  it("[['hi'],['a','b']]  =>  ['hi','a','b']", () => {
    assert.deepEqual(flatten([['hi'],['a','b']]),['hi','a','b']);
  })

  it("[1,2,[],[],11,12])  =>  [1,2,11,12]", () => {
    assert.deepEqual(flatten([1,2,[],[],11,12]),[1,2,11,12]);
  })
  
  it("[1,2,[1,2],[1,2,1,2],1,2])  =>  [1,2,1,2,1,2,1,2,1,2]", () => {
    assert.deepEqual(flatten([1,2,[1,2],[1,2,1,2],1,2]),[1,2,1,2,1,2,1,2,1,2]);
  })

})