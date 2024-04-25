// - El operador 'typeOf' se usa para comprobar el tipo de una variable.
// - Devuelve una cadena que contiene el tipo de la variable.

let pruebaTyeOf: number | string = "Hola Mundo";

if (typeof pruebaTyeOf === "string") {
  console.log("La variable es de tipo 'string'");
} else {
  console.log("La variable es de tipo 'number'");
}
