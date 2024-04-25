// - Se usan los operadores ===, !==, ==, != para comparar valores.

function igualdad(x: number | string, y: boolean | string) {
  if (x === y) {
    //. Aquí TypeScript asume que 'x' e 'y' son tipo 'string'.
    //. Lo asume porque 'string' es el único tipo en común.
  } else {
    console.log(x);
    console.log(y);
  }
}
