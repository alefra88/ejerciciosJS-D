export const PI = Math.PI;

let usuario = "PeñaNieto";
let pass = "burro666";

export function saludar() {
    console.log(
        "hola bellako, te saludamos desde un mòdulo con harto flow, recuerda que estamos usando ES6"
    );
}
//FUNCION EXPRESADA
const hello = () => console.log("Soy una funciòn guardada en una const exportada posteriormente a su declaraciòn");
export default hello;

//No se puede hacer export default a una const o let a menos que se declare la variable primero y en otra linea exportarla
//tambien se pueden exportar clases por default