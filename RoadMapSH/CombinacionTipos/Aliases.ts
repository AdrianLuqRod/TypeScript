// - Permite definir alias para los tipos de datos

type nombre = string;
type edad = number;
type id = string | number; //. <-- También puede ser unión de tipos.
type User = { nombre: nombre; edad: edad; id: id };

let UsuarioAliases: User = { nombre: "Maria del Mar", edad: 20, id: 321 };
