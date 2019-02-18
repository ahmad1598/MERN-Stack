

var ask = require("readline-sync");

var name = ask.question('What is your name?');

var lastName = ask.question("What about your last name?");

console.log('Hi, ' + name.toUpperCase() + " " + lastName.toUpperCase() + " nice to meet you.");

console.log(name.concat(lastName) + ' has' + ' : ' + (name.length + lastName.length) + ' characters');

var message = ask.question('what is your message to whoever wants to be like you? (more than 20 character)');

console.log("Last half of the message is: " + message.slice(message.length / 2));

var msgLength = ask.question('give me a number that I can show the message from that number to you?');

console.log("So, your message from number " + msgLength + " is: " + message.slice(msgLength));