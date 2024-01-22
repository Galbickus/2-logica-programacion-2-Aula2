let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    // en el HTML tenemos la etiqueta input(QUE REPRESENTA LA CAJA DE TEXTO)
    //podríamos seguir usando el document.querySelector porque hay un solo imput
    //pero tambien podemos agregar un atributo ID y buscar los elementos por ID (Ssi tenemos mas de un input)
    //document.getElementById('acá va el id') me trae el objeto completo
    //si agrego . me lista todos los atributos y busco el valor
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //lo que ingresa por el input es un string y hay que parsearlo
    // sin el parse esto da un String console.log(typeof(numeroDeUsuario));


    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    }else{
        console.log('NO acertaste el número!');  
    }
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);

//funciones para mejorar el proyecto
//funciones y llamados a funciones
/*
----------------******-------------
let numHasta = 1000;
let cantIntenPermi = 6
let numeroSecreto = Math.floor(Math.random()*numHasta)+1;
let contadorIntentos = 1;
let numeroUsuario = 0;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Ingresá un número entre 1 y ${numHasta}.`));

    if (numeroUsuario==numeroSecreto) {
        alert(`Felicidades! Acertaste al ${numeroSecreto} en ${contadorIntentos} ${(contadorIntentos==1?"intento":"intentos")}.`);       
    
    } else {

        let faltan = cantIntenPermi-contadorIntentos;

        if (numeroUsuario<numeroSecreto) {
            
            alert(`No acertaste. El número secreto es mayor que ${numeroUsuario}. Tenés ${faltan} ${(faltan==1? "intento":"intentos")} más.`);
        } else {
            alert(`No acertaste. El número secreto es menor que ${numeroUsuario}. Tenés ${faltan}  ${(faltan==1? "intento":"intentos")} más.`);
        }

        contadorIntentos++

        if (contadorIntentos > cantIntenPermi) {
            alert(`Lo siento, superaste la cantidad de ${cantIntenPermi} intentos permitidos`);
            break;
        }
    }
}

---------*********------------
asignarTextoElemento()
verificarIntento()
generarNumeroSecreto()
 */ 