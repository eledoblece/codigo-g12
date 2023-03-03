const nombre = "Luis";
const direccion = "Av. siempre 123";
const pasatiempos = "Futbol, videojuegos, caminar";

// los console no deben ir a produccion
console.log(nombre);
console.error(direccion);
console.warn(pasatiempos);

let curso = "Front-End developer";

console.log(curso);

// Guardar mnas de una valor en una variable
// array - arreglo

// camelcase

/**
 *  cada elemento de un array tiene indices
 *  esos indices inician con el numero 0
 *  si queremos obtener el primer valor de
 *  un arrary tenemos que usar el indice 0
 */

const cursosDeProgramacion = ["js", "css", "html", "react"];

console.log(cursosDeProgramacion);
console.log("indice 0", cursosDeProgramacion[0]);
console.log("indice 1", cursosDeProgramacion[1]);
console.log("indice 2", cursosDeProgramacion[2]);
console.log("indice 3", cursosDeProgramacion[3]);

const datosVariados = ["mouse", true, 100, null, -10, "hola"];

/**
 *  JS tiene funciones ya creadas para poder alterar los
 *  valores de un arreglo
 */

// Para aumentar un valor a un array usamos
// la funcion push
datosVariados.push("otro dato");

console.log("----------------");
console.log(datosVariados);

datosVariados.pop();
// pop borrar ultimo elemento del array


datosVariados[1] = false;
datosVariados.unshift("soy primero");
// unshift agregamos elemento a la primera posicion del array (0)

datosVariados.shift();
// shift borra el elemento de la primera posicion del array (0)

console.log("----------------");
console.log(datosVariados);

console.log("----------------");
console.log(datosVariados.at(4));