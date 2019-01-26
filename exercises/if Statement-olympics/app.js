
//----------------------- Preliminaries --------------------------------------------

// Write an if statement that prints "is greater than" if 5 is greater than 3
if(5 > 3){
    console.log('5 is greater than 3');
}
// Write an if statement that prints "is the length" if the length of "cat" is 3
if("cat".length > 3){
    console.log('the cat is the length of 3');
}

// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
if("cat" === "dog"){
    console.log('same');
} else{
    console.log('no the same');
}
//---------------------------------------------------------------------------------


//----------------------- Bronze Medal --------------------------------------------

//Using the below object, write an if statement that prints <theNameOfThePersonInObject> 
//is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.

var person = {
    name: "Bobby",
    age: 12
}

if(person.age > 17){
    console.log(`${person.name} is allowed to go to the movie.`);
} else{
    console.log('You are not older than 18.');
}

//Using that same object, only allow them into the movie if their name starts with "B"
if(person.name.charAt(0) === 'B'){
    console.log(`${person.name} is allowed to go to the movie.`);
}


//Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.
if(person.name.charAt(0) === 'B' && person.age > 17){
    console.log(`${person.name} is allowed to go to the movie.`);
}


//---------------------------------------------------------------------------------


//----------------------- Silver Medal --------------------------------------------


// Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or
// "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
if(1 === '1'){
    console.log('strict');
} else if( 1 == '1'){
    console.log('loose');
}else{
    console.log('not equal at all');
}
// Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4
// OR!!! 3 * 4 is greater than 10 and 5 plus 10 is greater than 10.

if((1 <= 2 && 2 === 4) || (((3 * 4) > 10)  && ((5 + 10) > 10))){
    console.log('yes');
}


//---------------------------------------------------------------------------------


//----------------------- Gold Medal --------------------------------------------

//Write an if statement that checks to see if "dog" is a string
if(typeof('dog') === string){
    console.log('Yes, it is String');
}

//Write an if statement that checks to see if "true" is a boolean
if(typeof(true)=== boolean){
    console.log('Yes, it is a Boolean');
}

//Write an if statement that checks to see if a variable has been defined or not
if(variable){
    console.log('The variable has been defined.');
} else{
    console.log('The variable has not been defined.');
}

// Write an if statement comparing letters to numbers using < and >. 
//Try to figure out what letters are going to be "greater than" other numbers or letters. For example: is "s" greater than 12?
var char = 's';
if(char.charCodeAt() > 12){
    console.log(char + 'is greater than 12');
}else{
    console.log(char + 'is less than 12');
}

//Write a ternary statement that console.logs whether a number is odd or even.
var number = 10;
number % 2 === 0 ? (number+' is an even number') : (number + 'is an odd number.');
