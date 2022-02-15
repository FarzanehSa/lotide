const {assertEqual} = require('../assertEqual');
const {tail} = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(result.length,2); // result of tail function has 2 elements
assertEqual(result[0],"Lighthouse");
assertEqual(result[1],"Labs");

const emptyArr = tail([]); // test of empty array
assertEqual(emptyArr.length,0);

const singleArr = tail([1]); // test of single element array
assertEqual(singleArr.length,0);