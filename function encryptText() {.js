function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = btoa(inputText); // Encriptação base64
    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = atob(inputText); // Decodificação base64
    document.getElementById('outputText').value = decryptedText;
}
