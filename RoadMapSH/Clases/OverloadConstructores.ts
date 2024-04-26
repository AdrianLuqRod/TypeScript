/*
 - La sobrecarga de constructores es una característica de TypeScript que
 - permite definir múltiples constructores con diferentes parámetros y tipos de retorno.
*/

class Point {
  constructor(x: number, y: number);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    //. Hace algo...
  }
}
