// Operaciones concurrentes: Se refiere a la capacidad de un programa para ejecutar varias tareas al mismo tiempo, pero no necesariamente en paralelo. Por ejemplo, un programa puede manejar varias tareas de entrada/salida (E/S) al mismo tiempo, pero solo una tarea se ejecuta a la vez en el procesador. En JavaScript, las operaciones concurrentes se logran mediante el uso de callbacks y promesas.

// Operaciones paralelas: Se refiere a la capacidad de un programa para ejecutar varias tareas al mismo tiempo, utilizando varios núcleos o procesadores. Esto permite que varias tareas se ejecuten simultáneamente en el procesador. En JavaScript, las operaciones paralelas pueden lograrse utilizando Web Workers o algunas librerías como worker-threads.

/*Codigo Sincrono bloqueante */
// (() => {})()(
/*Codigo Asincrono bloqueante */
(() => {
    console.log("Codigo Asincrono");
    console.log("inicio");

    function dos() {
        setTimeout(function () {
            console.log("dos");
        }, 1000);
    }
    function uno() {
        setTimeout(function () {
            console.log("uno");
        }, 0);
        dos();
        console.log("tres");
    }
    uno();
    console.log("fin");
})();
