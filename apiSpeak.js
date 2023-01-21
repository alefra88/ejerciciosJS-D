//API para que un texto sea leido en el browser
let texto = "Me llamo Alan son las 6 am y estoy programando weas";

const hablar = (texto) =>
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);