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