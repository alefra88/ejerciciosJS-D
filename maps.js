let mapa = new Map();
mapa.set("nombre", "Alan");
mapa.set("apellido", "Ocampo");
mapa.set("edad", 35);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "Perrito");
console.log(mapa.get("nombre"));
mapa.delete("apellido");
console.log(mapa);

//En los maps podemos generar llaves que no sean cadena de texto, ejem, boolean, null

mapa.set(19, "diecinueve");
mapa.set(false, "false");
mapa.set([], {});
mapa.set(true, { pulgas: 344 });
console.log(mapa);

const mapa2 = new Map([
    ["nombre", "Alan"],
    ["edad", 35],
    ["Animal", "Humano"],
    ["enojado?", "sì, bastante"],
]);
const keysMapa2 = [...mapa2.keys()];
const valMapa2 = [...mapa2.values()];

console.log(keysMapa2);
console.log(valMapa2);

//RECUERDA QUE SET SE PARECE A ARREGLOS Y MAPS A OBJETOS
