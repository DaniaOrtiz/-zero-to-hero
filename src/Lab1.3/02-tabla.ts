//La salida debe contener exactamente diez productos, desde 1 hasta 10.

const base = 7;

for (let num = 1; num <= 10; num ++) {
  const product = base * num;
  console.log(`${base} × ${num} = ${product}`);
}

