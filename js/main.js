/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

/* creo le variabili */
const journey_km = Number(prompt("Inserisci i km che vorresti percorrere"));
const user_age = Number(prompt("Inserisci la tua età"));

let ticket_price = 0.21*journey_km;

/* condizione che crea il prezzo scontato */
if(user_age<18){
    ticket_price = ticket_price - ((ticket_price*20)/100);
}
else if(user_age>=65){
    ticket_price = ticket_price - ((ticket_price*40)/100);
}

document.getElementById("ticket_price").innerHTML=`Il prezzo del tuo biglietto è ${ticket_price.toFixed(2)}`