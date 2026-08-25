const age = 44;
const hasPermission = true;
const isAdult =  age >= 18;
const canEnter = isAdult && hasPermission;

console.log(`La persona de edad ${age}`)

if (canEnter){
    console.log(`Puede entrar`);
} else{
    console.log(`No puede entrar`);
}


/*
const age = 17;
const hasPermission = true;
const isAdult =  age >= 18;
const canEnter = isAdult && hasPermission;
console.log(`Puede entrar: ${canEnter}`);*/