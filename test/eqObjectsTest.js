const assert = require('chai').assert;
const {eqObjects} = require('../eqObjects');

describe("#eqObjects", () => {

  it('{a:1, b:2} = {b:2, a:1}', () => {
    assert.isTrue(eqObjects({a:1, b:2},{b:2, a:1}));
  })
  
  it('{a:1, z:[2,3]} = {z:[2,3], a:1}', () => {
    assert.isTrue(eqObjects({a:1, z:[2,3]},{z:[2,3], a:1}));
  })
  
  it('{c:[1], a:1, b:{kk:2, nn: {cc: 8, oo: {pp:7}, ll: 2}}} = {c:[1], b:{nn: {oo: {pp: 7}, ll: 2, cc: 8}, kk:2}, a:1}', () => {
    assert.isTrue(eqObjects({c:[1], a:1, b:{kk:2, nn: {cc: 8, oo: {pp:7}, ll: 2}}},{c:[1], b:{nn: {oo: {pp: 7}, ll: 2, cc: 8}, kk:2}, a:1}));
  })
  
  it('{a:1, b:2} != {b:2, a:10}', () => {
    assert.isFalse(eqObjects({a:1, b:2},{b:2, a:10}));
  })
  
  it('{a:1, b:2} != {a:1, c:2}', () => {
    assert.isFalse(eqObjects({a:1, b:2},{a:1, c:2}));
  })
  
  it('{ a: { z: 1 }, b: 2 } != { a: { z: 0 }, b: 2 }', () => {
    assert.isFalse(eqObjects({ a: { z: 1 }, b: 2 },{ a: { z: 0 }, b: 2 }));
  })

})