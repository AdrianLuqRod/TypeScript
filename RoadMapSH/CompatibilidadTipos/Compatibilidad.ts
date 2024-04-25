// - TypeScript utiliza tipado estructural para determinar la compatibilidad de tipos.
// - Es decir, que si dos valores son compatibles si tienen la misma estructura, independientemente de sus nombres.

interface Point {
  x: number;
  y: number;
}

let p1: Point = { x: 10, y: 20 };
let p2: { x: number; y: number } = p1;
console.log(p2.x, p2.y);
