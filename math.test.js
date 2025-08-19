const { suma, resta, multiplicacion, division } = require('./math');

console.assert(suma(2, 3) === 5);
console.assert(resta(2,3) === -1);
console.assert(multiplicacion(2,3) === 6)
console.assert(division(6,2) === 3)