// app.js assignment

const utils = require('./stringUtils');

// Kevin's Test Kitchen
// Try capitalize
console.log(utils.capitalize('hello')); // Hello
console.log(utils.capitalize(''));      // (empty string)
console.log(utils.capitalize(42));      // (empty string)

// Try reverse
console.log(utils.reverse('world'));    // dlrow
console.log(utils.reverse(''));         // (empty string)

// Try contains
console.log(utils.contains('coding', 'cod'));   // true
console.log(utils.contains('coding', 'dog'));   // false
console.log(utils.contains('coding', 123));     // false
