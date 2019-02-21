//Write a function that accepts a string as an argument and returns true if 
//the string is a palindrome (the string is the same forward and backward), or false if it is not.

const isPalindrome = str => {
    let regex = /[a-zA-Z]*/g;
    let found = str.match(regex).join('').toLowerCase();
    let strMatch = [...found].reverse().join('').toLowerCase();
    return strMatch === found ? true : false;
}

 console.log(isPalindrome("Star Rats!"));  // true
 console.log(isPalindrome("palindrome"));  // false
 console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));  // true


 module.exports = isPalindrome;