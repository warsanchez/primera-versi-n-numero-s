//variables
let numeroMaximo = Math.floor(Math.random()*10)+1;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`INDIQUEME UN NUMERO ENTRE EL 1 Y ${numeroMaximo}`));

    console.log(typeof(numeroUsuario));
    /* este codigo realiza la comparacion */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`acertaste, el numero es: ${numeroUsuario}. Lo lograste en ${intentos}. ${intentos == 1 ? " vez, Eres el mejor " : " veces "} `);
    } else {
        if(numeroUsuario > numeroSecreto)
        {alert("El numero secreto es menor, Miguel es el mejor"); 
        
    } else {
        alert("El numero secreto es mayor, Miguel va ser un hacker");}
    }
       // intentos = intentos + 1;
        // palabraVeces = "veces";
        intentos ++;
        if (intentos > maximosIntentos) {
            alert (`llegaste al limite ${maximosIntentos} de intentos`);
            break;
        }
}