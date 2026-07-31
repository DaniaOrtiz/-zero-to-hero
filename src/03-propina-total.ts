/*
Problema y datos de prueba
orderSubtotal = 480; tipPercent = 10. Muestra propina y total.
----------------------------------------------------------------
Criterio visible
Al cambiar subtotal o porcentaje, ambos resultados se recalculan.

*/

const orderSubtotal = 480;
const tipPercent = 10;

const propinaMonto = (orderSubtotal * tipPercent) / 100;
const totalComprado = orderSubtotal + propinaMonto;

console.log(`Propina: ${propinaMonto}, Total: ${totalComprado}`);