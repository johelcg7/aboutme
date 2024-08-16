'use strict'

let nombreUsuario; 

function saludo() {
    // al cliente debemos preguntarle como se llama?
    nombreUsuario = prompt("¡Hola!👋 puedes decirme tu nombre?");
    //console.log ("Bienvenido, "+ nombreUsuario + "ahora te haré preguntas sobre mí que debes responder Si o No")
    alert("Bienvenido, " + nombreUsuario + ", ahora te haré preguntas sobre mí que debes responder con Si o No.")
}

function preguntasRespuestas() {
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
        // vamos a comparar la respuestas del usuario con la respuesta que tengo guardada
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
        cantidadDePreguntasCorrectas + ", ahora juguemos a las adivinanzas."
    );



    let numeroRandom = Math.floor(Math.random() * 10) + 1;
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


    alert("Ahora, " + nombreUsuario + ", te tocará adivinar alguna de mis series favoritas :)");



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