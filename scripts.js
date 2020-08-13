
let numbers = [];

function gooi() {
    
    console.log('Er is gegooid!');

    console.log( 'Het willekeurige getal is: ' + Math.floor((Math.random()*6)+1));

    for (var i = 0; i < 8; i++) {
        numbers.push(Math.floor((Math.random()*6)+1));
      };
        
    console.log(numbers);

    numbers.sort();
  
    var numberOne = 0;
    for(var i = 0; i < numbers.length; ++i){
        if(numbers[i] == 1)
        numberOne++;
    };
  
    var numberTwo = 0;
    for(var i = 0; i < numbers.length; ++i){
        if(numbers[i] == 2)
        numberTwo++;
    };
  
    var numberThree = 0;
    for(var i = 0; i < numbers.length; ++i){
        if(numbers[i] == 3)
        numberThree++;
    };
  
    var numberFour = 0;
    for(var i = 0; i < numbers.length; ++i){
        if(numbers[i] == 4)
        numberFour++;
    };
  
    var numberFive = 0;
    for(var i = 0; i < numbers.length; ++i){
        if(numbers[i] == 5)
        numberFive++;
    };
  
    var numberSix = 0;
    for(var i = 0; i < numbers.length; ++i){
        if(numbers[i] == 6)
        numberSix++;
    };



    numbers.length = 0;
};



/*
Testcode:
var myArray = {1: numberOne, 2: numberTwo, 3: numberThree, 4 :numberFour, 5: numberFive, 6: numberSix};
    console.log(myArray);
*/