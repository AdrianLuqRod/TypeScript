// - 'unknown' es la contra parte de 'any' en TypeScript, ya que es un tipo seguro.
// - 'unknown' es un tipo seguro, ya que no puedes hacer nada con él sin primero hacer una verificación de tipo.

function f1(a: any) {
  a.b(); //. <-- No hay error.
}

function f2(a: unknown) {
  //.  a.b();  <-- Da error. El objeto es de tipo 'unknown'.
}
