let algo: any = "Hola"; //- <-- Algo tiene tipo any, por lo que el compilador no sabe que tipo va a ser la variable.
let strLength: number = (algo as string).length;
//-  Con 'as string' le decimos al compilador que la variable algo es de tipo string.
//- Pero la variable algo sigue siendo de tipo any, por lo que no se puede acceder a sus propiedades.
//- 'as string' es una aserción de tipo, no cambia el tipo de la variable.

console.log(strLength);
