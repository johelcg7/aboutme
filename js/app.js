'use strict'

// let nombreUsuario; 

function saludo() {
    // al cliente debemos preguntarle como se llama?
    let nombreUsuario = prompt("¡Hola!👋 puedes decirme tu nombre?");
    //console.log ("Bienvenido, "+ nombreUsuario + "ahora te haré preguntas sobre mí que debes responder Si o No")
    alert("Bienvenido, " + nombreUsuario + ", ahora te haré preguntas sobre mí que debes responder con Si o No.")
}

function numeroAleatorio() {

    let numeroRandom = Math.floor(Math.random() * 10) + 1;
    return numeroRandom;

}

function preguntasRespuestas() {
    // luego nos pide crear 5 preguntas
    // Para listas grandes usamos arreglos
    const preguntas = [
        "¿Soy músico?",
        "¿Trabajo en la actualidad como independiente?",
        "¿Quiero mejorar profesionalmente?",
        "¿Soy cocinero?",
        "¿Estudio desarrollo de software?",
        "Adivina un número del 1 al 10, recuerda que al cuarto intento fallido, la bomba explota y mueres.",
        "Ahora, " + nombreUsuario + ", te tocará adivinar alguna de mis series favoritas, tienes 6 intentos :)"
    ];

    const respuestaRandom = numeroAleatorio();

    const respuestas = [
        "Si",
        "No",
        "Si",
        "No",
        "Si",
        respuestaRandom,
        ["Doctor House", "Cosmos", "Breaking Bad", "Better Call Saul", "Peaky Blinder", "The Big Bang Theory", "The Last Of Us", "Dark", "Two And a Half Men", "Attack Of Titans"]
    ];

    console.log(respuestas);

    let cantidadDePreguntasCorrectas = 0;
    let cantidadDePreguntasIncorrectas = 0;
    let intentos = 0;

    for (let i = 0; i < cuestionario.length; i++) {
        const comparacionRespuestas = prompt(cuestionario[i]);
        if (i === 5) {
            for (let j = 0; j < 3; j++) {
                const respuestaRandom = parseInt(comparacionRespuestas);
                if (respuestaRandom === respuestas[5]) {
                    alert("¡Respuesta Correcta! Parece que si me conoces 😉");
                    cantidadDePreguntasCorrectas++;
                    intentos++;
                    break;
                } else if (respuestaRandom > respuestas[5]) {
                    alert('¡Jaaa Jaaa Te Equivocaste! El numero era menor');
                    cantidadDePreguntasIncorrectas++;
                    intentos++;
                    prompt(cuestionario[5]);
                } else if (respuestaRandom < respuestas[5]) {
                    alert('¡Jaaa Jaaa Te Equivocaste! El numero era mayor');
                    cantidadDePreguntasIncorrectas++;
                    intentos++;
                    prompt(cuestionario[5]);
                }
            }
            console.log(intentos);
            if (intentos == 3) {
                alert("Te quedaste sin intentos, pense en el numero " + respuestaRandom);
            }
        } else if (i === 6) {
            for (let index = 0; index < respuestas[6].length; index++) {
                if (respuestas[i][index].toLowerCase() === comparacionRespuestas.toLowerCase()) {
                    alert("¡Respuesta Correcta! Parece que si me conoces 😉");
                    cantidadDePreguntasCorrectas++;
                    break;
                } else {
                    alert("¡Jaaa Jaaa Te Equivocaste!");
                    cantidadDePreguntasIncorrectas++;
                    prompt(cuestionario[6]);
                }
            }
        } else {
            if (respuestas[i].toLowerCase() === comparacionRespuestas.toLowerCase()) {
                cantidadDePreguntasCorrectas++;
                alert("¡Respuesta Correcta! Parece que si me conoces 😉");
            } else {
                cantidadDePreguntasIncorrectas++;
                alert("¡Jaaa Jaaa Te Equivocaste!");
            }
        }
    }
    alert("Gracias por participar, tu puntuación fue: " + respuestasCorrectas + " respuestas correctas de " + cuestionario.length + " preguntas");
}



// for (let i = 0; i < preguntas.length; i++) {
//     const respuestaUsuario = prompt(preguntas[i]);
//     // vamos a comparar la respuestas del usuario con la respuesta que tengo guardada
//     if (respuestas[i].toLowerCase() === respuestaUsuario.toLowerCase()) {
//         cantidadDePreguntasCorrectas++;
//         alert("¡Genial, " + nombreUsuario + ", adivinaste, vamos por más!")
//     } else {
//         cantidadDePreguntasIncorrectas++;
//         alert("Nooo, a la próxima te saco de la página :p")
//     }
// }

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
    cantidadDePreguntasCorrectas + ", ahora juguemos a las adivinanzas."
);




// console.log("Número obtenido", numeroAleatorio);
let numeroUsuario, intentos = 4;

/* Saldremos del bucle si agotamos intentos o acertamos número */
do {
    numeroUsuario = prompt("Adivina un número del 1 al 10, recuerda que al cuarto intento fallido, la bomba explota y mueres.");
    if (numeroRandom == numeroUsuario) {
        alert("¡Bien! Te salvaste por el momento");
    } else if (numeroRandom > numeroUsuario) {
        alert("Estás abajo, intenta de nuevo...");
    } else if (numeroRandom < numeroUsuario) {
        alert("Te pasaste, intenta de nuevo...");
    }

    else {
        alert("No lo has conseguido, la bomba se activará en 3, 2, 1...");
    }

} while (numeroRandom != numeroUsuario && --intentos > 0);
/* Detectamos si salimos del bucle por agotar intentos o acertar número */
//  else if (numeroUsuario< numeroRandom){
//     alert("No, tu número está muy bajo")

// } 






let respuestaSerie = ["Doctor House", "Cosmos", "Breaking Bad", "Better Call Saul", "Peaky Blinder", "The Big Bang Theory", "The Last Of Us", "Dark", "Two And a Half Men", "Attack Of Titans"];

for (let j = 0; j < 6; j++) {
    let questionsSeries = prompt("Ingresa una de mis Top 10, tienes 6 intentos...");
    for (let i = 0; i < respuestaSerie.length; i++) {
        if (questionsSeries == respuestaSerie[i]) {
            alert("¡Respuesta correcta, también eres un showlover!");
            score++;
            intentos++;
            break;
        } else {
            alert("Tienes que ser más creativo, intenta de nuevo")
        }
        if (intentos == 6) {
            alert("Uy, no eres un showlover :(")
        }

    }
}







alert(
    nombreUsuario + ", gracias por visitarme, ¡Hasta pronto!"
)
}

saludo();
preguntasRespuestas();