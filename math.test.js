const { suma, resta, multiplicacion, division } = require('./math');

// Test para suma
console.assert(suma(2, 3) === 5, 'Test suma falló');
console.assert(suma(-1, 1) === 0, 'Test suma con negativos falló');

// Test para resta
console.assert(resta(5, 3) === 2, 'Test resta falló');
console.assert(resta(0, 5) === -5, 'Test resta con resultado negativo falló');

// Test para multiplicación
console.assert(multiplicacion(3, 4) === 12, 'Test multiplicación falló');
console.assert(multiplicacion(0, 5) === 0, 'Test multiplicación por cero falló');

// Test para división
console.assert(division(10, 2) === 5, 'Test división falló');
console.assert(division(7, 2) === 3.5, 'Test división con decimal falló');

console.log('✅ Todos los tests pasaron correctamente');