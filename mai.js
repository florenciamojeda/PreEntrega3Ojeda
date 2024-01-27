let pregunta1 = null;
let pregunta2 = null;
let pregunta3 = null;
let pregunta4 = null;
let pregunta5 = null;
let contador = 0;
const jugadores = [];
const puntaje = [];
let nombre = null;
let gr1 = document.getElementById("gr");
let formulario1 = document.getElementById("formulario");
let lista = document.getElementById("lista");





function error(p) {
    contador++;
}

function inicio() {
    pregunta1 = document.getElementById("pregunta1").value;
    pregunta2 = document.getElementById("pregunta2").value;
    pregunta3 = document.getElementById("pregunta3").value;
    pregunta4 = document.getElementById("pregunta4").value;
    pregunta5 = document.getElementById("pregunta5").value;
    nombre = document.getElementById("nombre").value;



    if (nombre === '' || pregunta1 === '' || pregunta2 === '' || pregunta3 === '' || pregunta4 === '' || pregunta5 === '') {

        gr1.innerHTML = '<h2>' + "Falta completar algun dato" + '</h2>';
    }

    else {
        if (pregunta1 == 18) {

        }

        else if (isNaN(pregunta1)) {
            error(pregunta1);

        }
        else {
            error(pregunta1);
        }


        if (pregunta2 == 4) {

        }

        else if (isNaN(pregunta2)) {

            error(pregunta2);

        }
        else {
            error(pregunta2);
        }



        if (pregunta3.toUpperCase() == "RED") {

        }
        else {
            error(pregunta3);
        }



        if (pregunta4 == 3) {

        }

        else if (isNaN(pregunta4)) {

            error(pregunta4);


        }
        else {
            error(pregunta4);
        }


        if (pregunta5.toUpperCase() == nombre.toUpperCase()) {

        }
        else {
            error(pregunta5);
        }


        porcent = contador * 100 / 5;
        contador = 0;

        jugadores.push(nombre);
        puntaje.push(porcent);

        gr1.innerHTML = '<h2>' + "Jugador " + nombre + " Grabado y escrachado!!!!" + '</h2>';

    }
}


function resultado() {
   
    for (i = 0; i < jugadores.length; i++) {
        const set = 0;
        const enJSON = JSON.stringify(jugadores[i]) + " % de ebriedad  : " + JSON.stringify(puntaje[i]);
        
        localStorage.setItem("jugador"+[i],enJSON);


        Swal.fire({
            title: "Resultado!!!!!",
            text:  enJSON,
            icon: "info"
          });

        

    }




}

function limpiar() {

    document.getElementById("pregunta1").value = "";
    document.getElementById("pregunta2").value = "";
    document.getElementById("pregunta3").value = "";
    document.getElementById("pregunta4").value = "";
    document.getElementById("pregunta5").value = "";
    document.getElementById("nombre").value = "";

}

function juego() {
    formulario1.innerHTML = '<form action="/mai.js" method="post"><ul><li> <label for="nombre">decime tu nombre?</label><input type="text" id="nombre" name="user_name" /></li><li><label for="pregunta1">cual es la edad minima para poder manejar?:</label><input type="text" id="pregunta1" name="pregunta1" /></li><li><label for="pregunta2">cuantas ruedas tiene un auto sin contar la de auxilio?:</label><input type="text" id="pregunta2" name="pregunta2" /></li><li><label for="pregunta3">como se escribe rojo en ingles?</label><input type="text" id="pregunta3" name="pregunta3" /></li><li><label for="pregunta4">cual es la Raiz cuadrada de 9?</label><input type="text" id="pregunta4" name="pregunta4" /></li><li><label for="pregunta5">ahora la ultima pregunta, estas listo? ..Recordame tu nombre?</label><input type="text" id="pregunta5" name="pregunta5" /></li></ul></form>';
}


function mjugadores(){
    fetch(enJSON)
    .then (respuesta => respuesta.json ())
    .then (respuesta => console.log (respuesta))
}


function traigoLista(){

    fetch('lista.json')
    .then((response) =>  response.json())
    .then(data => {

        var tabla = document.createElement('table');
        
        // por cada dato se crea una fila
        for (const fila of data){
            let tr = document.createElement('tr');
        
            // otro bucle para recorrer los datos de cada objeto
            for (const atributo of Object.values(fila)) {
        
                var celda = document.createElement('td');
                celda.textContent = atributo;
                celda.style.border = '1px solid';
                tr.appendChild(celda);
            }
        
            tr.appendChild(celda);
        
            tabla.appendChild(tr);
        }
        document.body.appendChild(tabla);
        })

        lista.disabled = true; 
}