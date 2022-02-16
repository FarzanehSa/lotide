const assert = require('chai').assert;
const {without} = require('../without');

describe("#without", () => {

  it('returns [] when we need [] without [1,2]', () => {
    assert.deepEqual(without([],[1,2]),[]);
  })
  
  it('returns [1,2,4,5] when we need [1,2,3,4,5] without [3]', () => {
    assert.deepEqual(without([1,2,3,4,5],[3]),[1,2,4,5]);
  })
  
  it('returns [1,2,3] when we need [1,2,3] without []', () => {
    assert.deepEqual(without([1,2,3],[]),[1,2,3]);
  })
  
  it("returns ['1'] when we need [1,2,1,2,1,2,'1'] without [1,2]", () => {
    assert.deepEqual(without([1,2,1,2,1,2,'1'],[1,2]),['1']);
  })
  
  it("returns [1,2,4,'3'] when we need [1,2,3,4,'3'] without [3]", () => {
    assert.deepEqual(without([1,2,3,4,'3'],[3]),[1,2,4,'3']);
  })
  
  it('returns [1,2,3] when we need [1,2,3] without [6,7]', () => {
    assert.deepEqual(without([1,2,3],[6,7]),[1,2,3]);
  })

})