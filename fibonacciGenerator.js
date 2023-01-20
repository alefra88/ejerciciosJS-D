// la funcion tiene dos variables cero valor actual y 1 valor siguiente, usamos un bucle while para traer el valor actual, desestructuramos las variables para traer los valores cambiados sumando el valor del siguiente num
// function* fibonacci() {
//     let current = 0;
//     let next = 1;
//     while (true) {
//         yield current;
//         [current, next] = [next, current + next];
//     }
// }
const fibonacciE = function* () {
    let current = 0,
        next = 1;
    while (true) {
        yield current;
        [current, next] = [next, current + next];
    }
};
// const fib = fibonacci();
// console.log(fib.next().value); // 0
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
//dado que es una funcion infinita debemos delimitar los nimeros a traer
const fibE = fibonacciE();
for (let i = 0; i < 10; i++) {
    console.log(fibE.next().value);
}
