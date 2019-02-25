// IIFE / Remove when finished coding //
// (function(){
"use strict";

//BONUS 1: Build a Jack-In-The-Box
//
// Define an object called jackBox.
//
// Include properties for...
//      triggered - whether or not the box has been sprung (should be false by default)
//     intervalId - set to null
//         play() - once called, if triggered is false, console.log one new element in the lyrics array every second
//                  after the lyrics, stop the interval, set the triggered property to true, and alert POP!
//       windUp() - once called will stop the play() method and set triggered to false
//         lyrics - an array with the following elements:
//
//         "All a-...",
//         "-round the ...",
//         "mulberry...",
//         "bush, The...",
//         "monkey...",
//         "chased the...",
//         "wea-...",
//         "-sel...",
//         "The monkey...",
//         "stopped to...",
//         "pull up his...",
//         "sock,...",
//         "Pop!...",
//         "goes the...",
//         "wea-...",
//         "-sel."
//
//    Include methods for...


var jackBox = {};

//lyrics array
var lyrics = [
        "All a-...",
        "-round the ...",
        "mulberry...",
        "bush, The...",
        "monkey...",
        "chased the...",
        "wea-...",
        "-sel...",
        "The monkey...",
        "stopped to...",
        "pull up his...",
        "sock,...",
        "Pop!...",
        "goes the...",
        "wea-...",
        "-sel."
];

// console.log(lyrics);

// triggered set to true/false

// intervalId set to null

// play() if triggered = false then console log one new element in the lyrics array


// test area
var count = 0;
var max = 15;
var interval = 1000; // interval time in milliseconds
var triggered = false;
var intervalId = null;

for (var i = 0; i < lyrics.length; i++) {
    var intervalId = setInterval(function () {
        if (count >= max) {
            clearInterval(intervalId);
            console.log('all done');
        } else {
            count++;
            console.log(lyrics[i]);
        }
    }, interval)
}

function play() {
    if (triggered === false)
        console.log(lyrics[i]);
}

// play();

// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log(lyrics[i]);
//     }
// }, interval)}
// IIFE closing //
// })();