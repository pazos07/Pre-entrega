// main.js

alert("¡Bienvenido a la inscripción!");

function Paciente(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.toString = function() {
    return this.apellido + ", " + this.nombre;
  };
}

function InscripciónDelPaciente(paciente) {
  if (!isNaN(paciente.edad)) {
    if (paciente.edad >= 18) {
      alert("Bienvenido " + paciente.apellido + ", " + paciente.nombre);
    } else if (paciente.edad >= 0) {
      alert("Bienvenido " + paciente.apellido + ", " + paciente.nombre + ". Tendrás que ser acompañado por un mayor de edad.");
    } else {
      alert("Proporcione una edad válida.");
    }
  }
}

let respuestaDeUsuario = prompt("¿Quieres inscribir un paciente? (Si / No)");
const tablaPacientes = document.getElementById("tablaPacientes");
const nombresPacientes = [];
const pacientes = []; // Array para almacenar los pacientes registrados

while (respuestaDeUsuario !== null && respuestaDeUsuario.trim().toLowerCase() === "si") {
  const nombre = prompt("Ingresa el nombre del paciente:");
  const apellido = prompt("Ingresa el apellido del paciente:");
  const edad = parseInt(prompt("¿Qué edad tiene?"));

  if (!isNaN(edad)) {
    const paciente = new Paciente(nombre, apellido, edad);
    InscripciónDelPaciente(paciente);

    const fila = tablaPacientes.insertRow();
    const celdaNombre = fila.insertCell(0);
    const celdaApellido = fila.insertCell(1);
    const celdaEdad = fila.insertCell(2);

    celdaNombre.textContent = paciente.nombre;
    celdaApellido.textContent = paciente.apellido;
    celdaEdad.textContent = paciente.edad;

    nombresPacientes.push(paciente.nombre);
    pacientes.push(paciente); // Agregar el paciente al array de pacientes registrados
  } else {
    alert("Por favor, ingrese una edad válida.");
  }

  respuestaDeUsuario = prompt("¿Quieres inscribir otro paciente? (Si / No)");

  while (respuestaDeUsuario !== null && respuestaDeUsuario.trim().toLowerCase() !== "si" && respuestaDeUsuario.trim().toLowerCase() !== "no") {
    alert("Por favor, responde con 'Si' o 'No'.");
    respuestaDeUsuario = prompt("¿Quieres inscribir otro paciente? (Si / No)");
  }
}

console.log("Nombres de los pacientes registrados:", nombresPacientes);

// Agrega un controlador de eventos para el botón de filtro
document.getElementById("btnFiltrar").addEventListener("click", function() {
  const filtroEdad = parseInt(document.getElementById("filtroEdad").value);

  // Filtrar los pacientes según la edad seleccionada
  const pacientesFiltrados = pacientes.filter(function(paciente) {
    return paciente.edad <= filtroEdad;
  });

  // Limpiar la tabla de pacientes antes de mostrar los resultados filtrados
  while (tablaPacientes.firstChild) {
    tablaPacientes.removeChild(tablaPacientes.firstChild);
  }

  // Mostrar los pacientes filtrados en la tabla
  pacientesFiltrados.forEach(function(paciente) {
    const fila = tablaPacientes.insertRow();
    const celdaNombre = fila.insertCell(0);
    const celdaApellido = fila.insertCell(1);
    const celdaEdad = fila.insertCell(2);

    celdaNombre.textContent = paciente.nombre;
    celdaApellido.textContent = paciente.apellido;
    celdaEdad.textContent = paciente.edad;
  });
});
