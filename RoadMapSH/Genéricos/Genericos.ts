/*
 - Los genéricos permiten crear código que sea reutilizable,
 - es decir, que pueda ser utilizado en diferentes tipos de datos.
*/

function genericoEjemplo<T>(arg: T): T {
  return arg;
}

let miDatoGenerico: string | number = genericoEjemplo("Soy un string");
console.log(miDatoGenerico);

miDatoGenerico = genericoEjemplo(100);
console.log("Soy el numero " + miDatoGenerico);
