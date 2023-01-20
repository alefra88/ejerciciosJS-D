console.log(this);
this.lugar = "contexto global";

function saludar(saludo, aQuien) {
    console.log(` ${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar();
const obj = {
    lugar: "Contexto del objeto",
};
//se utilizan parecido pero .apply devuelve en forma de array
saludar.call(obj, "Hola", "Alan");
saludar.apply(obj, ["Adios", "Alan"]);

/* '.apply' y '.call' son dos métodos que se utilizan en JavaScript para cambiar el contexto de una función.

La principal diferencia entre '.apply' y '.call' es cómo pasan los argumentos a la función. .apply toma dos argumentos: el primer argumento es el contexto (o el objeto al que se desea cambiar el contexto) y el segundo argumento es un arreglo de argumentos para pasar a la función. .call, por otro lado, toma un argumento de contexto y luego una lista separada por comas de argumentos para pasar a la función. */

const persona = {
    nombre: "Alan",
    saludar: function () {
        console.log(`hola ${this.nombre}`);
    },
};
persona.saludar()


const otraPersona = {
    saludar:persona.saludar.bind(saludar)//a '.bind' le damos el contexto al cual es ligado
}

otraPersona.saludar()

/*.bind() es un método en JavaScript que se utiliza para cambiar el contexto (o el "this" dentro) de una función. Es similar al uso de .call() y .apply(), pero tiene un comportamiento ligeramente diferente.

Cuando se utiliza .bind(), se crea una nueva función con el mismo código que la función original, pero con el contexto especificado. Este nuevo objeto de función puede ser asignado a una variable y ejecutado más tarde.
Además de cambiar el contexto, .bind() también permite pasar argumentos a la función cuando se crea. Estos argumentos se fijan y se pasan a la función cada vez que se llama a la función enlazada.
En resumen, .bind() es una forma de crear una nueva función con un contexto específico y argumentos fijos, permitiendo una mayor flexibilidad al momento de usar las funciones y manejar los contextos.*/