console.log("inicio");
setTimeout(() => {
    console.log("ejecutando setTimeout,solo se ejecuta una vez");
}, 3000);


// setInterval(() => {
//   console.log("ejecutando setInterval,se ejecuta todo el tiempo");
// }, 1000);

let temporizador = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 2000);
clearTimeout(temporizador)
console.log("despues de clearInterval")
