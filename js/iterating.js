(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    // var names = ['erik', 'joe', 'chris', 'tom'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    // console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    // for(var i = 0; i < names.length; i++) {
    //     console.log("index " + i + " contains " + names[i]);
    // }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // names.forEach(function (names) {
    //     console.log("Here is a forEach name: " + names);
    // })
    //
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

    // function firstItem(in1, in2, in3, in4) {
    //     return in1 = console.log(names[1]), in2 = console.log(names[2]), in3 = console.log(names[3]), console.log(names[0]);
            // return array[0];
    // }
    //
    // function secondItem() {
    //     return console.log(names[1]);
        // return array[1];
    // }
    //
    // function thirdItem() {
    //     return console.log(names[2]);
        // return array[array.length -1];
    // }
    //
    // firstItem();
    // secondItem();
    // thirdItem();



    //////////////////////////////////////////////////////////////////////////////////////
// =======================Loops and Array Bonuses=========================

//         1.  create an array of shapes
// – prompt the user to search for a specific shape
// – using a for loop, iterate through the array to log the shapes until the matching shape is found
// – once the shape is found, log a message (“Shape is found”) and use a break statement to exit loop.

    // var shapes = ['square', 'circle', 'triangle', 'pentagon'];
    //
    // var search = prompt('enter a shape.');
    //
    // for (var i = 0; i < shapes.length; i++){
    //     if (search === shapes[i]){
    //         console.log(search + " matches " + shapes[i]);
    //         break;
    //     } else {
    //         console.log("wrong");
    //     }
    // }

//     2.  Create a function that returns a random day of the week

    // var daysOfWeek = [
    //     'sunday',
    //     'monday',
    //     'tuesday',
    //     'wednesday',
    //     'thursday',
    //     'friday',
    //     'saturday'
    // ];
    //
    // var w = Math.floor(Math.random() * 7);
    // console.log(w);
    //
    // function randomDay() {
    //     return console.log(daysOfWeek[w]);
    // }
    // randomDay();

//     3.  Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// – someFunction("a") // returns 1
// – someFunction("z") // returns 26

    // var alphabet = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //
    // var letter = prompt('Enter a letter').toLowerCase();
    //
    // function alpha() {
    //     for (var i = 0; i < alphabet.length; i++) {
    //         if (letter === alphabet[i]) {
    //             return console.log(letter + " is the number " + i)
    //         }
    //     }
    // }
    //
    // alpha();

//     4.  Create a function that returns the longest string in a given array of string elements.

    // var strings = ['long', 'longer', 'longest', 'longestest'];
    //
    // // console.log(long[0].length);
    //
    // function findLongest(arr) {
    //     var longString = arr[0];
    //     for (var i = 0; i < arr.length; i++) {
    //         if (arr[i].length < longString.length) {
    //             longString = arr[i];
    //         }
    //     }
    //     return longString;
    // }
    //
    // console.log(findLongest(strings));



    // function timo_longest(a) {
    //     var c = 0, d = 0, l = 0, i = a.length;
    //     if (i) while (i--) {
    //         d = a[i].length;
    //         if (d > c) {
    //             l = i; c = d;
    //         }
    //     }
    //     return a[l];
    // }
    // var massive = timo_longest(strings);
    //
    // console.log(massive);

//     5.   Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
// – var arr1 = ['bob', 1, true, 1, 2];
// – var arr2 = [2, null, undefined, 0, 2, "apple"]
// – exampleFunction(arr1, arr2) // returns true


    var numArr1 = [10, 10, 10, 10];
    var numArr2 = [5, 15, 20];

    console.log(numArr2.reduce((total, amount) >= total + amount);

    // function compare(arr1, arr2) {
    //     // for(var i = 0; i < arr1.reduce() && arr2.reduce(); i++) {
    //         return arr1.reduce();
    //         // return arr1[i] === arr2[i];
    //     // }
    //     // return arr1 === arr2;
    // }
    //
    //
    // console.log(numArr1);
    // console.log(numArr2);
    // console.log(compare(numArr1, numArr2));


})();
