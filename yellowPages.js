const yellowPage = ["Raul", "Alberto", "Pancho", "Ramiro"];

const nombre = "Ricardo";

const searchNum = (nombre, yellowPage) => {
    for (const el of yellowPage) {
        if (el === nombre) {
            console.log("Aquí se encuentra " + el);
        }
        return console.log(`No esta ${nombre} en el objeto`);
    }
};