// Given a string, remove any duplicate letters.

// Example:
// var input = "bookkeeper larry";

// Output: "bokepr lay"


function removeDuplicate(str){
	let arr = str.split('');
    var result = [];
    for (var char in arr)
        if(result.indexOf(arr[char]) == -1) result.push(arr[char])
    return  result.join('');
}



//Create a function using regular expressions that remove all vowels
function removeVowels(str){
	let reg = /[aeiou]/gi;
	return str.replace(reg , '');
}


//Create a function that randomly removes a letter.
function removeRandomly(str){
	let rnd = Math.floor((Math.random() * str.length) + 1); // this line will create a random number between 0 to str.length
    console.log(str.replace(str[rnd] , 'X')); // just for making sure that it will remvoe a character, I put a 'X' for that random character
    //console.log(str.replace(str[rnd] , '')); // this line is the one that will remove that character completely
}

//Create a function that scrambles the original string.
function scrambles(str){
    let arrSplit = str.split('');
    let first = str.slice(0,arrSplit.length / 2);
    let second = str.slice(arrSplit.length/2);
    return second.concat(first);
}