// - 'ReturnType<() => 'unknown')>' construye el tipo de dato que retorna la funcion.

type rt0 = ReturnType<() => string>; //. <-- string
type rt1 = ReturnType<(x: string) => void>; //. <-- void
type rt2 = ReturnType<<T>() => T>; //. <-- unknown
type rt3 = ReturnType<<T extends U, U = number[]>() => T>; //. <-- number[]

declare function f1(): { a: number; b: string };
type rt4 = ReturnType<typeof f1>; //. <-- { a: number, b: string }
