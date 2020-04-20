"use strict";
//https://java.codeup.com/extra-exercises/javascript/functions/

(function(){

//isOdd
    function isOdd(num) {
        return num % 2 !== 0;
    }

    console.log(isOdd(79), true);
    console.log(isOdd(90), false);
    console.log(isOdd(2), false);

//isEven
    function isEven(num) {
        return num % 2 === 0;
    }

    console.log(isEven(79), false);
    console.log(isEven(90), true);
    console.log(isEven(2), true);

//identity
    function identity(input) {
        return input;
    }

    console.log(identity(5), 5);
    console.log(identity('love'), 'love');

//isFive
    function isFive(input) {
        return input == 5;
    }

    console.log(isFive(5), true);
    console.log(isFive('5'), true);
    console.log(isFive('five'), false);

//addFive
    function addFive() {

    }
})();