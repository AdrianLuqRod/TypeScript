// - La elección de la función a ejecutar se basa en el número de argumentos, tipos y orden de los mismos.

function suma(a: number, b: number): number;
function suma(a: string, b: string): string;

function suma(a: any, b: any): any {
  return a + b;
}

console.log(suma(1, 2)); // 3
console.log(suma("a", "b")); // ab
