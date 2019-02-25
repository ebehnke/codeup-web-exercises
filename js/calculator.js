// IIFE / Remove when finished coding //
// (function(){
"use strict";

/* Rules:
    - no eval() function
 */


// Get button IDs from HTML
var clr = document.getElementById('C');
var num1 = document.getElementById('1');
var num2 = document.getElementById('2');
var num3 = document.getElementById('3');
var num4 = document.getElementById('4');
var num5 = document.getElementById('5');
var num6 = document.getElementById('6');
var num7 = document.getElementById('7');
var num8 = document.getElementById('8');
var num9 = document.getElementById('9');
var num0 = document.getElementById('0');
var plus = document.getElementById('+');
var minus = document.getElementById('-');
var multiply = document.getElementById('*');
var divide = document.getElementById('/');
var equals = document.getElementById('=');
var input1 = document.getElementById('firstNum');
var input2 = document.getElementById('secondNum');
var operatorInput = document.getElementById('operator');

// Assign click functions
var num1ButtonClick = function(e) {
        console.log("you clicked: ", num1.innerHTML);
        var text = document.getElementById('firstNum');
        text.value += +1;
};
var num2ButtonClick = function(e) {
    console.log("you clicked: ", num2.innerHTML);
    var text = document.getElementById('firstNum');
    text.value += +2;
};
var num3ButtonClick = function(e) {
    console.log("you clicked: ", num3.innerHTML);
    var text = document.getElementById('firstNum');
    text.value += +3;
};
var num4ButtonClick = function(e) {
    console.log("you clicked: ", num4.innerHTML);
    var text = document.getElementById('firstNum');
    text.value += +4;
};
var num5ButtonClick = function(e) {
    console.log("you clicked: ", num5.innerHTML);
    var text = document.getElementById('firstNum');
    text.value += +5;
};
var num6ButtonClick = function(e) {
    console.log("you clicked: ", num6.innerHTML);
    var text = document.getElementById('firstNum');
    text.value += +6;
};
var num7ButtonClick = function(e) {
    console.log("you clicked: ", num7.innerHTML);
    var text = document.getElementById('firstNum');
    text.value += +7;
};
var num8ButtonClick = function(e) {
    console.log("you clicked: ", num8.innerHTML);
    var text = document.getElementById('firstNum');
    text.value += +8;
};
var num9ButtonClick = function(e) {
    console.log("you clicked: ", num9.innerHTML);
    var text = document.getElementById('firstNum');
    text.value += +9;
};
var num0ButtonClick = function(e) {
    console.log("you clicked: ", num0.innerHTML);
    var text = document.getElementById('firstNum');
    text.value += +0;
};
var plusButtonClick = function(e) {
    console.log("you clicked: ", plus.innerHTML);
    var text = document.getElementById('operator');
    text.value = '+';
    console.log(input1.value);
    input2.value = input1.value;
    input1.value = "";
};
var minusButtonClick = function(e) {
    console.log("you clicked: ", minus.innerHTML);
    var text = document.getElementById('operator');
    text.value = '-';
    console.log(input1.value);
    input2.value = input1.value;
    input1.value = "";
};
var multiplyButtonClick = function(e) {
    console.log("you clicked: ", multiply.innerHTML);
    var text = document.getElementById('operator');
    text.value += '*';
    console.log(input1.value);
    input2.value = input1.value;
    input1.value = "";
};
var divideButtonClick = function(e) {
    console.log("you clicked: ", divide.innerHTML);
    var text = document.getElementById('operator');
    text.value += '/';
    console.log(input1.value);
    input2.value = input1.value;
    input1.value = "";
};
var clrButtonClick = function(e) {
    console.log("you clicked: ", clr.innerHTML);
    input1.value = "";
    input2.value = "";
    operatorInput.value = "";
};
var equalsButtonClick = function(e) {
    console.log("you clicked: ", equals.innerHTML);
    if (operatorInput.value === '+') {
        input1.value = +input2.value + +input1.value;
        input2.value = '';
        operatorInput.value = '';
    } else if (operatorInput.value === '-') {
        input1.value = +input2.value - +input1.value;
        input2.value = '';
        operatorInput.value = '';
    } else if (operatorInput.value === '*') {
        input1.value = +input2.value * +input1.value;
        input2.value = '';
        operatorInput.value = '';
    } else if (operatorInput.value === '/' && input1.value === '0') {
        console.log("I'm sorry Dave. I'm afraid I can't do that.");
    } else if (operatorInput.value === '/') {
        input1.value = +input2.value / +input1.value;
        input2.value = '';
        operatorInput.value = '';
    }
};

// Add click functions to buttons
num1.addEventListener('click', num1ButtonClick, false);
num2.addEventListener('click', num2ButtonClick, false);
num3.addEventListener('click', num3ButtonClick, false);
num4.addEventListener('click', num4ButtonClick, false);
num5.addEventListener('click', num5ButtonClick, false);
num6.addEventListener('click', num6ButtonClick, false);
num7.addEventListener('click', num7ButtonClick, false);
num8.addEventListener('click', num8ButtonClick, false);
num9.addEventListener('click', num9ButtonClick, false);
num0.addEventListener('click', num0ButtonClick, false);
plus.addEventListener('click', plusButtonClick, false);
minus.addEventListener('click', minusButtonClick, false);
multiply.addEventListener('click', multiplyButtonClick, false);
divide.addEventListener('click', divideButtonClick, false);
clr.addEventListener('click', clrButtonClick, false);
equals.addEventListener('click', equalsButtonClick, false);

// IIFE closing //
// })();