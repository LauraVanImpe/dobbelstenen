/*
Maak een nieuwe array waarbij het cijfer de key is en het aantal keer dat het cijfer gegooid is de value, bijvoorbeeld:
*/

let numbers = [];

function gooi() {
    
    console.log("Er is gegooid!");

    numbers.push(Math.floor((Math.random()*6)+1));

    console.log(numbers);

    numbers.sort();
    

    var myArray = {1: 0, 2: 0, 3: 0, 4 :0, 5: 0, 6: 0};
    console.log(myArray);

};

