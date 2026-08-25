/*
Permite solo si la cuenta está activa y role es "admin" o "editor". Deniega viewer y roles desconocidos con una razón.
*/

const randomRole = Math.floor(Math.random() * 4);

const isAdmin = randomRole === 0;
const isEditor = randomRole === 1;
const isViewer = randomRole === 2;
const unknown = randomRole === 3;

const hasPermits = isAdmin || isEditor;

console.log(`Acceso a base de datos, su estado es:`);

if(hasPermits){
    console.log(`Aceptado`);

} else if (isViewer){
    console.log(`Denegado`);
} else {
    console.log(`Se desconoce el rol del usuario`);
}