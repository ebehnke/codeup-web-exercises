"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// Second Try //

// function oddNum(input) {
//     if (input % 2 === 0) {
//         alert(Number(input) + " is an even number.");
//         return;
//     } else if (input % 2 > 0){
//         alert(Number(input) + " is an odd number.");
//     } else {
//         alert("What?????")
//     }
//     return;
// }
// function plus100(input) {
//     return input + 100;
// }
// function posNum(input) {
//     return input >= -1;
// }
//
// var yesOrNo = confirm("Would you like to enter a number?");
//
// if (yesOrNo) {
//     var userNum = prompt("Enter a number");
//     alert(oddNum(userNum));
//     // alert("You entered an odd number: " + !oddNum(Number(userNum)));
//     // alert("Your number plus 100 is: " + plus100(Number(userNum)));
//     // alert("You entered a positive number: " + posNum(Number(userNum)));
// } else if (yesOrNo !== Number(yesOrNo)) {
//     alert("Bye");
// } else {
//     alert("What the heck is this?");
// }






/* ########################################################################## */

// var question = confirm("Would you like to enter a number?");
//
// function oddNum(input) {
//     return input % 2 === 0;
// }
//
// function plus100(input) {
//     return Number(input) + 100;
// }
//
// function negOrPos(input) {
//     return input >= -1;
// }
//
// if (question) {
//     var userNum = prompt("Enter a number."); //
//     if (oddNum(userNum)) { //
//         alert("That is an even number."); //
//         alert("The number plus 100 is " + plus100(userNum)); //
//         if (negOrPos(userNum)) {
//             alert("It is a positive number");
//         } else if (!negOrPos(userNum)) {
//             alert("It is a negative number.");
//         }
//     } else if (!oddNum(userNum)) {
//         alert("That number is odd.");
//         alert("The number plus 100 is " + plus100(userNum));
//         if (negOrPos(userNum)) {
//             alert("It is a positive number");
//         } else if (!negOrPos(userNum)) {
//             alert("It is a negative number.");
//         }
//     }
// }
// else {
//     alert("Okay, bye.");
// }



/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
//
//
// function analyzeColor(input) {
//     input = prompt("Enter a color");
//         if (input === "red") {
//             alert("Strawberries are red.");
//         } else if (input === "orange") {
//             alert("Oranges are orange.")
//         } else if (input === "yellow") {
//             alert("Bananas are yellow.")
//         } else if (input === "green") {
//             alert("Grass is green.")
//         } else if (input === "blue") {
//             alert("Blueberries are blue.")
//         } else if (input === "indigo") {
//             alert("Indigo is a color.")
//         } else if (input === "violet") {
//             alert("Violets are violet.")
//         } else {
//             alert("This is not a rainbow color.")
//         }
//     return input;
// }
//
// console.log(analyzeColor());



/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */


//
// function analyzeColor(input) {
//     input = randomColor;
//     if (input === "red") {
//         alert("Strawberries are red.");
//     } else if (input === "orange") {
//         alert("Oranges are orange.")
//     } else if (input === "yellow") {
//         alert("Bananas are yellow.")
//     } else if (input === "green") {
//         alert("Grass is green.")
//     } else if (input === "blue") {
//         alert("Blueberries are blue.")
//     } else if (input === "indigo") {
//         alert("Indigo is a color.")
//     } else if (input === "violet") {
//         alert("Violets are violet.")
//     } else {
//         alert("This is not a rainbow color.")
//     }
//     return input;
// }
//
// console.log(analyzeColor());

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


// switch(randomColor) {
//     case "red":
//         alert("Strawberries are red.");
//         break;
//     case "orange":
//         alert("Oranges are orange");
//         break;
//     case "yellow":
//         alert("Bananas are yellow");
//         break;
//     case "green":
//         alert("Grass is green");
//         break;
//     case "blue":
//         alert("Blueberries are blue");
//         break;
//     case "indigo":
//         alert("Indigo is a color");
//         break;
//     case "violet":
//         alert("Violets are violet");
//         break;
//     default:
//         alert("This is not a rainbow color");
//         break;
// }


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//
// var userColor = prompt("What is your favorite rainbow color?");
//
// function analyzeColor() {
//     switch(userColor) {
//         case "red":
//             alert("Strawberries are red.");
//             break;
//         case "orange":
//             alert("Oranges are orange");
//             break;
//         case "yellow":
//             alert("Bananas are yellow");
//             break;
//         case "green":
//             alert("Grass is green");
//             break;
//         case "blue":
//             alert("Blueberries are blue");
//             break;
//         case "indigo":
//             alert("Indigo is a color");
//             break;
//         case "violet":
//             alert("Violets are violet");
//             break;
//         default:
//             alert("This is not a rainbow color");
//             break;
//     return userColor;
//     }
// }
//
// console.log(analyzeColor());

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// var numbers = [0, 1, 2, 3, 4, 5];
// var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
//
//
// console.log(randomNumber);
// function calculateTotal(input) {
//     input = randomNumber;
//     switch(input){
//         case 0:
//             alert("0, no discount");
//             break;
//         case 1:
//             alert("1, 15% off");
//             break;
//         case 2:
//             alert("2, 25% off");
//             break;
//         case 3:
//             alert("3, 35% off");
//             break;
//         case 4:
//             alert("4, 50% off");
//             break;
//         case 5:
//             alert("5, everything is free");
//             break;
//         default:
//             alert("Error.");
//             break;
//     }
//     return input;
// }
//
// calculateTotal();



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

// var luckyNumber = Math.floor(Math.random() * 6);
// var totalBill = prompt("How much was your bill?");
//
//
// console.log(luckyNumber);
// function calculateTotal(input) {
//     input = luckyNumber;
//     switch(input){
//         case 0:
//             alert("0, no discount.");
//             break;
//         case 1:
//             alert("1, 15% off. You pay: $" + (totalBill * .85).toFixed(2));
//             break;
//         case 2:
//             alert("2, 25% off. You pay: $" + (totalBill * .75).toFixed(2));
//             break;
//         case 3:
//             alert("3, 35% off. You pay: $" + (totalBill * .65).toFixed(2));
//             break;
//         case 4:
//             alert("4, 50% off. You pay $" + (totalBill * .5).toFixed(2));
//             break;
//         case 5:
//             alert("5, everything is free");
//             break;
//         default:
//             alert("Error.");
//             break;
//     }
//     return input;
// }
//
// calculateTotal();


//////////////////////////////////////////////////////////////////


// ================================= CONDITIONALS BONUSES
// __
// Write a function makeJustinMessage() that returns the string "It's Justin!" if the input to the function is the string "justin" and "It's not Justin" otherwise.
//     If the input contains white space or numbers, return the string "INVALID INPUT".
//

// function makeJustinMessage(input) {
//     if (input === "justin") {
//         console.log("It's justin");
//         return;
//     } else if (input !== input.trim() || !isNaN) {
//         console.log("INVALID INPUT");
//         return;
//     } else {
//         console.log("It's not Justin");
//         return;
//     }
// }
//
  // /\d/ will filter out numbers??

// makeJustinMessage("asdf"); // cant get numbers to work for invalid input

//     __
// Write a function that returns a string describing the action to be taken for a given street light color input. For example, if the function input is the string "red", a message like "STOP!" could be returned from the function. Input should not be case sensitive.
//

// function stopLight(input) {
//     if (input === "red") {
//         console.log("Stop!");
//         return;
//     } else if (input === "yellow") {
//         console.log("Slow!");
//         return;
//     } else if (input === "green") {
//         console.log("Go!");
//         return;
//     } else {
//         console.log("error");
//         return;
//     }
// }
//
// stopLight("green"); // cannot figure out how to ignore case

//     __
// Create a function that simply returns an input as an output. If no input is passed to the function when it is called, return the string "no input provided."
//

// function parrot(input) {
//     return console.log(input) || console.log("no input provided");
// }
// parrot("12");  //brain wont work


// __
// Create a function that returns a unique message string for a given digit input. If the input is not a single digit, return the string "too many digits". If the input is not a number, return "invalid input". String digits like "1" or "9" are valid inputs.
//
// function luckyNumber(input) {
//     switch (input) {
//         case 0:
//             console.log("zero");
//             break;
//         case 1:
//             console.log("one");
//             break;
//         case 2:
//             console.log("two");
//             break;
//         case (input >= 10):
//             console.log("too many digits");
//             break;
//         default:
//             console.log("What?");
//             break;
//     }
// }
// luckyNumber(12); // ??? double digits??


//     __
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
//     Catch any invalid inputs (not indicating a day of the week).
// For each day, allow the user to enter the abbreviated day (e.g. 'Monday', 'monday', 'Mon', or 'mon')
//
// function favDay(input) {
//     input = prompt("What is your favorite day of the week?");
//     if (input === "Monday" || input === "monday" || input === "mon") {
//         console.log("monday");
//         return;
//     } else if (input === "Tuesday") {
//         console.log("tuesday");
//         return;
//     } else {
//         console.log("invalid");
//         return;
//     }
// }
//
// favDay();

// __
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator
//

// function num(input) {
//     input = prompt("Enter a number");
//     if (isNaN(input) || input != +input) {
//         console.log("This isn't a number");
//     } else {
//         console.log("Correct");
//     }
// }
//
// num(); // cant figure out whitespace giving correct reason

// __
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months
//

// function season(input) {
//     input = prompt("Enter a season");
//     if (input === "Spring") {
//         var favSpringMonth = prompt("Choose a month from spring");
//         if (favSpringMonth === "March") {
//             alert("March has 31 days.");
//         } else if (favSpringMonth === "April") {
//             alert("April has 30 days.");
//         } else if (favSpringMonth === "May") {
//             alert("May has 31 days.");
//         } else {
//             alert("????");
//         }
//
//     } else if (input === "Summer") {
//         var favSummerMonth = prompt("Choose a month from summer");
//         if (favSummerMonth === "June") {
//             alert("June has 30 days");
//         } else if (favSummerMonth === "July") {
//             alert("July has 31 days");
//         } else if (favSummerMonth === "August") {
//             alert("August has 30 days");
//         } else {
//             alert("????");
//         }
//     } else {
//         alert("That's not a season");
//     }
// }
//
// season();




// **************************************************************************
/// convert input to lower case so you only have to make one comparison string.toLowerCase.subString(0, 3) ///////////////////




// __
// GOLD STAR BONUS
//
// Create a distance-unit-conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//
//     Prompt the user for a second unit of measurement to convert to.
//
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
//
// Use these conversion functions to make the correct unit conversion
//
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//
//     DOUBLE GOLD STAR BONUS
//
//     Allow unit conversion to metric system units
//
// function inchestToFeet(input) {
//     return alert((input * 12).toFixed(2) + " is how many stone");
// }
//
// function poundsToStone(input) {
//     return alert("In stone, that is: " + (input * 0.0714286).toFixed(2));
// }
//
// var measurement = prompt("Enter unit you would like to convert");
//
// if (measurement === "pounds") {
//     var lbsNum = prompt("How many pounds would you like to convert?");
//     poundsToStone(lbsNum);
// }