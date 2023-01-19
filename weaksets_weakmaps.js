// const ws = new WeakSet([
//     1,
//     2,
//     3,
//     4,
//     5,
//     true,
//     false,
//     false,
//     {},
//     {},
//     "hola",
//     "HOLA",
// ]);
const ws2 = new WeakSet();
let valor1 = { valor: 1 };
let valor2 = { valor: 2 };
let valor3 = { valor: 3 };
ws2.add(valor1);
ws2.add(valor2);
console.log(ws2);

console.log(ws2.has(valor2));


//Los WeakSets son útiles cuando se necesita almacenar objetos y asegurar que no se mantengan en memoria si ya no se utilizan, mientras que los WeakMaps son útiles cuando se necesita almacenar pares clave-valor de objetos y asegurar que no se mantengan en memoria si ya no se utilizan.
