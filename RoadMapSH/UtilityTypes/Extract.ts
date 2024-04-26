// - Extract<Type,Union> es lo opuesto a Exclude<Type,Union>. Elimina de Type aquellos tipos que no están en Union.

type T0 = Extract<"a" | "b" | "c" | "d", "fds" | "noExisto" | "a" | "d">; //. <-- "a" | "d"
type T1 = Extract<string | number | (() => void), Function>; //. <-- () => void
type T2 = Extract<string | number | (() => void), Function | string>; //. <-- string | (() => void)
