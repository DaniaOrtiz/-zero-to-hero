const score = 89;
let category = "";
if (score < 0 || score > 100) {
  category = "Valor inválido";
} else if (score >= 90) {
  category = "Excelente";
} else if (score >= 70) {
  category = "Aprobado";
} else {
  category = "Reprobado";
}
console.log(`Calificación: ${score} -> ${category}`);