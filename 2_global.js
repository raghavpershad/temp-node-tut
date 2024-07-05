const names = require('./names');
const sayHi = require('./utils');

const bacon = require('./ok');
console.log(bacon);
console.log(names);

require('./7_mind_grenade');

sayHi('san');
sayHi(names.john);
sayHi(names.peter);
