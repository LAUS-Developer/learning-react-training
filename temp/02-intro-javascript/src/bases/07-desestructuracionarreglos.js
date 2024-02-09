const personajes = ["Goku", "Vegeta", "Trunks"];
const [ , , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);



//1. El primer valor del arr se llamará nombre
//2. el segundo valor se llamara setNombre
const elState = ( valor ) => {
  return [valor,()=>{console.log("hola mundo")}];
}

const [nombre,setNombre] = elState ("Goku");

console.log(nombre);

setNombre();