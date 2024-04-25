// - Los tipos predicados son funciones que devuelven un booleano.
// - Se usan para comprobar si una variable se ajusta a un tipo específico.

function isString(valor: unknown): valor is string {
  return typeof valor === "string";
}

function ejemploPredicado(x: unknown) {
  if (isString(x)) {
    //. Podemos usar 'x' como si fuera un string porque el predicado nos asegura que es un string.
    x.toLowerCase();
    console.log(x.length);
  }
}
