// - Los genéricos también pueden ser usados en clases, interfaces y objetos.

class numeroGenerico<T> {
  zeroValue: T;
  suma: (x: T, y: T) => T;
}

let miNumeroGenerico = new numeroGenerico<number>();
miNumeroGenerico.zeroValue = 0;
miNumeroGenerico.suma = function (x, y) {
  return x + y;
};
miNumeroGenerico.suma(3, 4);

let miStringGenerico = new numeroGenerico<string>();
miStringGenerico.zeroValue = "El valor es cero";
miStringGenerico.suma = function (x, y) {
  return x + y;
};
miStringGenerico.suma("Hola ", "Mundo");
