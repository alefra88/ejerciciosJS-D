const saludar = (nombre) => console.log(`hola ${nombre}`);

saludar("beto")


const sumar = (a,b) => a + b;

console.log(sumar(3,2))


const funcionDeVariasLineas = () => {
  console.log("uno");
  console.log("dos");
  console.log("tres");
}

funcionDeVariasLineas();


const numeros = [1,2,3,4,5]

numeros.forEach((el,index) =>console.log(`${el} esta en la posición ${index}`));

const perro = {
  nombre: "Cookies",
  ladrar(){
    console.log(this)
  }
}

perro.ladrar()