// - 'Parameters<(arg: any) => any>' construye una tupla de los tipos de datos asignados a la función.

type pt0 = Parameters<(arg: number) => number>; //. <-- [number]
type pt1 = Parameters<(arg: () => string) => string>; //. <-- [() => string]
type pt2 = Parameters<(arg1: string, arg2: number) => string>; //. <-- [string, number]
