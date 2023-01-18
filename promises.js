function powPromise(value) {
    if (typeof value !== "number")
        return Promise.reject(`Error el valor ${value} no es un numero`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: Math.pow(value, 2),
            });
        }, 0 | (Math.random() * 1000));
    });
}

powPromise(0)
    .then((obj) => {
        console.log("inicia promise");
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return powPromise(1);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return powPromise(2);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return powPromise("3");
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return powPromise(4);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return powPromise(5);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
    })
    .catch((err) => console.error(err));
