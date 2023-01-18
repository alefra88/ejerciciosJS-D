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

async function funcAsyncDeclarated() {
    try {
        console.log("inicio de funcion asincrona");
        let obj = await powPromise(0);
        console.log(`Async Function ${obj.value}, ${obj.result}`);
        obj = await powPromise(1);
        console.log(`Async Function ${obj.value}, ${obj.result}`);
        obj = await powPromise(2);
        console.log(`Async Function ${obj.value}, ${obj.result}`);
        obj = await powPromise(3);
        console.log(`Async Function ${obj.value}, ${obj.result}`);
        obj = await powPromise(4);
        console.log(`Async Function ${obj.value}, ${obj.result}`);
        obj = await powPromise(5);
        console.log(`Async Function ${obj.value}, ${obj.result}`);
        console.log("Fin de async function");
    } catch (err) {
        console.error(err);
    }
}

funcAsyncDeclarated();

const funcAsyncExpresed = async () => {
  try {
    console.log("inicio de funcion asincrona");
    let obj = await powPromise(6);
    console.log(`Async Function ${obj.value}, ${obj.result}`);
    obj = await powPromise(7);
    console.log(`Async Function ${obj.value}, ${obj.result}`);
    obj = await powPromise(8);
    console.log(`Async Function ${obj.value}, ${obj.result}`);
    obj = await powPromise(9);
    console.log(`Async Function ${obj.value}, ${obj.result}`);
    obj = await powPromise(10);
    console.log(`Async Function ${obj.value}, ${obj.result}`);
    console.log("Fin de async function");
} catch (err) {
    console.error(err);
}
}