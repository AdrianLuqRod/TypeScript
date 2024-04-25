// - void representa el valor de retorno de funciones que no devuelven ningún valor.
// - Este valor es inferido por funciones que no tienen 'return' o que no devuelven valores explicititos de retorno.

function nada() {
  return;
}

/*
. En JavaScript estas funciones devuelven el tipo de dato 'undefined' pero en TypeScript
. 'undefined' y 'void' no son lo mismo.
*/
