(function(){
    "use strict";

    // var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */


    // planetsArray = planetsString.split("|");
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsBreak = planetsArray.join('\n');
    console.log(planetsBreak);

    var planetsList = planetsArray.join('<li></li>');
    console.log(planetsList);

// })();

// ====================ARRAYS=====================-
//     6.	Write a function that returns the sum of an array of numbers

// var numbers = [5, 10, 15];

// function sum(a, b) {
//     return numbers.reverse(a + b);
// }
//
// sum();

    var numbers = [5, 10, 15, 10];
    var reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
    console.log(numbers.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
    console.log(numbers.reduce(reducer, 5));
// expected output: 15



// 7.	Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
//     1) add a student
// 2) delete a student
// 3) view all students in alphabetical order
// 4) view all students in reverse alphabetical


