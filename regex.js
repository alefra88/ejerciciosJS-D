// En el área de la programación, las expresiones regulares son un método por medio del cual se pueden realizar búsquedas dentro de cadenas de caracteres. Sin importar la amplitud de la búsqueda requerida de un patrón definido de caracteres, las expresiones regulares proporcionan una solución práctica al problema. Adicionalmente, un uso derivado de la búsqueda de patrones es la validación de un formato específico en una cadena de caracteres dada, como por ejemplo fechas o identificadores.
let cadena =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit earum eos! Libero, est dignissimos nostrum amet, sequi placeat itaque deleniti excepturi fugit explicabo laborum. Esse assumenda debitis amet vel doloremque.  ";
let expReg = new RegExp("lorem", "ig");
let expReg2 = /Lorem/ig;

// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

//los {} se usan para determinar repeticiòn
let expReg3 = /lorem{1,}/ig