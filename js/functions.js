"use strict";

 // * TODO:
 // * Create a function called 'sayHello' that takes a parameter 'name'.
 // * When called, the function should return a message that says hello to the passed in name
 // * Example
 // * > sayHello("codeup") // returns "Hello, codeup!"
 //
 //    function sayHello(name) {
 //        return "Hello, " + name + ".";
 //    }

    // console.log(sayHello("erik"));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
    //
    // var helloMessage = sayHello("erik");
    // // console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

    // var myName = "Erik";
    // console.log(sayHello(myName));

// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
    //
    // function isTwo(num) {
    //    return num === 2;
    // }
    //
    // console.log(isTwo(2));
    // console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// //
//     function calculateTip(tipPercentage, totalBill) {
//         return tipPercentage * .01 * totalBill;
// }
//         console.log(calculateTip(10, 60).toFixed(2));


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
    // var totalBill = prompt("How much was your bill?");
    // var tipPercentage = prompt("What percentage would you like to tip?");

    // function calculateTip(tipPercentage, totalBill) {
    //     var totalBill = prompt("How much was your bill?");
    //     var tipPercentage = prompt("What percentage would you like to tip?");
    //     return tipPercentage * .01 * totalBill;
    // }
    //
    // alert("The total tip is $" + calculateTip());

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

//     function applyDiscount(listPrice, discountPercentage) {
//         return listPrice - listPrice * discountPercentage;
// }
//     console.log(applyDiscount(100, .2));


// BONUS ///////////////////////

// Make a function named isOdd(number)

// function isOdd(testNumber) {
//     return (testNumber % 2) == 1;
// }
//
// console.log("The number " + Number(isOdd())+ " is odd: "+ isOdd(1));
// console.log(isOdd(2));
// console.log(isOdd(3));
// console.log(isOdd(4));
// console.log(isOdd(5));
// console.log(isOdd(6));
// console.log(isOdd(7));
// console.log(isOdd(8));
// console.log(isOdd(9));
// console.log(isOdd(0));

// Make a function named isEven(number)

// function isEven(testNumber) {
//     return testNumber % 2 == 0;
// }
//
// console.log("The number " + Number(isEven())+ " is odd: "+ isEven(1));
// console.log(isEven(2));
// console.log(isEven(3));
// console.log(isEven(4));
// console.log(isEven(5));
// console.log(isEven(6));
// console.log(isEven(7));
// console.log(isEven(8));
// console.log(isEven(9));
// console.log(isEven(0));


// Make a function named identity(input) that returns the input exactly as provided.

// function identity(input) {
//     return input;
// }
//
// console.log(identity(2+2));

//     Make a function named isFive(input)

// function isFive(input) {
//     return 5;
// }
//
// console.log(isFive());

// Make a function named addFive(input) that adds five to some input.

// function addFive(input) {
//     return input + 5;
// }
//
// console.log(addFive(1));

//     Make a function named isMultipleOfFive(input)

// function isMultipleOfFive(input) {
//     return input % 5 == 0;
// }
//
// console.log(isMultipleOfFive(1));
// console.log(isMultipleOfFive(2));
// console.log(isMultipleOfFive(5));
// console.log(isMultipleOfFive(10));

// Make a function named isThree(input)

// function isThree(input) {
//     return input = 3;
// }
//
// console.log(isThree(4));

// Make a function named isMultipleOfThree(input)
//
// function isMultipleOfThree(input) {
//     return input % 3 == 0;
// }
//
// console.log(isMultipleOfThree(1));
// console.log(isMultipleOfThree(3));
// console.log(isMultipleOfThree(6));

// Make a function named isMultipleOfThreeAndFive(input)

// function isMultipleOfThreeAndFive(input) {
//     return input % 5 == 0 && input % 3 == 0;
// }
//
// console.log(isMultipleOfThreeAndFive(15));
// console.log(isMultipleOfThreeAndFive(30));
// console.log(isMultipleOfThreeAndFive(5));
// console.log(isMultipleOfThreeAndFive(3));


// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
//
// function isMultipleOf(target, n) {
//     return !Boolean(target % n);
// }
//
// console.log(isMultipleOf(100, 3));

// Make a function named isTrue(boolean)

// function isTrue(boolean) {
//     return Boolean(true);
// }
//
// console.log(isTrue(5));

// Make a function named isFalse(boolean)

// function isFalse(boolean) {
//     return Boolean(!true);
// }
//
// console.log(isFalse(true));
//
// Make a function named isTruthy(input), remember that values other than true will behave like true

// function isTruthy(input) {
//     return input = !true = true;
// }
//
// console.log(isTruthy("adsf"));
// console.log(isTruthy(5));

// Make a function named isFalsy(input), remember that values other than false behave like false



// Make a function named isVowel(letter)

// function isVowel(letter) {
//     return letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u";
// }
//
// console.log("b is a vowel " + isVowel("b"));
// console.log("a is a vowel " + isVowel("a"));


// Make a function named isConsonant(letter)
//
// function isConsonant(letter) {
//     return letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u";
// }
//
// console.log("b is a consonant " + isConsonant("b"));
// console.log("a is a consonant " + isConsonant("a"));

// Make a function named isCapital(letter)

// function isCapital(letter) {
//     return letter.toUpperCase();
// }
//
// console.log(isCapital("asdf"));

// Make a function named isLowerCase(letter)

// function isLowerCase(letter) {
//     return letter.toLowerCase();
// }
//
// console.log(isLowerCase("ASDFfasd"));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter

// function hasLowerCase(string) {
//     return string == string.toLowerCase == 1;
// }
//
// console.log(hasLowerCase("a"));

// Make a function named isSpace(letter) that returns if a character is a space character

//  function isSpace(letter) {
//      return letter == " ";
//  }
//
// console.log(isSpace(" "));

// Make a function named isZero(number)

// function isZero(number) {
//     return number === 0;
// }
//
// console.log(isZero(1));
// console.log(isZero(0));

// Make a function named notZero(input) that returns true if the input is not zero

// function notZero(input) {
//     return input !== 0;
// }
//
// console.log(notZero(0));
// console.log(notZero(2));

// Write a function named lowerCase(string)

// function lowerCase(string) {
//     return string.toLowerCase();
// }
//
// console.log(lowerCase("asdfASDF"));

// Write a function named double(n) that returns a number times two

// function double(n) {
//     return n * 2;
// }
//
// console.log(double(5));

// Write a function named triple(n) that returns a number times 3
//
// function triple(n) {
//     return n * 3;
// }
//
// console.log(triple(5));

// Write a function named quadruple(n) that returns a number times 4

// function quadruple(n) {
//     return n * 4;
// }
//
// console.log(quadruple(5));

// Write a function named half(n) that returns 1/2 of the provided input

// function half(n) {
//     return n / 2;
// }
//
// console.log(half(5));

// Write a function named subtract(a, b) that returns a minus b

// function subtract(a, b) {
//     return a - b;
// }
//
// console.log(subtract(5, 1));

// Write a function named multiply(a, b) that returns the product of a times b

// function multiply(a, b) {
//     return a * b;
// }
//
// console.log(multiply(5, 5));

// Write a function named divide(a, b) that returns a divided by b

// function divide(a, b) {
//     return a / b;
// }
//
// console.log(divide(10, 2));

// Write a function named remainder(a, b) that returns the remainder after dividing a by b

// function remainder(a, b) {
//     return a % b;
// }
//
// console.log(remainder(12, 5));

// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b

// function modulo(a, b) {
//     return a % b;
// }
//
// console.log(modulo(12, 5));

// Write a function named cube(n) that returns n * n * n

// function cube(n) {
//     return Math.pow(n, 3);
// }
//
// console.log(cube(5));

// Write a function named squareRoot(n) that returns the square root of the input

// function squareRoot(n) {
//     return Math.sqrt(n);
// }
//
// console.log(squareRoot(81));

// Write a function named cubeRoot(n) that returns the cube root of the input

// function cubeRoot(n) {
//     return Math.cbrt(n);
// }
//
// console.log(cubeRoot(64));

// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.

// function invertSign(number) {
//     return number * -1 || false;
// }
//
// console.log(invertSign(5));
// console.log(invertSign(0));
// console.log(invertSign("asdf"));


// Write a function named degreesToRadians(number)

// function degreesToRadians(number) {
//     return Math.sin(number);
// }
//
// console.log(5 *(Math.PI / 180)); // radians
// console.log(5 *(180 / Math.PI)); // degrees
//
// console.log(degreesToRadians(5));

// Write a function named radiansToDegrees(number)



// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//
// function isBlank(input) {
//     return input = " ", "    ";


//     Make a function named trim(string) that removes empty spaces before and after the input.


// function trim(string) {
//     return string.trim();
// }
//
// console.log(trim("            asd asd                     "));

//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value

// function areEqaul(input1, input2) {
//     return input1 == input2;
// }
//
// console.log(areEqaul(2, "2"));

// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.

// function areIdentical(input1, input2) {
//     return input1 === input2;
// }
//
// console.log(areIdentical(2, "2"));

//     Make a function named not(input) returns the input with a flipped boolean

// function not(input) {
//     return input === !Boolean;
// }
//
// console.log(not(false));

// Make a function named notNot(input) that the negation of the negation of the input.

// function notNot(input) {
//     return input === !!Boolean;
// }
//
// console.log(notNot(false));

//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND

// function and(predicate1, predicate2) {
//     return;
// }



// Make a function named or(predicate1, predicate2) that returns the logical operation of OR

// function or(predicate1, predicate2) {
//     return ;
// }

// Write a function called reverseString(string) that reverses a string

function reverseString(string) {
    return reverse(string);
}

console.log(reverseString("asdf"));

// Make a function named absoluteValue(number) that returns the absolute value of a number.



//     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.