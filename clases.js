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
    constructor(nombre, genero, tamano, raza) {
        super(nombre, genero);
        this.tamano = tamano;
        this.raza = null;
    }

    sonar() {
        console.log(`Ladra como un ${this.nombre}`);
    }
    //AGREGANDO STATIC
    static queEres() {
        console.log("soy un animal fantastico");
    }
    get getRaza() {
        return this.raza;
    }
    set setRaza(raza) {
        this.raza = raza;
    }
}

const mimi = new Animal("mimi", "hembra"),
    goofy = new Perro("goofy", "macho", "grande");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(goofy);
goofy.saludar();
goofy.sonar();
Perro.queEres();
