// type alias vs interface ... ..

type id = number;
const idMaker: id = 234124;

//! interface id = number

type role = "admin" | "hasib";

//! interface role = "admin" | "hasib"

interface user {
  id: number;
  name: string;
  role: "admin" | "customer";
  dream: {
    car: string;
    games: string;
  };
}

const User: user = {
  id: 34234,
  name: "sariyun",
  role: "customer",
  dream: {
    car: "audi",
    games: "Gta V",
  },
};
console.log(User);

// todo:interface

interface animal {
  species: string;
}
interface cat extends animal {
  breed: string;
}

const Cat: cat = {
  breed: "osthir persian",
  species: "felix catos",
};
console.log(Cat.species);
