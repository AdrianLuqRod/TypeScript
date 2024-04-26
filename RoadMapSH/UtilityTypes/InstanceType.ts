// - InstanceType<arg> construye el tipo de instancia de una clase o constructor.

class pruebaInstancia {
  nombre: string;
  edad: number;
}

type it0 = InstanceType<typeof pruebaInstancia>; //. <-- pruebaInstancia
