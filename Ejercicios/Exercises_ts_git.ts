// src --> typescript-exercises.github.io/#exercise=1&file=%2Findex.ts

// interface User {
//   name: string;
//   age: number;
//   occupation: string;
// }

// interface Admin {
//   name: string;
//   age: number;
//   role: string;
// }

// type Person = User | Admin;

// const personas: Person[] = [
//   {
//     name: "Mar",
//     age: 20,
//     occupation: "Modelo",
//   },
//   {
//     name: "Adri",
//     age: 22,
//     occupation: "Estudiante",
//   },
//   {
//     name: "Gonzalo",
//     age: 25,
//     role: "Administrador",
//   },
// ];

// function mostrarUsers(p: Person) {
//   let infoAdicional = "";
//   if ((p as Admin).role !== undefined) {
//     infoAdicional = `${(p as Admin).role}`;
//   } else {
//     infoAdicional = `${(p as User).occupation}`;
//   }
//   console.log(`${p.name} , ${p.age}, ${infoAdicional}`);
// }

// function filtraUsuarios(personas: Person[], filtro: Partial<User>) {
//   return personas
//     .filter((p) => (p as User).occupation !== undefined)
//     .filter((p) => {
//       const criteriaKeys = Object.keys(filtro) as (keyof User)[];
//       return criteriaKeys.every((fieldName) => {
//         return p[fieldName] === filtro[fieldName];
//       });
//     });
// }

// function swap<T1, T2>(v1: T1, v2: T2): [T2, T1] {
//   return [v2, v1];
// }

// console.log("Usuarios:");
// personas
//   .filter((p) => (p as User).occupation !== undefined)
// .forEach(mostrarUsers);

// console.log("Administradores:");
// personas.filter((p) => (p as Admin).role !== undefined).forEach(mostrarUsers);

// console.log("Usuarios filtrados: ");
// console.log(filtraUsuarios(personas, { age: 22 }));

type Matricula = `${number}-${string}`;
class coche {
  nombre: string;
  marca: string;
  matricula: Matricula;
  constructor(nombre: string, marca: string, matricula: Matricula) {
    this.nombre = nombre;
    this.marca = marca;
    this.matricula = matricula;
  }
  conducir() {
    console.log(
      `Conduciendo ${this.nombre} ${this.marca} con matrícula ${this.matricula}`
    );
  }
}

const coche1 = new coche("Ferrari", "LaFerrari", "1234-ABC");
coche1.conducir();
console.log(coche1);
