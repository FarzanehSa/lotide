const assert = require('chai').assert;
const {findKeyByValue} = require('../findKeyByValue');

describe("#findKeyByValue", () => {

  it("should return the first key which contains the given value.", () => {
    const oscarWinners = {
      actor_leading: "The Father",
      actor_supporting: "Judas and the Black Messiah",
      actress_leading: "Nomadland",
      actress_supporting: "Minari",
      directing: "Nomadland",
      best_picture:  "Nomadland"
    };
    const result = findKeyByValue(oscarWinners, "Nomadland");
    console.log("\noscarWinners",oscarWinners);
    console.log("\n returns 'actress_leading' when we search for 'Nomadland'");
    assert.strictEqual(result, 'actress_leading');
  });
  
  it("should return undefined, If no key with that given value is found", () => {
    const oscarWinners = {
      actor_leading: "The Father",
      actor_supporting: "Judas and the Black Messiah",
      actress_leading: "Nomadland",
      actress_supporting: "Minari",
      directing: "Nomadland",
      best_picture:  "Nomadland"
    };
    const result = findKeyByValue(oscarWinners,"That '70s Show");
    console.log("\n returns undefined when we search 'That '70s Show'");
    assert.isUndefined(result);
  });

})