// - Se utilizan para crear tipos que sean uniones de strings.

type Nombre = `Sr ${string}`;

//let nombre1: Nombre = "Pablo"; //. <-- Da error
let nombre2: Nombre = "Sr Pablo"; //. <-- Correcto
