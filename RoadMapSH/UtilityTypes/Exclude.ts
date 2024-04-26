/*
 - 'Exclude<UnionType, ExcludedMembers>' construye un tipo excluyendo de 'UnionType'
 - los miembros que coincidan con 'ExcludedMembers'.
*/

type T0 = Exclude<"a" | "b" | "c" | "d", "c" | "a">; //. <-- "b" | "d"
type T1 = Exclude<string | number | (() => void), Function>; //. <-- string | number
type T2 = Exclude<string | number | (() => void), string>; //. <-- number | ()=>void
