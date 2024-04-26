// - Los parametros en los constructores pueden ser declarados con modificadores de acceso.

class Ejemplo {
  constructor(private nombre: string, protected edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
