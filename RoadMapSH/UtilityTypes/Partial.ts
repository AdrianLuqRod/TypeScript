// - Permite que todas las propiedades de 'algo' sean opcionales.

interface User {
  nombre: string;
  apellido: string;
  edad: number;
}

function crearUsuario(user: Partial<User>) {
  return user;
}

const usuarioPartial = crearUsuario({
  nombre: "Maria del Mar",
  apellido: "Sierra",
});

console.log(usuarioPartial);
