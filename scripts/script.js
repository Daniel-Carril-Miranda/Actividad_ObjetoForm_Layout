// Declaración de variables

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const telefono = document.querySelector("#telefono");
const mensaje = document.querySelector("#mensaje");
const enviar = document.querySelector("#enviar");
const errores = document.querySelector("#errores");

let mensajeError = [];

const validar = (e) => {
  // Evita que el formulario se enviado
  e.preventDefault(e);

  //Vaciamos array
  mensajeError = [];

  // Validación de los campos:
  //Nombre como campo obligatorio
  nombre.value.trim().length == 0 &&
    mensajeError.push("El campo nombre es obligatorio");
  //Nombre con caracteres
  !/^[a-zA-Z0-9]*$/.test(nombre.value.trim()) &&
    mensajeError.push("Caracteres invalidos para el campo de nombre");

  //Correo electronico 
  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.exec(
    correo.value.trim()
  ) && mensajeError.push("El campo correo electronico no es valido");

  //Telefono
  !/^[a-zA-Z0-9]\d{8}$/.test(telefono.value.trim()) &&
    mensajeError.push("El campo telefono solo acepta 9 números o una letra unicial y 8 números seguidos");
  //Mensaje
  mensaje.value.trim().length < 10 &&
    mensajeError.push("El campo mensaje debe tener al menos 10 caracteres");

  //Enviar mensaje
  if (
    mensajeError.length === 0 &&
    confirm("¿Desea enviar el formulario?")
  ) {
    //Enviar formulario
    formulario.submit();
  } else if (mensajeError.length > 0) {
    //Mostrar mensaje de error
    errores.textContent = "";

    mensajeError.forEach(function (mensaje) {
      const mili = document.createElement("li");
      mili.textContent = mensaje;
      errores.appendChild(mili);
    });
  }
};

formulario.addEventListener("submit", validar);
