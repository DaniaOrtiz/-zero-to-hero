/* Genera una serie desde start hasta end usando step positivo. 
El límite es inclusivo si puede alcanzarse exactamente. Rechaza step <= 0 con un mensaje y sin entrar al ciclo.*/

const inicio = 1;
const fin = 10;
const serie = 4;

for (let numero = inicio; numero <= fin; numero ++) {
   const serieComp = numero * serie ; 
console.log(`${numero}. ${serieComp}`);
}




