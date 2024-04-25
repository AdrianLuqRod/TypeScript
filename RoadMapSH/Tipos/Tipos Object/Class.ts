// - En TypeScript, las clases son un plano para poder crear objetos con determinadas propiedades y métodos.

class Mono {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  comerBanana() {
    return "Me estoy comiendo un plátano, !que rico!";
  }
}

let m = new Mono("Chita", 5);
console.log(m.comerBanana());
