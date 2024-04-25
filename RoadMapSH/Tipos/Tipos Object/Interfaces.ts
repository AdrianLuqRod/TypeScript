// - TypeScript permite tipar objetos como interfaces que pueden ser reusadas por otros objetos.

interface Persona {
  nombre: string;
  edad: number;
  altura: number;
}
function saludar(p: Persona) {
  return "Hola " + p.nombre;
}

let p = { nombre: "Juan", edad: 30, altura: 1.8 };
console.log(saludar(p));

// - Las interfaces además, se extienden de ellas mismas para poder agregar más propiedades.

interface Persona {
  peso?: number; //. <-- EL '?' indica que la propiedad es opcional
  andar?: () => void; //. <-- Las interfaces tambien pueden tener métodos.
}

let p2: Persona = {
  nombre: "Mario",
  edad: 23,
  altura: 1.7,
  peso: 75,
  andar: () => {
    console.log("Estoy andando...");
  },
};

if (p2.andar) {
  p2.andar();
}
