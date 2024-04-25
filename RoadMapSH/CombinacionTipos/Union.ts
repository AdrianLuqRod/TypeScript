// - El operador '|' se usa para combinar dos o más tipos en uno solo que puede ser cualquiera de esos tipos.

let ejemploUnion: string | number = "Puedo ser un número o un string";
ejemploUnion = 1;

//. ejemploUnion = true; <-- Error: El tipo 'boolean' no es asignable al tipo 'string | number'.
