function* iterable() {
    yield "hola";
    console.log("hola consola");
    yield "hola 2";
    console.log("Hola 2 después del hola yield");
    yield "hola 3";
    yield "hola 4";
}
let iterador = iterable();
for (let y of iterador) {
    console.log(y);
}
//podemos pasar los valores retornados con yield a un array y trabajarlos después
const arr = [...iterable()];
console.log(arr);

//ejercicio de recepción de información asincrona con yield
function cuadrado(valor) {
    setTimeout(() => {
        console.log({ valor, resultado: Math.pow(valor, 2) });
    }, Math.random() * 1000);
}

function* generator() {
    console.log("inicia generator");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    console.log("termina generator");
}

let gen = generator();

for (let y of gen){
  console.log(y)
}
