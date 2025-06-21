//RESUELVE LOS EJERCICIOS AQUÍ
//ejercicio 1

const empleados = [
   { name: "Luis", email: "Luis@gmail.com" },
   { name: "Ana", email: "Ana@gmail.com" },
   { name: "Andrea", email: "Andrea@gmail.com" },
];

//const {name, email} = empleados;

const ana = empleados[1];

console.log(ana);

//ejercicio 2

const Luis = empleados[0];

const { name, email } = Luis;

const emailLuis = email;

console.log(emailLuis);

//ejercicio 3

// Inicialmente
let a = 5;
let b = 3;

[a = 5, b = 3,] = [3, 5];

//ejercicio 4

const HIGH_TEMPERATURES = {
   yesterday: 30,
   today: 35,
   tomorrow: 32,
};

const { yesterday, today, tomorrow } = HIGH_TEMPERATURES;
const maximaHoy = today;
const maximaManana = tomorrow;

//ejercicio 5

function sumEveryOther(...rest) {
   let total = 0;
   for (let i = 0; i < rest.length; i++) {
      total += rest[i];
   }
   return total;
};

console.log(sumEveryOther(6, 8, 2, 3, 1));

//ejercicio 6

function addOnlyNums(...rest) {
   let total = 0;
   for (let i = 0; i < rest.length; i++) {

      if (typeof rest[i] === 'number') {
         total += rest[i];
      }


   }
   return total;
};
console.log(addOnlyNums(1, "perro", 2, 4));
 
//ejercicio 7



