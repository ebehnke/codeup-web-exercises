// IIFE / Remove when finished coding //
// (function(){
"use strict";

// var x = 1;
// while (x < 65537) {
//     console.log(x);
//     x *= 2;
// }






// IIFE closing //
// })();

// x = 50;
    // while (x > 0) {
    //     console.log(x);
    //     x--;
    // }
// x = 50
// do {
//     console.log(x);
//     x--;
// } while (x > 0);
//     for(var x = 50; x > 0; console.log(x--));


// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * 50) + 50;
// }

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var boughtCones = Math.floor(Math.random() * 5) + 1;


// if allCones > boughtCones = true, you can sell your cones
// if ^ = true, you cannot sell your cones

console.log("You have " + allCones + " cones to sell.");
console.log("Your client wants to buy " + boughtCones + " cone(s).");

if (allCones >= boughtCones) {
    do {
        allCones -= boughtCones;
        console.log("You have " + allCones + " cones left to sell.");
    } while (allCones < boughtCones);
        (boughtCones = Math.floor(Math.random() * 5) + 1);
} else {
    console.log("You dont have enough cones to sell.");
}