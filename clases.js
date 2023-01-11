//CREANDO CLASES
class Animal {
    //el constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    //METODOS
    sonar() {
        console.log(
            `sonido proveniente de este animal, al parecer es un ${this.nombre}`
        );
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamano) {
        super(nombre, genero);
        this.tamano = tamano;
    }

    sonar() {
        console.log(`Ladra como un ${this.nombre}`);
    }
}

const mimi = new Animal("mimi", "hembra"),
    goofy = new Perro("goofy", "macho","grande");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(goofy);
goofy.saludar();
goofy.sonar();
