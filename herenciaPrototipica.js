//HERENCIA PROTOTIPICA
function Animal(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
}

function Perro(nombre, genero, tamano) {
    this.super = Animal;
    this.super(nombre, genero);
    this.tamano = tamano;
}
 //METODO
 Animal.prototype.sonar = function () {
  console.log("sonido génerico");
};

//aquí Perro esta heredando de Animal
Perro.prototype = new Animal();
//GENERANDO EL CONSTRUCTOR PARA PERRO 
Perro.prototype.constructor = Perro;
//SOBREESCRIBIENDO METODOS DEL PROTOTIPO PADRE EN EL HIJO
Perro.prototype.sonar = function(){
  console.log("Ladrido de perro!")
}