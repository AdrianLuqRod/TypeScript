type Colors = "red" | "green" | "blue";
type RBG = [red: number, green: number, blue: number];

const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RBG>;
// - El operador satisfies nos permite validar el tipo de una expresión sin cambiar el tipo de ésta misma.

//.  Si no lo hubiesemos validado, estos métodos no serían accesibles.
let redComponent = palette.red[0];
let greenNormalized = palette.green.toUpperCase();
