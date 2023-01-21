const json = {
    nombre: "Alan",
    edad: 35,
    booleano: true,
    pasatiempos: ["programar", "hacerce pendejo", "programar"],
    cosasPorHacer: {
        getAWork: undefined,
        getAwife: null,
        getAlife: "never",
    },
    SocialLife: null,
};

//con JSON.parse podemos devolver un objeto json a una dato valido para javascript
// console.log(JSON.parse("null"))
// console.log(JSON.parse("false"))
// console.log(JSON.parse("[]"))

//Creando dos funciones para jsonizar
const jsonizar = (dato) => JSON.stringify(dato);
const objInput = (obj) => (let = jsonizar(obj));

const desJasonizar = (dato) => JSON.parse(dato);
const objInput2 = (obj) => (let = desJasonizar(obj));

let json2 = objInput(json)

console.log(json2)

let json3 = objInput2(json2)
console.log(json3)
