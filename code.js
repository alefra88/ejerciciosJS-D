const cont = document.querySelector(".flex-container");

const boton = document.querySelector(".send-button");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase();

const createKey = (nom, mod, pri) => {
    img = "<img class='key-img' src='images/key.png'>";
    nom = `<h2>${nom}</h2>`;
    mod = `<h3>${mod}</h3>`;
    pri = `<p>Precio: <b>${pri}</b></p>`;
    return [img, nom, mod, pri];
};

const changeHidden = (number) => {
  document.querySelector(".key-data").value = number
}

let docFrag = document.createDocumentFragment();


for (var i = 1; i <= 20; i++) {
    let modRam = Math.round(Math.random() * 1000);
    let priRam = Math.round(Math.random() * 10 + 30);
    const key = createKey(`Llave ${i}`, `modelo ${modRam}`, `$ ${priRam}`);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modRam)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`, `flex-item`);
    div.innerHTML = key[0] + key[1] + key[2] + key[3];
    docFrag.appendChild(div);
}

cont.appendChild(docFrag);






