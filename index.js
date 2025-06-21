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

function countTheArgs(...rest) {
   for (let i = 0; i < rest.length; i++) {

   }
   return rest.length
}

console.log(countTheArgs("gato", "perro"));

//ejercicio 8
function combineTwoArrays(hola1, hola2) {
   return [...hola1, ...hola2]
}

console.log(combineTwoArrays([1, 2, 6, 9], [1, 6, 8, 9]));

//ejercicio 9
function onlyUniques(...rest) {
   let nuevoRest = [];
   for (let i = 0; i < rest.length; i++) {
      if (nuevoRest.includes(rest[i]) == false) {
         nuevoRest.push(rest[i])
      }
   }
   return nuevoRest
}
console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));

//ejercicio 10

function combineAllArrays(...rest) {
   let total = [];
   for (let i = 0; i < rest.length; i++) {
      total = [...total, ...rest[i]];
   }
   return total;
};
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));

//ejercicio11

function sumAndSquare(...rest) {
   let total = 0;
   for (let i = 0; i < rest.length; i++) {
      total += (rest[i] ** 2);
   }
   return total;
};

console.log(sumAndSquare(3, 6, 7, 8, 2, 7, 3, 1));