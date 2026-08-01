let matches = 0;
for (let current = 1; current <= 30; current += 1) {
  if (current % 4 === 0) { // tres iguales es que es obligatorio que de 0

    matches += 1;
    console.log("Coincidencias encontradas: " + current);
  }
}

console.log("Total de coincidecias: " + matches);