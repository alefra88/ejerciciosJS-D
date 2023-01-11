//POO
/*
CLASE: modelo a seguir
OBJETO: instancia de una clase
ATRIBUTO: es una caracteristica propia del objeto
OBJETO: es una variable dentro de un objeto
METODOS: Son las acciones que un objeto puede realizar
*/

//FUNCION CONSTRUCTORA ANTES DE ECMS6
function Animal(nombre, genero) {
    //ATRIBUTOS
    this.nombre = nombre;
    this.genero = genero;
    //METODO
    this.sonar = function () {
        console.log("sonido génerico");
    };
}
//EL OBJETO ES UNA INSTANCIA DE LA FUNCIÓN CONSTRUCTORA
const puki = new Animal("Puki", "macho");
console.log(puki)