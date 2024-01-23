document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = document.querySelector("input[name='nombre']").value;
    let correo = document.querySelector("input[name='correo']").value;
    let mensaje = document.querySelector("input[name='mensaje']").value;
    let email = new Email({
    to: "tu@email.com",
    subject: "Mensaje de contacto",
    body: `
        De: ${nombre}
        Correo electrónico: ${correo}
        Mensaje:
        ${mensaje}
    `,
    });
    email.send();
    alert("¡Mensaje enviado con éxito!");
});