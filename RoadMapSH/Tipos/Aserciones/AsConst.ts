//- Declara una variable como constante con as const para que no se pueda modificar su valor.
//- Las variables declaradas con 'as const' son solo de lectura, readonly
let color = ["red", "green", "blue"] as const;

//. color = #FF0000; <-- Da fallo, solo tiene permisos de lectura.
