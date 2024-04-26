// - 'Record<Keys,Type>' crea un tipo objeto en el que sus propiedades 'key' son 'keys' y sus valores son 'Type'.

interface IPeliculaRecord {
  genero: string;
  duracion: number;
}

type nombrePeliculas =
  | "Ready Player One"
  | "El Padrino"
  | "El Señor de los Anillos";

const peliculas: Record<nombrePeliculas, IPeliculaRecord> = {
  "Ready Player One": {
    genero: "Ciencia Ficción",
    duracion: 140,
  },

  "El Padrino": {
    genero: "Drama",
    duracion: 175,
  },

  "El Señor de los Anillos": {
    genero: "Fantasía",
    duracion: 200,
  },
};
