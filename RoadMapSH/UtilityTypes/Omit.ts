// - 'Omit' crea un tipo a partir de 'algo' con todas sus propiedades menos las seleccionadas.

interface IPelicula {
  titulo: string;
  duracion: number;
  genero: string;
  descripcion: string;
}

type CasiTodasDeIPelicula = Omit<IPelicula, "descripcion" | "genero">;

const peliculaOmit: CasiTodasDeIPelicula = {
  titulo: "Ready Player One",
  duracion: 140,
};
