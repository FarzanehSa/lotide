const {assertEqual} = require('../assertEqual');

console.log("\n----------     Test assertEqual     ----------\n")

console.log("     test should pass\n")
assertEqual(1 , 1);

console.log("\n     test should fail\n")
assertEqual("LightHouse Lab" , "LightHouse");
assertEqual(1 , '1');