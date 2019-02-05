var ask = require('readline-sync');

var number1 = ask.question('What is your first number? ');
var number2 = ask.question('What is your second number? ');
var operation = ask.question('Please enter the operation to perform: add, sub, mul, div ');

switch(operation,number1,number2){
    case 'add':
        (number1,number2) => {console.log( number1-(-number2));}
        break;
    case 'sub':
        (number1,number2) => {return number1 - number2;}
        break;
    case 'mul':
        (number1,number2) => {return number1 * number2;}
        break;
    case 'div':
        (number1,number2) => {return number1 / number2;}
        break;
    default:
        "You must put one of those four operation..."

}

// // ---------------------------------ADDITION-------------------------------------------- //
// console.log(' ----------------------------------------------------------------------------- ');
// console.log('*-- ENTER YOUR TWO NUMBER FOR ADDITION --*')
// var number1 = ask.question('What is your first number? ');
// var number2 = ask.question('What is your second number? ');

// //A function that adds two numbers and returns the result
// function add(number1,number2){
//     return number1-(-number2);
// }
// console.log(number1 + ' + ' + number2 + ' = ' + add(number1,number2));

// // ----------------------------------MULTIPLICATION------------------------------------------- //
// console.log(' ----------------------------------------------------------------------------- ');
// console.log('*-- ENTER YOUR TWO NUMBER FOR MULTIPLICATION --*')
// var number1 = ask.question('What is your first number? ');
// var number2 = ask.question('What is your second number? ');
// //A function that multiplies two numbers and returns the result
// function multiply(number1,number2){
//     return number1 * number2;
// }
// console.log(number1 + ' * ' + number2 + ' = ' + multiply(number1,number2));

// // -------------------------------------DIVISION---------------------------------------- //
// console.log(' ----------------------------------------------------------------------------- ');
// console.log('*-- ENTER YOUR TWO NUMBER FOR DIVISION --*')
// var number1 = ask.question('What is your first number? ');
// var number2 = ask.question('What is your second number? ');
// //A function that divides two numbers and returns the result
// function division(number1,number2){
//     return number1 / number2;
// }
// console.log(number1 + ' / ' + number2 + ' = ' + division(number1,number2));

// // -------------------------------------subtraction---------------------------------------- //
// console.log(' ----------------------------------------------------------------------------- ');
// console.log('*-- ENTER YOUR TWO NUMBER FOR SUBTRACTION --*')
// var number1 = ask.question('What is your first number? ');
// var number2 = ask.question('What is your second number? ');
// //A function that divides two numbers and returns the result
// function subtraction(number1,number2){
//     return number1 - number2;
// }
// console.log(number1 + ' - ' + number2 + ' = ' + subtraction(number1,number2));