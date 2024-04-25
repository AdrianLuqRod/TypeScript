// - El operador 'keyof' nos permite acceder a las claves de un tipo de dato.

interface UserKeyof {
  nombre: string;
  edad: number;
  localidad: string;
}

type UserKeys = keyof UserKeyof;
const key: UserKeys = "edad";
