/*

Clasifica: <10 fría; 10–24 templada; 25–34 cálida; >=35 muy cálida.


*/


const min: number = -10;
const max: number = 50;
const waterTemp: number = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`La temperatura es de ${waterTemp}`);

if(waterTemp < 0){
    console.log(`Ta helada`); 
}

else if (waterTemp < 10 ){
    console.log(`Ta fria`);

} else if (waterTemp >= 10 && waterTemp <= 24){
  console.log(`Ta templada`);
}

else if (waterTemp >= 25 && waterTemp <= 34){
  console.log(`Ta templada`);
}
 else {
    console.log(`No es posible`);
}