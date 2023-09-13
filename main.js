alert("¡Bienvenido a la inscripción!");

function InscripciónDelPaciente() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = parseInt(document.getElementById("edad").value);
  
  if (!isNaN(edad)) {
    if (edad >= 18) {
      alert("Bienvenido " + apellido + ", " + nombre);
    } else if (edad >= 0) {
      alert("Bienvenido " + apellido + ", " + nombre + ". Tendrás que ser acompañado por un mayor de edad.");
    } else {
      alert("Proporcione una edad válida.")
    }
  }
}

document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault();
  InscripciónDelPaciente();
});


// let continuar = true;

// while (continuar) {
//   InscripciónDelPaciente();
//   let respuesta = prompt("¿Desea realizar otra inscripción? Responder si o no");
  
//   if (respuesta && respuesta.trim().toLowerCase() === "si") {
//     continuar = true;
//   } else {
//     continuar = false;
//     break;
//   }
// }
