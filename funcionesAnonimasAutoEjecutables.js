//FUNCION ANONIMA AUTOEJECUTABLE
(function () {
    console.log("Mi primer IIFE");
})();
//FUNCION CLASICA
(function (d, w, c) {
    console.log("Mi segunda IIFE");
    console.log(d);
    console.log(w);
})(document, window, console);
alert("hola");
