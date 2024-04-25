// - El tipo 'never' representa el tipo de valores que nunca ocurren.

function error(mensaje: string): never {
  throw new Error(mensaje);
}

function falla() {
  //. <-- Se infiere el tipo 'never' en la función.
  return error("Reportando un error");
}

//. Funciones que no tienen un punto final devuelven el tipo 'never'.
function loopInfinito(): never {
  while (true) {}
}
