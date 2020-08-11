/*
Maak een nieuwe array waarbij het cijfer de key is en het aantal keer dat het cijfer gegooid is de value, bijvoorbeeld:
*/

let numbers = [];

function gooi() {
    
    console.log("Er is gegooid!");

    console.log("Het willekeurige getal is " + Math.floor((Math.random()*6)+1));

    numbers.push(Math.floor((Math.random()*6)+1));

    console.log("De array: " + numbers);

    numbers.sort();

};

