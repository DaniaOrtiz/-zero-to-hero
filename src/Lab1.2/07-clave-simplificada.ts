/*

Recibe hasMinimumLength, hasNumber, hasUppercase y matchesConfirmation. Muestra la primera regla incumplida o “válida”.


*/

const hasMinimumLength = Math.random() < 0.5;
const hasNumber = Math.random() < 0.5;
const hasUppercase = Math.random() < 0.5;
const matchesConfirmation = Math.random() < 0.5;

console.log(
    `Longitud Minima: ${hasMinimumLength}
    Contiene numero: ${hasNumber}
    Contiene Mayus: ${hasUppercase}
    La contraseña coincide: ${matchesConfirmation}
    `
);


if (hasMinimumLength && hasNumber && hasUppercase && matchesConfirmation) {
  console.log(`Contraseña exitosa`);
} else if (!hasMinimumLength) {
  console.log(`Te hace falta la longitud mínima`);
} else if (!hasNumber) {
  console.log(`Te hace falta un número`);
} else if (!hasUppercase) {
  console.log(`Te hace falta una mayúscula`);
} else if (!matchesConfirmation) {
  console.log(`La confirmación no coincide`);
}
