"use strict";

(function () {

    // For each of the following outputs, create a while loop, do-while loop, and for loop to duplicate the output...
    // ---------------
    // 10
    // 8
    // 6
    // 4
    // 2
    // 0
    // -2

        //While loop (in a function)
            function whileLoopOne() {
                var output = '';
                var i = 10;

                while (i >= -2) {
                    output += i + '\n';
                    i -= 2;
                }
                return output;
            }
              console.log('While Loop One');
              console.log(whileLoopOne());
              console.log('===============');

        //Do-while loop
            function doWhileLoopOne() {
                var output = '';
                var j = 10;

                do {
                    output += j + '\n';
                    j -= 2;
                } while (j >= -2);
                return output;
            }
            console.log('Do-While Loop One');
            console.log(doWhileLoopOne());
            console.log('===============');


        //For loop
            function forLoopOne() {
                var output = '';

                for (var k = 10; k >= -2; k -= 2) {
                    output += k + '\n';
                }
                return output;
            }

            console.log('For Loop One');
            console.log(forLoopOne());
            console.log('===============');


    // ---------------
    // 2
    // 4
    // 16
    // 256
    // 65536

        //While loop
            function whileLoopTwo() {
                var l = 2;

                while (l <= 65536) {
                    console.log(l);
                    l *= l;
                }
            }
            console.log('While Loop Two');
            whileLoopTwo();
            console.log('===============');


        //Do-While loop
            function doWhileLoopTwo() {
                var m = 2;

                do {
                    console.log(m);
                    m *= m;
                } while (m <= 65536);
            }
            console.log('Do-While Loop Two');
            doWhileLoopTwo();
            console.log('===============');


        //For loop
            function forLoopTwo() {
                for (var n = 2; n <= 65536; n *= n) {
                    console.log(n);
                }
            }
            console.log('For Loop Two');
            forLoopTwo();
            console.log('===============');






    // ---------------
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // ---------------
    // 105
    // 100
    // 95
    // ---------------
    // 1000000
    // 100000
    // 10000
    // 1000
    // 100
    // 10
    // 1
})();