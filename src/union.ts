type status = "pending";
const status: status = "pending";
console.log(status);
type identity = string | number;
const identity: identity = "sariyun";
console.log(identity);

type check = "sariyun" | "hasib";
const lover: check = "hasib";
console.log(lover);

// type literal

// type user = "hasib" | "Sariyun" | number;
// now adding union

// object union

type admin = { id: number; role: "admin"; privileges: string[] };
type customer = { id: number; role: "Customer"; plans: string[] };

type user = admin | customer;

const User: user = {
  id: 432,
  role: "Customer",
  plans: ["Hasib", "loves", "sariyun"],
};

console.log(User);
