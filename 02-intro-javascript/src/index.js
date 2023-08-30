console.log("hola mundo");

const nombre = "fernando";
const apellido = "herrera";

let valorDado = 5;
valorDado = 4;

console.log (nombre, apellido, valorDado)


if (true){
    let valorDado = 6;
    console.log (valorDado)
}
console.log (valorDado)



function getSaludo (){
    return "hola mundo";
}

console.log (`"este es un texto: ${getSaludo()}"`);

const persona = { 
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
};

console.table(persona);