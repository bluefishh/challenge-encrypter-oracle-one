function encrypt() {
    let textToEncrypt = document
        .getElementById("encrypt-prompt")
        .value.toLowerCase();
    let messageFoundElement = document.getElementById("message-found");
    let messageNotFoundElement = document.getElementById("message-not-found");
    let decryptedTextElement = document.getElementById("decrypt-text");
    let encryptedText = "";

    const encryptKeys = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
    };

    textToEncrypt;

    for (let letter in textToEncrypt) {
        if (textToEncrypt[letter] in encryptKeys) {
            encryptedText += encryptKeys[textToEncrypt[letter]];
        } else {
            encryptedText += textToEncrypt[letter];
        }
    }

    messageNotFoundElement.style.display = "none";
    messageFoundElement.style.display = "flex";
    decryptedTextElement.innerHTML = encryptedText;
}

function decrypt() {
    let textToDecrypt = document
        .getElementById("encrypt-prompt")
        .value.toLowerCase();

    let decryptedText = textToDecrypt.replace(
        /ai|enter|imes|ober|ufat/g,
        (word) => {
            if (word == "ai") {
                return "a";
            } else if (word == "enter") {
                return "e";
            } else if (word == "imes") {
                return "i";
            } else if (word == "ober") {
                return "o";
            } else {
                return "u";
            }
        }
    );

    let messageFoundElement = document.getElementById("message-found");
    let messageNotFoundElement = document.getElementById("message-not-found");
    let decryptedTextElement = document.getElementById("decrypt-text");

    messageNotFoundElement.style.display = "none";
    messageFoundElement.style.display = "flex";
    decryptedTextElement.innerHTML = decryptedText;
}

function copy() {
    let copyText = document.getElementById("decrypt-text").innerHTML;
    navigator.clipboard
        .writeText(copyText)
        .then(() => {
            alert('Correctamente copiado al portapapeles.');
        })
        .catch((error) => {
            alert('ERROR: No se pudo copiar el texto al portapapeles.' + error);
        });
}