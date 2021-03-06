"use strict";

(function() {


//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

    function showMultiplicationTable(num) {
        for (var i = 1; i <= 10; i++) {
            console.log(num + ' * ' + i + ' = ' + (num * i));
        }
    }
    showMultiplicationTable(7);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.


    for (var j = 1; j <= 10; j++) {
        var randomNumber = Math.floor(Math.random() * 180) + 20;
        if (randomNumber % 2 === 0) {
            console.log(randomNumber + ' is even')
        } else {
            console.log(randomNumber + ' is odd')
        }
    }

// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
    // Used a Smarandache Sequence in the console.log - https://mathworld.wolfram.com/SmarandacheSequences.html
    for (var k = 1; k < 10; k++) {
        console.log((k * (Math.pow(10, k) - 1)) / 9);
    }

// Create a for loop that uses console.log to create the output shown below
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
    for (var m = 100; m >= 5; m -= 5) {
        console.log(m);
    }


})();