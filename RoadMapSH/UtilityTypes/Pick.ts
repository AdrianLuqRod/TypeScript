// - 'Pick' crea un nuevo tipo seleccionando un conjunto de propiedades de un tipo.

interface IPelicula {
  titulo: string;
  duracion: number;
  descripcion: string;
  genero: string;
}

type AlgunasCosasDeIPelicula = Pick<IPelicula, "titulo" | "duracion">;

const peliculaPick: AlgunasCosasDeIPelicula = {
  titulo: "Ready Player One",
  duracion: 140,
};
