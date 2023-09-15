console.log("Hola Mundo");

let diccionario = ["APPLE", "MOUSE", "BOXES", "TREES", "CROWN"];
let indice = (Math.floor(Math.random() * diccionario.length - 1) + 1);
console.log(indice);
//let palabra = diccionario [indice];



let palabra = diccionario[indice];



let intentos = 6;


const button = document.getElementById("guess-button")

button.addEventListener('click', intentar)
'https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase'
//random-word-api.herokuapp.com/word
https://random-word-api.herokuapp.com/home


function intentar(){
    //console.log(palabra);
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row'; 
    if(INTENTO.length !== 5){
        
            alert ('debe ingresar una palabra de 5 letras')
            return
        }
    

    if (INTENTO  === palabra ) {
        terminar("<h1>GANASTE!😀</h1>") 
        
        
        return
    }
    for (let i in palabra){
        const SPAN = document.createElement('Span');
        SPAN.className = 'letter'
        if (INTENTO[i]===palabra[i]){
            SPAN.innerHTML = INTENTO [i];
            SPAN.style.backgroundColor = 'green';
            //console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
            //console.log(INTENTO[i], "AMARILLO")
        } else {
            SPAN.innerHTML = INTENTO [i];
            SPAN.style.backgroundColor = 'grey'
            //console.log(INTENTO[i], "GRIS")
        }
        ROW.appendChild(SPAN)

    }
    GRID.appendChild(ROW)

		intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!😖</h1>")
    }
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();

    
    return intento
    
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}





