/*EL OPERADOR CORTOCIRCUITO APLICA VALORES POR DEFECTO A LOS 
  cortocircuito OR: Cuando el valor de la izquierda siempre pueda valor true, es el valor que se cargarà por defecto
  cortocircuito AND: cuando en valor de la izquierda siempre pueda validar false, es el valor que se cargará por defecto
*/

function saludar(nombre) {
    nombre = nombre || "desconocido"; //este es un operador cortocircuito
    console.log(`Hola ${nombre}`);
}

saludar();

console.log("cadena" || "valor de la derecha");
console.log(19 || "valor de la derecha");
console.log(true || "valor de la derecha");
console.log(-1 || "valor de la derecha");
