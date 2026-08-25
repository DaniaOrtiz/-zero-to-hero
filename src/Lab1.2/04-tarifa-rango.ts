/*

Según weightKg: >0–1 cuesta 50; >1–5 cuesta 90; >5–10 cuesta 140; >10 requiere cotización; <=0 es inválido.

*/

const weight = -5;


if(weight > 0 && weight <= 1){
    console.log(`Costo: 50`);

} else if(weight >= 1 && weight <= 5){
    console.log(`Costo: 140`);

} else if (weight > 10){
    console.log(`Costo: Requiere cotización`);

} else if (weight < 0){
    console.log(`Es inválido`);
} else {
    console.log(`No hay Kg`);
}