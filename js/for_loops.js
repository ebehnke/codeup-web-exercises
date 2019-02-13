// IIFE / Remove when finished coding //
// (function(){
"use strict";

// function showMultiplicationTable(input) {
//     for(var i = 0; i <= 10; i++)
//     console.log(input + " x " + " = " + (i * input));
// }
//
// showMultiplicationTable(7);
// store i * input as variable for more readable code




function getRndInteger(min, max) {
    return Math.floor(Math.random() * 200)+20;
}


for(var i = 0; i <= 10; i++) {
    console.log(getRndInteger(200, 20));
    var randomNumber = Math.floor(Math.random() * 200)+20;
    if(randomNumber % 2 === 0) {
        console.log(randomNumber + "is even");
    } else {
        console.log(randomNumber + "is odd");
    }
}

// walkthrough


// for (var i = 1; i <= 10; i++){
//     console.log(i.length);
//     for(i; i <= 4445; i++){
// }
// }



// function displayPyramid(n) {
//     for (var i = 0; i < n; i++) {
//         var str = '';
//         for (var j = 1; j < n-i; j++) {
//             // str = str + ' ';
//         }
//         for (var k = 1; k <= (2*i+1); k++) {
//             str = str + i;
//         }
//         console.log(str);
//     }
// }

// displayPyramid(9)

// for (var i = 100; i >= 5; i -= 5){
//     console.log(i);
// }
//










// IIFE closing //
// })();