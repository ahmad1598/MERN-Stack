var ask = require('readline-sync');

var number1 = ask.question('What is your first number? ');
var number2 = ask.question('What is your second number? ');
var operation = ask.question('Please enter the operation to perform: add, sub, mul, div ');

    switch(operation){
        case 'add':
            console.log('The result is: ' + number1 + ' + ' + number2  + ' = ' + (number1-(-number2)));
            break;
        case 'sub':
            console.log('The result is: ' + number1 + ' - ' + number2  + ' = ' + (number1 - number2));
            break;
        case 'mul':
            console.log('The result is: ' + number1 + ' * ' + number2  + ' = ' + (number1 * number2));
        //    result = number1 * number2;
            break;
        case 'div':
            console.log('The result is: ' + number1 + ' / ' + number2  + ' = ' + (number1 / number2));
        //    result = number1 / number2;
            break;
        default:
            "You must put one of those four operation..."
    }

