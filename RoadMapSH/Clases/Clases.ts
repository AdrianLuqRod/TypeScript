// - Las clases en TypeScript son un plano para crear objetos.

class Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  hacerSonido(): void {
    console.log(`${this.nombre} está haciendo un sonido.`);
  }
}

let animalEjemplo = new Animal("Gato");
animalEjemplo.hacerSonido();
