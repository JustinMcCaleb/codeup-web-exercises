(function(){
    "use strict";
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

        var names = ['linda', 'gene', 'louise', 'tina'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
// function forLoop() {
//     for(var z = 0; names.length < z; z++) {
//         var output = '';
//         output += names[z];
//         return output;
//     }
//
//     }
//     console.log(forLoop());

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name){
        console.log(name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var oneThroughFive = [1,2,3,4,5];

    function firstIndex(arr) {
        console.log(arr[0]);
    }
    firstIndex(oneThroughFive);

    function secondIndex(arr) {
        console.log(arr[1]);
    }
    secondIndex(oneThroughFive);

    function thirdIndex(arr) {
        console.log(arr[arr.length - 1]);
    }
    thirdIndex(oneThroughFive);
})();
