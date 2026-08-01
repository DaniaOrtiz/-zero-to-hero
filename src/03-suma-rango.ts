// El rango incluye start y end. El acumulador debe inicializarse una sola vez, fuera del ciclo.

const start = 1;
const end = 5;
let sum = 0;

for (let multiplier = start; multiplier <= end; multiplier++) {
  sum += multiplier; //Lo de la izquierda sumale lo de la derecha
}

console.log(`Suma: ${sum}`);

//for (let num = 1; num <= 10; num ++) {
