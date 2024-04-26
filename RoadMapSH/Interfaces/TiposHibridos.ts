// - Los tipos híbridos son aquellos que pueden ser de varios tipos a la vez en uno solo.
// - A su vez, se pueden combinar con interfaces y tipos primitivos.

type Education = {
  degree: string;
  school: string;
  year: number;
};

type User = {
  name: string;
  age: number;
  email: string;
  education: Education;
};

let user: User = {
  name: "Paco",
  age: 22,
  email: "olakase",
  education: {
    degree: "Ingenieria",
    school: "UPM",
    year: 2020,
  },
};
