// variables y constantes

const nombre = 'fernando';
const apellido = 'herrera';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
  return "hola"+ " " + nombre;
}

console.log (`Este es un saludo : ${getSaludo(nombre)}`)