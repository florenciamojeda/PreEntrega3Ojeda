

let usuario;
let pregunta1;
let pregunta2;
let pregunta3;
let pregunta4;
let pregunta5;
let pregunta6;
let contador = 0;
let mensaje;
let porcent = 0;
let jugadores = 0;
let participantes = 0;
let indice = 0;
let salir = 0;
const resultado = [];
const resultado2 = [];

function error(p) {
    alert("Respuesta " + p + " mmmmmm tengo mis dudas");
    contador++;
}

jugadores = prompt("Cuantos participantes van a jugar?");

if (isNaN(jugadores)) {
    alert("Solo puede ingresar numeros");
    jugadores = prompt("Cuantos participantes van a jugar?");
}


while (participantes < jugadores) {

    usuario = prompt("Indicame tu Nombre:");
    alert("Hola " + usuario + " Vamos a hacerte un pequeño test para saber si podes manejar, estas listo ? Comencemos!!!!!!!");

    pregunta1 = Number(prompt("cual es la edad minima para poder manejar: "));

    if (pregunta1 == 18) {
        alert("Respuesta " + pregunta1 + " es correcta");
    }

    else if (isNaN(pregunta1)) {
        alert("Error por no usar numeros, deberas voler a empesar");
        error(pregunta1);
        salir = 1;
        break
    }
    else {
        error(pregunta1);
    }
    pregunta2 = Number(prompt("cuantas ruedas tiene un auto sin contar la de auxilio: "));

    if (pregunta2 == 4) {
        alert("Respuesta " + pregunta2 + " es correcta");
    }

    else if (isNaN(pregunta2)) {
        alert("Error por no usar numeros, deberas voler a empesar");
        error(pregunta2);
        salir = 1;
        break
    }
    else {
        error(pregunta2);
    }

    pregunta3 = prompt("como se escribe rojo en ingles: ");

    if (pregunta3.toUpperCase() == "RED") {
        alert("Respuesta " + pregunta3 + " es correcta");
    }
    else {
        error(pregunta3);
    }

    pregunta4 = Number(prompt("cual es la Raiz cuadrada de 9"));

    if (pregunta4 == 3) {
        alert("Respuesta " + pregunta4 + " es correcta");
    }

    else if (isNaN(pregunta4)) {
        alert("Error por no usar numeros, deberas voler a empesar");
        error(pregunta4);
        salir = 1;
        break
    }
    else {
        error(pregunta4);
    }
    pregunta5 = prompt("ahora la ultima pregunta, estas listo? ..Recordame tu nombre");

    if (pregunta5.toUpperCase() == usuario.toUpperCase()) {
        alert("Respuesta " + pregunta5 + " es correcta");
    }
    else {
        error(pregunta5);
    }



    if (contador > 0 && contador <= 2) { alert("Uh le pifiaste a " + contador + " preguntas, Declarado copiloto") }
    else if (contador >= 3) { alert("Uh le pifiaste a " + contador + " preguntas, Te tomaste todo amigo!!Ahora tomate un uber") }
    else { alert("Ningun error, Que grande Toretto, a casa") }


    pregunta6 = prompt("Queres saber tu porcentage de borracho? decime que si");

    if (pregunta6.toUpperCase() == "SI") {
        porcent = contador * 100 / 5;

        alert("Tu porcentage del alcohol es: " + porcent + "%");
        contador = 0;

    }
    else {
        contador = 0;
    }

    participantes++;

    resultado.push(usuario);
    resultado2.push(porcent);

}

if (salir = 0) {
    for (let index = 0; index < jugadores; index++) {

        alert(resultado[index] + " " + resultado2[index] + "%");
    }

    indice = resultado2.indexOf(Math.min(...resultado2));
    alert("El que tomo menos y contesto mas rapido es : " + resultado[indice] + " con el " + Math.min(...resultado2) + " % Felicitaciones Schumacher ");
}