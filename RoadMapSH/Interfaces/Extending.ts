// - Las interfaces extienden de si mismas al declararas de nuevo si tienen el mismo nombre.
// - Si tiene otro nombre, se considera una nueva interfaz y por tanto se extiende usando la palabra clave "extends".

interface Figura {
  color: string;
  area(): number;
}

interface Cuadrado extends Figura {
  lado: number;
}

interface Rectangulo extends Figura {
  base: number;
}

interface Rectangulo {
  altura: number;
}

let c1: Cuadrado = {
  color: "Rojo",
  lado: 5,
  area() {
    return this.lado * this.lado;
  },
};

let r1: Rectangulo = {
  color: "Verde",
  base: 10,
  altura: 5,
  area() {
    return this.base * this.altura;
  },
};
