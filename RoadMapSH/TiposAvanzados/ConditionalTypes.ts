// - Se utilizan para asignar tipos basados en una condición.

type extiende<T, U> = T extends U ? T : U;

type A = extiende<string, any>; //. string
type B = extiende<any, string>; //. string
