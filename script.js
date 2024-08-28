// Función para encriptar el texto
function encriptar() {
    let texto = document.querySelector(".entrada-texto").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.querySelector(".salida-texto").value = textoEncriptado;
    document.querySelector(".texto1").style.display = "none";
    document.querySelector(".texto2").style.display = "none";
    document.querySelector(".copiar").style.display = "block";
    document.querySelector(".salida-texto").style.backgroundImage = "none";
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = document.querySelector(".entrada-texto").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.querySelector(".salida-texto").value = textoDesencriptado;
    document.querySelector(".texto1").style.display = "none";
    document.querySelector(".texto2").style.display = "none";
    document.querySelector(".copiar").style.display = "block";
    document.querySelector(".salida-texto").style.backgroundImage = "none";
}

// Función para validar el texto
function validar(textoValidar) {
    const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Á", "É", "Í", "Ó", "Ú", "á", "é", "í", "ó", "ú"];
    let conteo = 0;

    for (let posicion = 0; posicion < textoValidar.length; posicion++) {
        for (let letra = 0; letra < letras.length; letra++) {
            if (textoValidar.charAt(posicion).toUpperCase() === letras[letra]) {
                conteo++;
            }
        }
    }
    return conteo === 0;
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copiar() {
    let salidaTexto = document.querySelector(".salida-texto");
    let textoParaCopiar = salidaTexto.value;
    
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        // Mostrar mensaje temporal de "copiado"
        let anuncio = document.querySelector(".anuncio");
        anuncio.textContent = "Texto copiado";
        anuncio.style.display = "block";
        setTimeout(() => {
            anuncio.style.display = "none";
            salidaTexto.value = "";
            mostrar();  // Restaurar el estado inicial
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// Función para ocultar elementos
function ocultar() {
    let salidaTexto = document.querySelector(".salida-texto");
    salidaTexto.style.background = "white";
    document.querySelector(".texto1").style.display = "none";
    document.querySelector(".texto2").style.display = "none";
    document.querySelector(".copiar").style.display = "block";
}

// Función para mostrar elementos
function mostrar() {
    let salidaTexto = document.querySelector(".salida-texto");
    salidaTexto.style.background = "url(img/notexto.png) no-repeat center";
    document.querySelector(".texto1").style.display = "block";
    document.querySelector(".texto2").style.display = "block";
    document.querySelector(".copiar").style.display = "none";
}
