$(document).ready(function() {
  // Obtiene el botón de envío
  var button = $("#enviar");

  // Agrega un evento de clic al botón
  button.click(function() {
      // Obtiene los datos del formulario
      var correo = $("#correo").val();
      var mensaje = $("#mensaje").val();

      // Envia los datos a un correo electrónico
      $.ajax({
          url: "mailto:tu@email.com",
          method: "post",
          data: {
              correo: correo,
              mensaje: mensaje
          },
          success: function() {
              // Muestra un mensaje de alerta
              alert("Mensaje enviado");
          },
          error: function() {
              // Muestra un mensaje de error
              alert("Ha ocurrido un error al enviar el mensaje.");
          }
      });
  });

  // Agrega un evento de envío al formulario
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
      // Agregar cualquier lógica adicional que desees aquí
  });
});