// - Las 'intersections' sirven para crear un nuevo tipo que es la combinación de dos tipos ya existentes.

interface Motor {
  piezas: string;
}

interface chasisMoto {
  ruedas: number;
  cadena: string;
}

interface chasisCoche {
  ruedas: number;
  puertas: number;
}

type coche = Motor & chasisCoche;
type motocicleta = Motor & chasisMoto;
