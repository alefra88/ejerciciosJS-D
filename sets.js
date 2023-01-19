const sets = new Set([
    1,
    2,
    3,
    3,
    4,
    5,
    true,
    false,
    false,
    {},
    {},
    "hola",
    "HOLA",
]);
console.log(sets);

const set2 = new Set();
set2.add(1)
set2.add(2)
set2.add(2)
set2.add(3)
set2.add(1)
console.log(set2)
console.log(set2.size)

for(item of sets){
  console.log(item)
}

set2.forEach(i => console.log(i))
console.log(typeof set2)
let arr = Array.from(sets)
console.log(arr)

console.log(sets instanceof Set)
//podemos borrar valores con .delete
sets.delete("HOLA")
console.log(sets)

//podemos limpiar el objeto con .clear
set2.clear()
console.log(set2)

//podemos encontrar valores con .has (devuelve booleano)
console.log(sets.has("hola"))