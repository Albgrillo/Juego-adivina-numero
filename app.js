//Variables
let numeroSecreto = 0;                      
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Funcion para cambiar texto a elementos del html 
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);                                          //Asigna el valor a la variable dependiendo que valor se ingrese en el objeto valor usuario del HTML
    
    if (numeroDeUsuario === numeroSecreto) {                                                                               //Si la condicion se cumple 
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);              //Presenta el texto y el numero de intetos cambiando la palabra a vez o veces dependiendo de las condicion 
        document.getElementById('reiniciar').removeAttribute('disabled');                                                  //Activa el boton juego nuevo cambiando el atributo del objeto en archivo html 
    } else {                                                                                                               //Si no son iguales 
        if (numeroDeUsuario > numeroSecreto) {                                                                             //Comprueba si es mayor
            asignarTextoElemento('p','El número secreto es menor');                                                        //Cambia el texto del parrafo 
        } else {                                                                                                           //Si es menor 
            asignarTextoElemento('p','El número secreto es mayor');                                                        //Cambia texto del parrafo 
        }
        intentos++;                                                                                                        //Suma 1 a la variable intentos 
        limpiarCaja();                                                                                                     //Llama y ejecuta la funcion limpiar caja 
    }
    return;
}

function limpiarCaja() {                                                                                                    //Funcion limpiar caja
    document.querySelector('#valorUsuario').value = '';                                                                     //Selecciona el objeto por su IP con # y le asigna el valor "vacio"
}

    function generarNumeroSecreto() {                                                                                       //Funcion generar numero secreto
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;                                                         //Crea la variable numero generado y lo limita al numero maximo con las funciones math.floor lo lleva a entero y math ramdon genera el aleatori

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {                                                                     //Comprueba si la variable es igual al tamaño de la lista 
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');                                             //Asigna texto al parrafo 
    } else {                                                                                                                //Si no tiene el mismop valor 
        if (listaNumerosSorteados.includes(numeroGenerado)) {                                                               //Si el numero generado ya esta en la lista  
            return generarNumeroSecreto();                                                                                  //Llama a la funcion generar numero creando un "bucle"
        } else {                                                                                                            //Si no esta en la lista
            listaNumerosSorteados.push(numeroGenerado);                                                                     //Agrega a la lista el numero generado 
            return numeroGenerado;                                                                                          //Entrega numero generado
        }
    }
}

function condicionesIniciales() {                                                                                           //Crea funcion valores inicales 
    asignarTextoElemento('h1','Juego del número secreto!');                                                                 //Asigna texto al titulo 
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);                                                  //Asigna texto al parrafo 
    numeroSecreto = generarNumeroSecreto();                                                                                 //Asigna valor a la variable 
    intentos = 1;                                                                                                           //Asigna 1 a lso intentos 
    console.log(numeroSecreto);                                                                                             
}

function reiniciarJuego() {                                                                                                 //Crea funcion reinicar juego 
    limpiarCaja();                                                                                                          //Llama y ejecuta funcion 
    condicionesIniciales();                                                                                                 //Llama y ehjecuta funcion 
    document.querySelector('#reiniciar').setAttribute('disabled','true');                                                   //Al presionar el boton Juego nuevo con id asignada con #reinicar modifica el atributo a disabled
    
}

condicionesIniciales();                                                                                                     //Ejecuta funcion