console.log("Calcolo del prezzo del biglietto del treno");

const km = prompt('Quanti chilometri vuoi fare?');
const age = parseInt(prompt('Inserisci la tua etá'));
console.log(km, age);

const prezzoIniziale = 0.21;
let prezzoPerKm = (km * prezzoIniziale).toFixed(2);
console.log(prezzoIniziale, prezzoPerKm);

let scontoMinore = 20;
let scontoOver65 = 40;

if(age < 18){
    sconto = scontoMinore;
} else if(age > 65){
    sconto = scontoOver65;
}else{
    sconto = 0;
}

const prezzoScontato = ((prezzoPerKm / 100) * sconto).toFixed(2);
const prezzoTot = (prezzoPerKm - prezzoScontato).toFixed(2);
console.log(prezzoScontato, prezzoTot);

document.getElementById('output').innerHTML += prezzoTot + '€' ;








