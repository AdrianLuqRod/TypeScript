// - Se usan para especificar restricciones en los tipos genéricos.

interface Longitud {
  length: number;
}

function restriccionGenericoEjemplo<T extends Longitud>(arg: T): T {
  console.log(arg.length);
  return arg;
}

restriccionGenericoEjemplo("Hola mundo");
restriccionGenericoEjemplo({ length: 10, value: 3 });
