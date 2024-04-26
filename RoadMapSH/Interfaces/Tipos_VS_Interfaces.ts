/*
 - En TypeScript, los tipos y las interfaces sirven para definir
 - la estructura de objetos y reforzar los tipos de datos.
*/

type Persona = {
  nombre: string;
  edad: number;
};

interface IPersona {
  nombre: string;
  edad: number;
}

let p1: Persona = {
  nombre: "Maria del Mar",
  edad: 20,
};

let p2: IPersona = {
  nombre: "Adrian",
  edad: 22,
};

//. Si hay dudas --> https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
