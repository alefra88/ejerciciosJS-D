console.log(window)
console.log(this)


//this responden de acuerdo a su contexto
//las arrow function no funcionan bien con this porque las arrow function no crean su propio contexto sino que obedecen al scope donde fueron creadas


//"this" en JavaScript se refiere al objeto actualmente en uso. Puede variar dependiendo del contexto en el que se utilice. En una función global, "this" se refiere al objeto global, que en el caso de un navegador es "window". Dentro de una función de un objeto, "this" se refiere al objeto del que la función es un método. También puede ser modificado explícitamente utilizando "call", "apply" o "bind".

//funcion constructora = class
function Persona(nombre){
  this.nombre = nombre;
}
