"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userFavColor = prompt("What is your favorite color?");

alert("Wow, " + userFavColor + " is my favorite color too!");

// // Blockbuster
var vid1 = prompt("How long did you rent the first movie for?");
var vid2 = prompt("How long did you rent the second movie for?");
var vid3 = prompt("How long did you rent the third movie for?");
var rentalCost = vid1 * 3 + vid2 * 3 + vid3 * 3;
alert("Your total cost is $" + rentalCost + ".00.");
// ** should create variable for cost per video / use rentalcost.toFixed(2) instead of ".00". / be more specific with variables
//
// Overpaid guy
var googleHrs = prompt("How many hours did you work for Google this week?");
var amazonHrs = prompt("How many hours did you work for Amazon this week?");
var fbookHrs = prompt("How many hours did you work for Facebook this week?");
var totalPay = googleHrs * 400 + amazonHrs * 380 + fbookHrs * 350;
alert("Your weekly income was $" + totalPay + ".00.");
// create variables for payrate too

// // Class enrollment
var fullClass = confirm("Is this class full?");
var conflictingClass = confirm("Does the student have another class during this time?");
var enrolled = (fullClass == false && conflictingClass == false);
alert("Enrollment for class is " + enrolled + ".");

// Product Offer
var itemNumber = prompt("How many items did the customer purchase?");
var offerExpired = confirm("Is the offer expired?");
var premiumMember =  confirm("Is the customer a premium member?");
var validOffer = (itemNumber >= 3 && offerExpired == false || (offerExpired == false && premiumMember == true));
alert("The offer can be used: " + validOffer + ".");
