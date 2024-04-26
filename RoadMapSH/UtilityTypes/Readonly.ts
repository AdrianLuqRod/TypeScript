// - Asigna las propiedades a 'solo lectura' de manera que no se pueda modificar su valor.

interface IPelicula {
  titulo: string;
  duracion: number;
  genero: string;
  descripcion: string;
}

type IPeliculaSoloLectura = Readonly<IPelicula>;

const peliculaSoloLectura: IPeliculaSoloLectura = {
  titulo: "Ready Player One",
  duracion: 140,
  genero: "Ciencia Ficción",
  descripcion:
    "Un joven llamado Wade Watts se encuentra en un mundo virtual llamado OASIS.",
};

//. peliculaSoloLectura.titulo = "No lo puedo cambiar" <-- Error, solo es de lectura.
