'use strict'

let nombre;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

function bienvenida() {
    nombre = prompt("Bienvenido a mi página. Dime tu nombre.");
    alert("¡Bienvenido, " + nombre + "! Por favor, responde las siguientes preguntas sobre mí con si o no.");

    let mensajeHeader = document.createElement('p');
    mensajeHeader.className = 'bienvenida';
    mensajeHeader.innerText = "¡Bienvenido, " + nombre + "!";
    let headerBienvenida = document.querySelector('header');
    if (headerBienvenida) {
        headerBienvenida.appendChild(mensajeHeader);
    }
}

function numeroAleatorio() {
    const numeroRandom = Math.floor(Math.random() * 10) + 1;

    return numeroRandom;
}

function preguntasRespuestas() {
    const cuestionario = [
        "¿Soy músico?",
        "¿Trabajo en la actualidad como independiente?",
        "¿Quiero mejorar profesionalmente?",
        "¿Soy cocinero?",
        "¿Estudio desarrollo de software?",
        "Adivina un número del 1 al 10, recuerda que al cuarto intento fallido, la bomba explota y mueres.",
        "Ahora, " + nombre + ", te tocará adivinar alguna de mis series favoritas, tienes 6 intentos :)"
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

    console.log(respuestas)

    for (let i = 0; i < cuestionario.length; i++) {
        let comparacionRespuestas = prompt(cuestionario[i]);

        if (i === 5) {
            let intentos = 0;
            let acerto = false;

            for (let j = 0; j < 3; j++) {
                const respuestaAleatoria = parseInt(comparacionRespuestas);
                intentos++;

                if (respuestaAleatoria === respuestas[5]) {
                    alert("¡Respuesta Correcta! Me estás cayendo bien 😉");
                    respuestasCorrectas++;
                    acerto = true;
                    break;
                } else if (respuestaAleatoria > respuestas[5]) {
                    alert('¡Error! El número era menor.');
                } else if (respuestaAleatoria < respuestas[5]) {
                    alert('¡Error! El número era mayor.');
                }
                if (j < 2) {
                    comparacionRespuestas = prompt("Intenta de nuevo: " + cuestionario[5]);
                }
            }
            if (!acerto) {
                alert("Te quedaste sin intentos, la bomba explotará en 3, 2, 1... Naa el número era:  " + respuestaRandom);
                respuestasIncorrectas++;
            }
        } else if (i === 6) {
            let acerto = false;

            for (let index = 0; index < respuestas[6].length; index++) {
                if (respuestas[6][index].toLowerCase() === comparacionRespuestas.toLowerCase()) {
                    alert("¡Respuesta Correcta! Te salvaste");
                    respuestasCorrectas++;
                    acerto = true;
                    break;
                }
            }
            if (!acerto) {
                alert("¡Grosso error!");
                respuestasIncorrectas++;
            }
        } else {
            if (respuestas[i].toLowerCase() === comparacionRespuestas.toLowerCase()) {
                respuestasCorrectas++;
                alert("¡Respuesta Correcta! Me estás cayendo bien 😉");
            } else {
                respuestasIncorrectas++;
                alert("¡Grosso error!");
            }
        }
    }

    let mensajeFooter = document.createElement('p')
    if (respuestasCorrectas >= 5) {
        mensajeFooter.innerText = "¡Parece que seguirás vivo por algún tiempo jeje";
    } else {
        mensajeFooter.innerText = "Fallaste mucho, creo que deberás correr antes que la bomba explote.";
    }

    let footerPuntaje = document.querySelector('footer');
    if (footerPuntaje) {
        footerPuntaje.appendChild(mensajeFooter);
    }

    alert("Gracias por participar, lo de la bomba, obviamente era broma, obtuviste: " + respuestasCorrectas + " respuestas correctas de " + cuestionario.length + " preguntas");
}


bienvenida();
preguntasRespuestas();

// console.log(
//     "Hola",
//     nombre,
//     "acertaste esta cantidad de preguntas: ",
//     respuestasCorrectas
// );
// console.log(
//     nombre,
//     "estas son las respuestas que erraste: ",
//     respuestasIncorrectas
// );