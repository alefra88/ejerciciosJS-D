const numero = [1, 2, 3];
let uno = numero[0],
    dos = numero[1],
    tres = numero[2];

console.log(uno, dos, tres);

// CON DESTRUCTURACION
const [one, two, three] = numero;
console.log(one, two, three);

let persona = {
    nombre: "Elias",
    apellido: "Figueroa",
    edad: 19,
};

let { nombre, apellido, edad } = persona;

console.log(nombre, apellido, edad);
