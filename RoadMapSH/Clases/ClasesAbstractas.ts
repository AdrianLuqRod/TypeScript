/*
 - Las clases abstractas no se pueden instanciar directamente, se deben heredar.
 - Las clases abstractas pueden contener métodos abstractos (métodos sin implementación). <- 'Methods Overriding'
*/

abstract class Figura {
  abstract calculaArea(): number;

  metodoHeredado(): void {
    console.log("Soy un método heredado.");
  }
}

class Cuadrado extends Figura {
  private lado: number;

  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  calculaArea(): number {
    return this.lado * this.lado;
  }
}
