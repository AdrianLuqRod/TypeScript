// - Any es un tipo especial de TypeScript que puede ser asignado a cualquier tipo de variable.
// - Se puede usar para evitar errores de tipo en tiempo de compilación.
// -  Pero se intenta no usarlo, ya que se pierden las ventajas de TypeScript.
// ! (DA INSEGURIDAD).
let x: any;
x = "Hola";
x = 2;
x = true;
let y: string = x as string;
