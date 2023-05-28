//Prueba JS

const formulario = document.getElementById('contacto-form');
const mensajeExito = document.getElementById('mensaje-exito');
const mensajeError = document.getElementById('mensaje-error');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validar el formulario
  if (validarFormulario()) {
    // Enviar el formulario o mostrar un mensaje de éxito
    mostrarMensajeExito();
    formulario.reset();
  } else {
    // Mostrar un mensaje de error
    mostrarMensajeError();
  }
});

function validarFormulario() {
  // Obtener los valores del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  // Validar que los campos no estén vacíos
  if (nombre === '' || email === '' || mensaje === '') {
    return false;
  }

  // Validar el formato del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  return true;
}

function mostrarMensajeExito() {
  mensajeExito.style.display = 'block';
  mensajeExito.textContent = '¡Mensaje enviado con éxito!';
  mensajeExito.classList.remove('error');
}

function mostrarMensajeError() {
  mensajeError.style.display = 'block';
  mensajeError.textContent = 'Por favor, completa todos los campos correctamente.';
  mensajeError.classList.add('error');
}