// - Any es un tipo especial en TypeScript que se asigna cuando no quieres que algo de problemas de tipo.

let pruebaAny: any = { x: 0 };

pruebaAny.foo();
pruebaAny();
pruebaAny.bar = 100;
pruebaAny = "hola";
const numero: number = pruebaAny;
