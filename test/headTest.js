const {assertEqual} = require('../assertEqual');
const {head} = require('../head');

assertEqual(head(['hi',3,4]),'hi');
assertEqual(head([1,3,4]),1);
assertEqual(head([4]),4);
assertEqual(head([]),undefined);