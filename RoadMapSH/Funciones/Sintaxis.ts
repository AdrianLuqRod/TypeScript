// - Existen varias formas de declarar funciones en TypeScript.

function suma1(a: number, b: number): number {
  return a + b;
}

const suma2 = (a: number, b: number): number => {
  return a + b;
};

let suma3: (a: number, b: number) => number;

suma3 = (a, b) => {
  return a + b;
};
