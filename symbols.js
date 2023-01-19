let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id, id2);

const NAME = Symbol();
const SALUDAR = Symbol();
const persona = {
    [NAME]: "Alan",
};

console.log(persona);
persona.NAME = "Perrito Panzòn";
console.log(persona);
persona[SALUDAR] = function () {
    console.log("hola");
};
persona[SALUDAR]();

//LOS SIMBOLOS DENTRO DE UN OBJETO SE COMPORTAN COMO PROPIEDADES PRIVADAS

console.log(Object.getOwnPropertySymbols(persona));
