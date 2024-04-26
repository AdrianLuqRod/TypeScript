// - 'NonNullable<Type>' excluye 'null' y 'undefined' de 'Type'.

type tipo0 = NonNullable<"tipo1" | "undefined" | "tipo3" | "null">; //. <-- "tipo1" | "tipo3"
type tipo1 = NonNullable<string | number | undefined | null>; //. <-- string | number
type tipo2 = NonNullable<string | number | undefined | null | (() => void)>; //. <-- string | number | () => void
