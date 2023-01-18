function powCallback(value, callback) {
    setTimeout(() => {
        callback(value, Math.pow(value, 2));
    }, 0 | (Math.random() * 1000));
}

powCallback(0, (value, result) => {
    console.info("inicia callback");
    console.log(`callback ${value}, ${result}`);
    powCallback(1, (value, result) => {
        console.info("inicia callback");
        console.log(`callback ${value}, ${result}`);
        powCallback(2, (value, result) => {
            console.info("inicia callback");
            console.log(`callback ${value}, ${result}`);
            powCallback(3, (value, result) => {
                console.info("inicia callback");
                console.log(`callback ${value}, ${result}`);
                powCallback(4, (value, result) => {
                    console.info("inicia callback");
                    console.log(`callback ${value}, ${result}`);
                    powCallback(5, (value, result) => {
                        console.info("inicia callback");
                        console.log(`callback ${value}, ${result}`);
                    });
                });
            });
        });
    });
});
