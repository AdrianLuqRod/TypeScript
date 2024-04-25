// - Es un operador que permite verificar si un objeto es una instancia de una clase en particular.

class Pajaro {
  volar() {
    console.log("Puedo volar");
  }
}

let mascota = new Pajaro();

if (mascota instanceof Pajaro) {
  mascota.volar();
} else {
  console.log("Mascota no es un pajaro");
}
