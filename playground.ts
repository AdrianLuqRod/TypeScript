//- Inferencia

const a = 1;
const b = 2;
const c = a + b; //. --> C también es de tipo 'number'

console.log(c);

let cadenaDeTexto = "hola";
cadenaDeTexto.toLowerCase();

//! cadenaDeTexto = 2;  --> Error
//! cadenaDeTexto.PropiedadQueNoExiste();  --> Error

//- Funciones
function saludar(name: string) {
  console.log(`Hola ${name}`);
}
saludar("Mundo");
//!saludar(2);  --> Error

//Como tipar correctamente parametros funciones con TypeScript

//- Funciones
function saludar2({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name}`);
}

saludar2({ name: "Mundo", age: 22 });

function saludar3({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name}`);
  return age; 
}

//- Tipar funciones en TypeScript

const sayHiFromFunction = (fn: (name: string) => void) => {
  fn("Mundo");
};

sayHiFromFunction((name: string) => {
  console.log(`Hola ${name}`);
});

//- Tipar las arrow functions
const sumar = (a: number, b: number): number => {
  return a + b;
};

const restar: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

//. never --> Se usa para funciones que nunca devuelven nada porque nunca termina de ejecutarse
function throwError(message: string): never {
  throw new Error(message);
}

// type Alias

type Hero = {
  name: String;
  age: number;
};

let hero: Hero = { 
  name: "Batman",
  age: 33,
};

function createHero(name: string, age: number): Hero {
  return {
    name,
    age,
  };
}

const thor = createHero("Thor", 22);

function createHero2(hero: Hero): Hero2 {
  const { name, age } = hero; 
  return {
    name,
    age, // 
  };
}

const thor2 = createHero2({ name: "Thor2", age: 23 });

// Optional Properties 

type Hero2 = {
  readonly id?: number; //. --> El '?' indica que es opcional
  name: String;
  age: number;
  isActive?: boolean; //. --> El '?' indica que es opcional
};

thor2.id?.toString(); //. --> Si id es undefined, no se ejecuta el método

//. thor2.id = 5743895  --> Error porque es de solo lectura

thor2.id ?? 43; //. --> Si id es undefined, se asigna 43 || Valor por defecto ||

// Template union types

type HexadecimalColor = `#${string}`;

const color: HexadecimalColor = "#4837ff";

//  Union Types

type HeroPowerScale = "local" | "planetario" | "universal";

type Hero3 = {
  name: string;
  age: number;
  power?: HeroPowerScale;
};

function createHero3(hero: Hero3): Hero3 {
  const { name, age, power } = hero;
  return {
    name,
    age,
    power,
  };
}

const thor3 = createHero3({ name: "Thor3", age: 24 });

thor3.power = "planetario";

let enableAnimationDuration: boolean | number;
enableAnimationDuration = 200; // Se asigna un valor
enableAnimationDuration = true; // Se asigna un valor x por defecto

// Intersection Types

type HeroBasicInfo = {
  name: string;
  age: number;
};

type HeroProperties = {
  readonly id?: number;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

type HeroDefinitivo = HeroBasicInfo & HeroProperties;

// Type from value

const address = {
  planet: "Earth",
  city: "Madrid",
};

type Address = typeof address;

const addresTwitch: Address = {
  planet: "Mars",
  city: "Twitch",
};

// Type from function return

function createAddress() {
  return {
    planet: "Tierra",
    city: "Barcelona",
  };
}

type Address2 = ReturnType<typeof createAddress>;

// Arrays

const languages = []; // --> Detecta que siempre este vacio, tipo never

// languages.push("JavaScript"); --> Da error porque automáticamente se tipa como never

const languages2: string[] = [];
languages2.push("JavaScript");
languages2.push("JavaScript"); 
languages2.push("JavaScript");  
languages2.push("JavaScript");

// Arrays con tipos mixtos
const numerosLenguas: (string | number)[] = [];
numerosLenguas.push("JavaScript");
numerosLenguas.push(2);

/*
    [
        ["X", "O", "X"], // string[]
        ["O", "X", "O"], // string[]
        ["X", "", "X"] // string[]
    ]
*/

type CellValue = "X" | "O" | "";

type GameBoard = [
  [CellValue, CellValue, CellValue], //
  [CellValue, CellValue, CellValue], // ==> Esto es una tupla
  [CellValue, CellValue, CellValue] //
];

const gameBoard: GameBoard = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "", "X"],
];
//? DEFINICION TUPLA: Es un array que tiene un límite fijado de longitud.

type RGB = [number, number, number];

// Enums

enum ERROR_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  INTERNAL_SERVER_ERROR, 
}

function mostrarMensaje(tipoDeError: ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se ha encontrado el recurso");
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log("No tienes permisos para acceder");
  } else if (tipoDeError === ERROR_TYPES.INTERNAL_SERVER_ERROR) {
    console.log("Error interno del servidor");
  }
}

// Aserciones de tipos

const canvas = document.querySelector("canvas") as HTMLCanvasElement;

//. Inferencia --> TypeScript se da cuenta que dentro del if
//. el canvas solo va a poder ser un HTMLCanvasElement
if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
}

// Fetching de datos
