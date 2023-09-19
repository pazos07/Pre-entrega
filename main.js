alert("¡Bienvenido a la inscripción!");

function InscripciónDelPaciente(nombre, apellido, edad) {
  if (!isNaN(edad)) {
    if (edad >= 18) {
      alert("Bienvenido " + apellido + ", " + nombre);
    } else if (edad >= 0) {
      alert("Bienvenido " + apellido + ", " + nombre + ". Tendrás que ser acompañado por un mayor de edad.");
    } else {
      alert("Proporcione una edad válida.");
    }
  }
}

let respuestaDeUsuario = prompt("¿Quieres inscribir un paciente? (Si / No)");

while (respuestaDeUsuario.trim().toLowerCase() === "si") {
  const nombre = prompt("Ingresa el nombre del paciente:");
  const apellido = prompt("Ingresa el apellido del paciente:");
  const edad = parseInt(prompt("¿Qué edad tiene?"));

  console.log(apellido + ", " + nombre);
  InscripciónDelPaciente(nombre, apellido, edad);

  respuestaDeUsuario = prompt("¿Quieres inscribir otro paciente? (Si / No)");
}