function sumar(a, b, ...c) {
    let resultado = a + b;
    c.forEach(function (n) {
        resultado += n;
    });
    return resultado;
}

console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8, 9));

const arr = [1, 2, 3, 4, 5],
    arr2 = [6, 7, 8, 9, 0];

console.log(arr, arr2);

const array1 = [1, 2, 3, 4, 5],
    array2 = [6, 7, 8, 9, 10],
    array3 = [11, 12, 13, 14, 15];
const arrayFinal = array1.concat(array2, array3);
const arrayFinalSpread = [...array1,...array2,...array3];

console.log(arrayFinal);
console.log(arrayFinalSpread);
