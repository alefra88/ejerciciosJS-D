const objUsuarios = {
    [`id_${Math.round(Math.random() * 100 + 5)}`]: "valor aleatorio",
};
const usuarios = ["Alan", "Efrain", "Allan", "Efren", "Yepa"];
usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));

console.log(objUsuarios);
//Sirven para generar contenido dinamico 