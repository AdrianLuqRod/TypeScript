// - TypeScript permite tipar objetos como interfaces que pueden ser reusadas por otros objetos.
function saludar(p) {
    return "Hola " + p.nombre;
}
var p = { nombre: "Juan", edad: 30, altura: 1.8 };
console.log(saludar(p));
var p2 = {
    nombre: "Mario",
    edad: 23,
    altura: 1.7,
    peso: 75,
    andar: function () {
        console.log("Estoy andando...");
        return "hola";
    },
};
console.log(p2.andar());
