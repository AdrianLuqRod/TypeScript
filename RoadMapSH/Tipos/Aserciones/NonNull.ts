// - Con el operador '!' le decimos al compilador que el valor nunca será nulo.
let nuncaNull: string = "Nunca voy a tener un valor nulo";
let longitudNuncaNull: number = nuncaNull!.length;
console.log(longitudNuncaNull);
/*
. No obstante hay que tener cuidado con este tipo de aserciones ya que puede originar problemas 
. si al final el valor es nulo.
*/
