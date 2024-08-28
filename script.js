function encriptarTexto() {
    let texto = document.getElementById("inputText").value;
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    document.getElementById("outputText").value = textoEncriptado;
}

function desencriptarTexto() {
    let textoEncriptado = document.getElementById("outputText").value;
    let textoDesencriptado = textoEncriptado.replace(/enter/g, "e")
                                            .replace(/imes/g, "i")
                                            .replace(/ai/g, "a")
                                            .replace(/ober/g, "o")
                                            .replace(/ufat/g, "u");
    document.getElementById("decryptedText").value = textoDesencriptado;
}

function copiarTexto() {
    let textoEncriptado = document.getElementById("outputText");
    textoEncriptado.select();
    textoEncriptado.setSelectionRange(0, 99999); 
    // Para dispositivos móviles
    navigator.clipboard.writeText(textoEncriptado.value)
        .then(() => {
            alert("Texto encriptado copiado al portapapeles.");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}

