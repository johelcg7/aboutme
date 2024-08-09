'use strict'

// al cliente debemos preguntarle como se llama?
const nombreUsuario = prompt("¡Hola!👋 puedes decirme tu nombre?");
//console.log ("Bienvenido, "+ nombreUsuario + "ahora te haré preguntas sobre mí que debes responder Si o No")
alert("Bienvenido, " + nombreUsuario + ", ahora te haré preguntas sobre mí que debes responder con Si o No.")
// luego nos pide crear 5 preguntas
// Para listas grandes usamos arreglos
const preguntas = [
    "¿Soy músico?",
    "¿Trabajo en la actualidad como independiente?",
    "¿Quiero mejorar profesionalmente?",
    "¿Soy cocinero?",
    "¿Estudio dessarrollo de software?"
];

const respuestas = ["Si", "No", "Si", "No", "Si"];
let cantidadDePreguntasCorrectas = 0;
let cantidadDePreguntasIncorrectas = 0;

// cada pregunta debe ser mostrada en un prompt

//Validación de respuestas

for (let i = 0; i < preguntas.length; i++) {
    const respuestaUsuario = prompt(preguntas[i]);
    // vamos a comparar la respuestas del usuario con la resputa que tengo guardada
    if (respuestas[i].toLowerCase() === respuestaUsuario.toLowerCase()) {
        cantidadDePreguntasCorrectas++;
        alert("¡Genial, " + nombreUsuario + ", adivinaste, vamos por más!")
    } else {
        cantidadDePreguntasIncorrectas++;
        alert("Nooo, a la próxima te saco de la página :p")
    }
}

// console.log(
//   "Hola",
//   nombreUsuario,
//   "respondiste correctamente",
//   cantidadDePreguntasCorrectas
// );

// console.log (
//     nombreUsuario, "gracias por visitarme, ¡Hasta pronto!"
// )

alert(
    "Hola, " +
    nombreUsuario +
    ", respondiste correctamente " +
    cantidadDePreguntasCorrectas
);

alert(
    nombreUsuario + ", gracias por visitarme, ¡Hasta pronto!"
)