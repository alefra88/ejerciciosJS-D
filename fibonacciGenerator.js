// la funcion tiene dos variables cero valor actual y 1 valor siguiente, usamos un bucle while para traer el valor actual, desestructuramos las variables para traer los valores cambiados sumando el valor del siguiente num
// function* fibonacci() {
//     let current = 0;
//     let next = 1;
//     while (true) {
//         yield current;
//         [current, next] = [next, current + next];
//     }
// }
// const fib = fibonacci();
// console.log(fib.next().value); // 0
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
const fibonacciE = function* () {
    let current = 0,
        next = 1;
    while (true) {
        yield current;
        /*Estamos utilizando la técnica de desestructuración de arrays. Básicamente, estamos asignando los valores de un array a variables individuales en una sola línea.

La expresión a la derecha del signo igual es un array con dos elementos: el primer elemento es el valor actual de la variable b, y el segundo elemento es la suma de las variables a y b.

La expresión a la izquierda del signo igual es otro array con dos variables: a y b.

La desestructuración asigna los valores del array derecho a las variables en el array izquierdo, en el mismo orden. Entonces, el valor actual de b se asigna a a, y la suma de a y b se asigna a b.

En resumen, en cada iteración del bucle, estamos actualizando el valor de las variables a y b para que en la siguiente iteración se pueda calcular el siguiente número de la secuencia de fibonacci. */
        [current, next] = [next, current + next];
    }
};
//dado que es una funcion infinita debemos delimitar los numeros a traer
const fibE = fibonacciE();
for (let i = 0; i < 10; i++) {
    console.log(fibE.next().value);
}
