fetch("datos.json")
.then(response => {return response.json()})
.then(data => cargarPreguntas(data))
.catch(err => {alert("Ha habido un error en la conexión de datos")})

let preguntas = [];

class Jugador{
    constructor(nombre){
        this.nombre = nombre
        this.dinero = 1000000
        this.nrespuestas = 0
    }
}

let jugadores = [];
let turnos = 0
let histdinero = [1000000, 1000000];
let npregunta = 1;
let nopciones = 4

function cargarPreguntas(data){
    data.forEach(p => {
        preguntas.push(p)
    });
}

let intervalo = null;

function empezarCuenta(){
    intervalo = setInterval(restarSegundo, 1000);
}
        
function restarSegundo(){
    let m = document.getElementById("m").innerHTML;
    let s = document.getElementById("s").innerHTML;
    let s2;

    if (m == "1:"){
        s2 = "59";
        document.getElementById("m").innerHTML = ""
    } else{
        s2 = parseInt(s)-1;
        if (s2 < 10 && s2 >= 0) {s2 = "0" + s2;}
        else {s2 = s2.toString();}
    }
    
    if (s2 == "-1"){
       pararCuenta();
       hecho();
    } else {
        document.getElementById("s").innerHTML = s2
    }
}

function pararCuenta(){
    clearInterval(intervalo);
    intervalo = null;
}


//Empieza la partida, después de introducir los nombres de los equipos

function empezarJuego(){
    let ovacion = document.getElementById("ovacion")
    ovacion.pause()
    ovacion.currentTime = 0

    document.getElementById("dineroj1").value = '1000000€'
    document.getElementById("dineroj2").value = '1000000€'
    document.getElementById("comenzar").hidden = true
    document.getElementById("m").innerHTML = "1:"
    document.getElementById("s").innerHTML = "00"
    document.getElementById("cronometro").hidden = false

    document.getElementById("fin").innerHTML = ""
    jugadores = []
    turnos = 0
    histdinero = [1000000, 1000000]
    npregunta = 1
    nopciones = 4

    document.querySelectorAll(".nombre").forEach(input => {
        jugadores.push(new Jugador(input.value))
        input.disabled = true
    });

    

    jugadores = jugadores.concat(jugadores, jugadores, jugadores, jugadores, jugadores, jugadores, jugadores)

    empezarTurno()
    
}

//Empieza el primer turno y cada uno de los demás turnos, o se acaba la partida
function empezarTurno(){
    let abucheo = document.getElementById("abucheo")
    let aplausos = document.getElementById("aplauso")
    abucheo.pause()
    abucheo.currentTime = 0
    aplausos.pause()
    aplausos.currentTime = 0

    let jugador1 = jugadores[0]
    let jugador2 = jugadores[1]

    if (turnos == 16){
        if (jugador1.dinero  > jugador2.dinero){
            finJuego(jugador1.nombre)
        }
        else if (jugador2.dinero > jugador1.dinero){
            finJuego(jugador2.nombre)
        }
        else if (jugador2.dinero == jugador1.dinero){
            finJuego("empate")
        }
    }

    else if (jugador1.nrespuestas == jugador2.nrespuestas && turnos >= 2){
        npregunta++
        if (jugador1.dinero == 0 && !(jugador2.dinero == 0)){
            finJuego(jugador2.nombre)
        }
        else if (jugador2.dinero == 0 && !(jugador1.dinero == 0)){
            finJuego(jugador1.nombre)
        }
        else if (jugador2.dinero == 0 && jugador1.dinero == 0){
            let dineroanteriorj1 = histdinero[turnos - 2]
            let dineroanteriorj2 = histdinero[turnos - 1]

            if (dineroanteriorj1  > dineroanteriorj2){
                finJuego(jugador1.nombre)
            }
            else if (dineroanteriorj2 > dineroanteriorj1){
                finJuego(jugador2.nombre)
            }
            else if (dineroanteriorj1 == dineroanteriorj2){
                finJuego("empate")
            }
        }
        else {
            continuarPartida()
        }
    } else {
        continuarPartida()
    }
}

//Se continúa la partida y se muestran los temas a elegir y el dinero del jugador
function continuarPartida(){
    let jugador = jugadores[turnos]

    document.body.style.backgroundImage = "url(/img/fondo2.png)"
    document.getElementById("terminar").hidden = true
    document.getElementById("hecho").hidden = true
    document.getElementById("apuesta").hidden = true
    document.getElementById("m").innerHTML = "1:"
    document.getElementById("s").innerHTML = "00"
    document.getElementById("juego").hidden = true
    document.getElementById("np").innerHTML = npregunta
    document.getElementById("jugador").innerHTML = jugador.nombre
    mostrarTemas()
    document.getElementById("dinero").innerHTML = jugador.dinero + "€"
    
    document.getElementById("temas").hidden = false

    document.querySelectorAll(".opcion").forEach(opcion => {
        opcion.value = "0"
    });
    document.querySelectorAll(".valor").forEach(valor => {
        valor.innerHTML = ""
    });
    document.getElementById("partida").hidden = false;
    
    document.querySelectorAll("#A,#B,#C,#D").forEach(input => {
        input.parentNode.style.backgroundColor = "white"
    });
}

//Se muestran los temas a elegir, escogidos aleatoriamente según el número de pregunta
function mostrarTemas(){
    let numeroPregunta = document.getElementById("np").innerHTML
    let temasPosibles = []
    if  (numeroPregunta >= 1 && numeroPregunta <= 4){
        preguntas.forEach(pregunta => {
            if (pregunta.color == "rojo"){
                temasPosibles.push(pregunta.tema)
            }
        });
    }
    else if  (numeroPregunta >= 5 && numeroPregunta <= 7){
        preguntas.forEach(pregunta => {
            if (pregunta.color == "azul"){
                temasPosibles.push(pregunta.tema)
            }
        });
    }
    else if  (numeroPregunta == 8){
        preguntas.forEach(pregunta => {
            if (pregunta.color == "negro"){
                temasPosibles.push(pregunta.tema)
            }
        });
    }

    let pos_aleatoria = randomRango(temasPosibles.length -1)
    let tema = temasPosibles[pos_aleatoria]
    
    let pos_aleatoria2 = randomRango(temasPosibles.length -1)
    let tema2 = temasPosibles[pos_aleatoria2]

    while (tema2 == tema){
        let pos_aleatoria = randomRango(temasPosibles.length -1)
        tema2 = temasPosibles[pos_aleatoria]
    }

    document.getElementById("t1").innerHTML = tema
    document.getElementById("t2").innerHTML = tema2
}

//Se indica el tema escogido por el usuario
function indicarTema(tema){
    document.getElementById("tema").innerHTML = tema
    document.getElementById("temas").hidden = true
    empezarCuenta()
    mostrarPregunta()
    let musica = document.getElementById("musica")
    musica.currentTime = 0
    musica.play()
}

//Se muestra una pregunta aleatoria acorde al tema elegido y el número de la pregunta, así como las posibles respuestas
function mostrarPregunta(){
    document.getElementById("correcta").hidden = true

    let numeroPregunta = document.getElementById("np").innerHTML
    let temaElegido = document.getElementById("tema").innerHTML
    let posiblesPreguntas = []
    let pregunta;
    if  (numeroPregunta >= 1 && numeroPregunta <= 4){
        preguntas.forEach(pregunta => {
            if (pregunta.color == "rojo" && pregunta.tema == temaElegido){
                posiblesPreguntas.push(pregunta)
            }
        });

        nopciones = 4
        let posAleatoria = randomRango(posiblesPreguntas.length -1)
        pregunta = posiblesPreguntas[posAleatoria]
        document.getElementById("pregunta").innerHTML = pregunta.pregunta
        document.getElementById("pregunta").style.border = "solid 6px red"
        document.querySelectorAll(".divC").forEach(e=> e.style = "display:inline-block") 
        document.querySelectorAll(".divD").forEach(e=> e.style = "display:inline-block") 

        document.getElementById("rA").innerHTML = pregunta.A
        document.getElementById("rB").innerHTML = pregunta.B
        document.getElementById("rC").innerHTML = pregunta.C
        document.getElementById("rD").innerHTML = pregunta.D
    }

    else if  (numeroPregunta >= 5 && numeroPregunta <= 7){
        preguntas.forEach(pregunta => {
            if (pregunta.color == "azul" && pregunta.tema == temaElegido){
                posiblesPreguntas.push(pregunta)
            }
        });

        let posAleatoria = randomRango(posiblesPreguntas.length -1)
        pregunta = posiblesPreguntas[posAleatoria]
        document.getElementById("pregunta").innerHTML = pregunta.pregunta
        document.getElementById("pregunta").style.border = "solid blue 6px"
        document.querySelectorAll(".divD").forEach(e=> e.style = "display:none") 
        nopciones = 3

        document.getElementById("rA").innerHTML = pregunta.A
        document.getElementById("rB").innerHTML = pregunta.B
        document.getElementById("rC").innerHTML = pregunta.C
    }

    else if  (numeroPregunta == 8){
        preguntas.forEach(pregunta => {
            if (pregunta.color == "negro" && pregunta.tema == temaElegido){
                posiblesPreguntas.push(pregunta)
            }
        });

        let posAleatoria = randomRango(posiblesPreguntas.length -1)
        pregunta = posiblesPreguntas[posAleatoria]
        document.getElementById("pregunta").innerHTML = pregunta.pregunta
        document.getElementById("pregunta").style.border = "solid gray 6px"
        document.querySelectorAll(".divC").forEach(e=> e.style = "display:none") 
        document.querySelectorAll(".divD").forEach(e=> e.style = "display:none") 
        nopciones = 2

        document.getElementById("rA").innerHTML = pregunta.A
        document.getElementById("rB").innerHTML = pregunta.B
    }
   

    document.getElementById("correcta").innerHTML = pregunta.correcta
    document.getElementById("juego").hidden = false
    document.getElementById("terminar").hidden = true
    document.getElementById("hecho").hidden = false
    document.getElementById("apuesta").hidden = false

    let jugador = jugadores[turnos]
    document.querySelectorAll("#A, #B, #C, #D").forEach(input => {
        input.max = jugador.dinero
    });  
    
}

function cambiarValorInput(valor, id){
    document.getElementById(id).innerHTML = valor + "€"
    let jugador = jugadores[turnos]
    let totalApostado = 0
    document.querySelectorAll("#A, #B, #C, #D").forEach(input => {
        totalApostado += parseInt(input.value)
    });
    document.getElementById("dinero").innerHTML = jugador.dinero - totalApostado + "€"
}
function cambiarMax() {
    let jugador = jugadores[turnos]
    let a = document.getElementById('A').value
    let b = document.getElementById('B').value
    let c = document.getElementById('C').value
    let d = document.getElementById('D').value    
    document.getElementById('A').max = jugador.dinero-b-c-d
    document.getElementById('B').max = jugador.dinero-a-c-d
    document.getElementById('C').max = jugador.dinero-a-b-d
    document.getElementById('D').max = jugador.dinero-a-b-c   
}

//Al hacer una apuesta, se determinan las opciones incorrectas y la correcta, y se actualiza el dinero del jugador
function hecho(){   
    pararCuenta()
    let total = 0;
    let apuestas = 0;
    let jugador = jugadores[turnos]
    let jugador1 = jugadores[0]
    let jugador2 = jugadores[1]


    document.querySelectorAll(".opcion").forEach(opcion => {
        let cantidad = parseInt(opcion.value)
        total += cantidad
        if (cantidad > 0){
            apuestas++
        }
    });

 
    if (document.getElementById("s").innerHTML == "00" && (total != jugador.dinero || apuestas == nopciones)){
        let musica = document.getElementById("musica")
        musica.pause()

        jugador.dinero = 0
        document.getElementById("dinero").innerHTML = 0 + "€"
        document.getElementById("dineroj1").value = jugador1.dinero
        document.getElementById("dineroj2").value = jugador2.dinero
        histdinero.push(0)
        jugador.nrespuestas++
        turnos++
                    
        document.getElementById("correcta").hidden = false
        document.getElementById("terminar").hidden = false
        document.getElementById("hecho").hidden = true

        document.querySelectorAll("#A,#B,#C,#D").forEach(input => {
            if (opcionCorrecta(input.id)){
                input.parentNode.style.backgroundColor = "green"
            } else {
                input.parentNode.style.backgroundColor = "red"
            }
        });
    }
    else if (document.getElementById("s").innerHTML != "00" && (total != jugador.dinero || apuestas == nopciones)){
        if (total != jugador.dinero){
            alert("Hay que depositar todo el dinero en una o varias opciones")
            empezarCuenta()
        }
        else if (apuestas == nopciones){
            alert("Debe haber al menos una casilla vacía")
            empezarCuenta()
        }
    }
    else{
        let musica = document.getElementById("musica")
        musica.pause()
        terminarTurno()
    }
}

function terminarTurno(){
    let total_correcta = 0
    let jugador = jugadores[turnos]
    let jugador1 = jugadores[0]
    let jugador2 = jugadores[1] 
        
    document.querySelectorAll("#A,#B,#C,#D").forEach(input => {
        if (opcionCorrecta(input.id)){
            total_correcta += parseInt(input.value)
            input.parentNode.style.backgroundColor = "green"
        } else {
            input.parentNode.style.backgroundColor = "red"
        }
    });
    
    if (total_correcta == 0){
        let abucheo = document.getElementById("abucheo")
        abucheo.play()
    } else if (total_correcta > 0){
        let aplausos = document.getElementById("aplauso")
        aplausos.play()
    }
        
        
    jugador.dinero = total_correcta
    document.getElementById("dinero").innerHTML = jugador.dinero + "€"
    document.getElementById("dineroj1").value = jugador1.dinero + "€"
    document.getElementById("dineroj2").value = jugador2.dinero + "€"
    histdinero.push(jugador.dinero)
    jugador.nrespuestas++
    turnos++
                
    document.getElementById("terminar").hidden = false
    document.getElementById("hecho").hidden = true
}

function opcionCorrecta(id){
    if (id == document.getElementById("correcta").innerHTML){
        return true
    }
}

//Se acaba el juego de acuerdo a las condiciones en la función empezarTurno
function finJuego(ganador){
    if (ganador == "empate"){
        document.getElementById("fin").innerHTML = "¡Ha habido un empate!"
    }
    else{
        document.getElementById("fin").innerHTML = "¡Ha ganado " + ganador + "!"
        let ovacion = document.getElementById("ovacion")
        ovacion.play()
    }
    
    document.getElementById("partida").hidden = true
    document.getElementById("comenzar").hidden = false
    document.getElementById("cronometro").hidden = true

    document.querySelectorAll(".nombre").forEach(input => {
        input.disabled = false
    });

}

//Función que determina un número aleatorio dentro de un rango de valores pasado como parámetro
function randomRango(max){
    return Math.floor(Math.random() * (max+1));
}


  