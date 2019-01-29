//Make a functions that will return any given string into all caps followed by the same string all lowercase.

//capilizeAndLowercase("Hello") // => "HELLOhello"

function capilizeAndLowercase(str){
    return str.toUpperCase() + str.toLowerCase();
}

//Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
//findMiddleIndex("Hello") // => 2
//findMiddleIndex("Hello World") // => 5

function findMiddleIndex(str){
    return Math.floor(str.length / 2);

}

//Make a function that uses slice() and your other functions you've written to return the first half of the string

//returnFirstHalf("Hello") // => "He"
//returnFirstHalf("Hello World") // => "Hello"

function returnFirstHalf(str){
    return str.slice(0 , str.length / 2);
}

//Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.

//capilizeAndLowercase("Hello") // => "HEllo"
//capilizeAndLowercase("Hello World") // => "HELLO world"

function capilizeAndLowercase(str){
    let firstHalf = str.slice(0 , str.length / 2);
    let secondHalf = str.slice(str.length / 2);
    return firstHalf.toUpperCase() + secondHalf.toLowerCase();
}


//Optional Code Challenge (This one is a step up in difficulty):

// Make a function that takes any string and capitalizes any character that follows a space.

function capitalize(str){
    let space = str.split(' ');
	for(let i = 0; i< space.length; i++){
		space[i] = space[i].split('');
		space[i][0] = space[i][0].toUpperCase();
		space[i] = space[i].join('');
}
return space.join(' ');
}
