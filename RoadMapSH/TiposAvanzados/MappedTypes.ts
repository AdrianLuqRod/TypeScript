// - Los tipos mapeados son una forma de transformar un tipo en otro.

type Readonlyy<T> = {
  readonly [P in keyof T]: T[P];
};

let obj = { x: 10, y: 10 };
let readonlyObj: Readonlyy<typeof obj> = obj;

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

type OptionsFlags<T> = {
  [P in keyof T]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeaturesOptions = OptionsFlags<Features>;
