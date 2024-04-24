//- Inferencia

const a = 1;
const b = 2;
const c = a + b; //. <--- C también es de tipo 'number'

console.log(c);

let cadenaDeTexto = "hola";
cadenaDeTexto.toLowerCase();

//! cadenaDeTexto = 2;  <--- Error
//! cadenaDeTexto.PropiedadQueNoExiste();  <--- Error

//- Funciones
function saludar(name: string) {
  console.log(`Hola ${name}`);
}
saludar("Mundo");
//!saludar(2);  <--- Error

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

//. never <--- Se usa para funciones que nunca devuelven nada porque nunca termina de ejecutarse
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
    age,
  };
}

const thor2 = createHero2({ name: "Thor2", age: 23 });

// Optional Properties

type Hero2 = {
  readonly id?: number; //. <--- El '?' indica que es opcional
  name: String;
  age: number;
  isActive?: boolean; //. <--- El '?' indica que es opcional
};

thor2.id?.toString(); //. <--- Si id es undefined, no se ejecuta el método

//. thor2.id = 5743895  <--- Error porque es de solo lectura

thor2.id ?? 43; //. <--- Si id es undefined, se asigna 43 || Valor por defecto ||

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

const languages = []; // <--- Detecta que siempre este vacio, tipo never

// languages.push("JavaScript"); <--- Da error porque automáticamente se tipa como never

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

const API_URL = "https://api.github.com/search/repositories?q=javascript";

const response = await fetch(API_URL);

const data = await response.json();

const repos = data.items.map((repo) => {
  console.log(repo);
});

// Interfaces.

interface Hero4 {
  id: string;
  name: string;
  age: number;
  saludar: () => void;
}

const heroPrueba: Hero4 = {
  id: "321",
  name: "Batman",
  age: 43,
  saludar: () => {
    console.log("olakAse");
  },
};

// Interfaces anidadas

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

interface Zapatilla extends Producto {
  talla: number;
}

interface CarritoCompra {
  totalPrice: number;
  productos: (Producto | Zapatilla)[];
}

const carrito: CarritoCompra = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: "Producto1",
      precio: 20,
      cantidad: 4,
    },
    {
      id: 2,
      nombre: "Producto2",
      precio: 30,
      cantidad: 2,
    },
  ],
};

interface CarritoOps {
  add: (product: Producto) => void;
  remove: (id: number) => void;
}

interface CarritoOps {
  clear: () => void;
}

const ops: CarritoOps = {
  add: (product: Producto) => {},
  remove: (id: number) => {},
  clear: () => {},
};

// Narrowing
function mostrarLongitud(objeto: string | number) {
  if (typeof objeto === "string") {
    return objeto.length;
  }
  return objeto.toString.length;
}

interface Mario {
  company: "Nintendo";
  nombre: string;
  saltar: () => void;
}

interface Sonic {
  company: "Sega";
  nombre: string;
  correr: () => void;
}

type Personaje = Mario | Sonic;

//#region TYPEGUARD
//? Type Guard <-- Hay que evitarlo si es posible.
//. Dejame comprobar si el personaje es Sonic
//. y esta funcion determina si es Sonic o no
function checkIsSonic(p: Personaje): p is Sonic {
  return (p as Sonic).correr !== undefined;
}

function jugar(p: Personaje) {
  if (checkIsSonic(p)) {
    p.correr();
    return;
  }
  p.saltar();
}

// Class
class Avenger {
  readonly name: string;
  private powerScore: number;
  wonBattle: number = 0;

  constructor(name: string, powerScore: number) {
    this.name = name;
    this.powerScore = powerScore;
  }

  get fullName() {
    return `${this.name}, ${this.powerScore}`;
  }

  set power(newPower: number) {
    if (newPower <= 100) {
      this.powerScore = newPower;
    } else {
      throw new Error("No puedes tener mas de 100 de poder");
    }
  }
}

const avengers = new Avenger("Spidey", 80);

// avengers.name = "Hulk"; <-- Sin sentido.
