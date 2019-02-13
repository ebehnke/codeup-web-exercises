// IIFE / Remove when finished coding //
// (function(){
"use strict";

// var oddNum = prompt("enter an odd number between 1 and 50.");
//
// for(var i = 1; i <= 10; i++){
//     if (oddNum % 2 !== 0 && oddNum <= 51) {
//         // var oddNum = prompt("enter an odd number between 1 and 50.");
//         // continue;
//         console.log("Number to skip is: " + oddNum);
//         console.log("Here is an odd number: " + i);
//     } else {
//         console.log("invalid");
//         var oddNum = prompt("enter an odd number between 1 and 50.");
//         // continue;
//     }
// }
//
//
//
//
// log  1-50 that are != oddNum
//
// console.log("")



// var i = prompt("enter an odd number between 1 and 50.");

// console.log("Number to skip: " + i);
//
// for (i; i < 51; i++) {
//
//     if (i % 2 === 0) {
//         continue;
//     }
//     else {
//         // console.log("invalid");
//         // continue;
//     }
//     console.log('Here is an odd number: ' + i);
//
// }

///// walkthrough



while(true){
    var i = prompt("enter an odd number between 1 and 50.")
    if (isNaN(i)) {
        alert("That is NaN");
        continue;
    }
    if (i < 1 || i > 50){
        alert("Number is out of range. Please try again.");
        continue;
    }
    if (i % 2 === 0) {
        alert("Please enter an odd number.");
        continue;
    } else {
        break;
    }
}

console.log(i);

for(var  w = 1; w <= 50; w++){
    if(w % 2 === 0){
        continue;
    }
    if(w == input) {
        console.log("Yikes.. Skipping number: " + w);
    } else {
        console.log("Here is an odd number: " + w);
    }
}

// IIFE closing //
// })();

