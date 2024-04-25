// - Podemos usar cualquier expresión en un condicional.
// - Por ejemplo, la sentencia 'if' no siempre necesita una expresión booleana.

let numeroTruthiness: number = 1;

if (numeroTruthiness) {
  console.log(numeroTruthiness);
}

// - Construcciones como 'if', en JavaScript, fuerzan su condición a ser un booleano.
// - Los valores que pueden devolver un 'false' serían los siguientes:
/* 
. 0
. 0n <--(Version de 0 en BigInt)
. NaN
. null
. undefined
. "" <-- (String vacío)
*/
