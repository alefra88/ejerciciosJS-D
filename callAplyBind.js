console.log(this);
this.lugar = "contexto global";

function saludar() {
    console.log(`${this.lugar}`);
}

saludar();


