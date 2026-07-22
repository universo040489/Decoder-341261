document.getElementById('decodeBtn').addEventListener('click', function() {
    const code = document.getElementById('codeInput').value.trim();
    const resultDiv = document.getElementById('result');

    const codes = {
        "341261": "DINERO + RAÍZ + DOMINIO ✨<br>Activa tu abundancia y toma el control de tu vida.",
        "111": "NUEVOS COMIENZOS 🌱<br>El universo te está abriendo puertas.",
        "777": "SUERTE + PROTECCIÓN 🍀<br>Estás alineado con la buena energía."
    };

    if(codes[code]) {
        resultDiv.innerHTML = `<h3>Resultado:</h3><p>${codes[code]}</p>`;
        resultDiv.style.display = 'block';
    } else {
        resultDiv.innerHTML = `<h3>Código no encontrado</h3><p>Prueba con: 341261, 111, 777</p>`;
        resultDiv.style.display = 'block';
    }
});
