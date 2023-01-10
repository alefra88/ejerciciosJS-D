

let numeros = [1,2,3,4,5,6,7,8,9,0];

 const par = numero => numero % 2 ===0;
 const impar = numero => numero % 2 !==0;

 let resultado = [];
 let resultadoImpar = [];

 for (let numero of numeros) {
   if (par(numero)){
     resultado.push(numero);
   }
   if (impar(numero)){
     resultadoImpar.push(numero)
   }
}

console.log(resultado)
console.log(resultadoImpar)

