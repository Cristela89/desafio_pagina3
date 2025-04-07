// Llenar los select con opciones del 1 al 9
function fillSelectOptions() {
    for (let i = 1; i <= 9; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;

        document.getElementById("digit1").appendChild(option.cloneNode(true));
        document.getElementById("digit2").appendChild(option.cloneNode(true));
        document.getElementById("digit3").appendChild(option.cloneNode(true));
    }
}

// Verificar el password ingresado
function checkPassword() {
    const digit1 = document.getElementById("digit1").value;
    const digit2 = document.getElementById("digit2").value;
    const digit3 = document.getElementById("digit3").value;
    const message = document.getElementById("message");

    const password = digit1 + digit2 + digit3;

    if (password === "911") {
        message.textContent = "password 1 correcto";
        message.style.color = "green";
    } else if (password === "714") {
        message.textContent = "password 2 correcto";
        message.style.color = "green";
    } else {
        message.textContent = "password incorrecto";
        message.style.color = "red";
    }
}

// Ejecutar al cargar
document.addEventListener("DOMContentLoaded", () => {
    fillSelectOptions();
    document.getElementById("checkBtn").addEventListener("click", checkPassword);
});
