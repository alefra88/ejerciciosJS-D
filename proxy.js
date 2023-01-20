//una clase como cualquiera
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    getInfo() {
        return console.info(`Ficha Persona: \n`, {
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
        });
    }
}

const personaAlan = new Persona("Alan", "Ocampo", 35);
//personaAlan.getInfo();

//uso de proxys
const persona = {
    nombre: "",
    apellido: "",
    edad: 0,
};

const handler = {
    set(obj, prop, valor) {
      //validamos que no puedan ser agregadas mas props
      if(Object.keys(obj).indexOf(prop)===-1){
        return console.error(`La propiedad ${prop} no existe`)
      }
        obj[prop] = valor;
    },
};

const alan = new Proxy(persona, handler);
alan.nombre = "Alan";
alan.apellido = "Ocampo";
alan.edad = 35;
alan.twitter = "@alefra88"
console.log(alan);
