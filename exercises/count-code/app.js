// Write a function that returns the number of times that the string "code" appears anywhere in 
// the given string, except we'll accept any 
// letter for "d", so "cope" and "cooe" would also count.
// Return the count, including any substitutions for the letter "d".


// first way to solve it
function countCode(string) {  
    count = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] + string[i+1]+string[i+3] === 'coe'){
            count++;
        }
    }
    return count;
}

// another way to solve this problem
function countCode(string) {
   return string.match(/co.e/g).length

  }


// //Output: 
console.log(countCode("aaacodebbb")) //returns 1
console.log(countCode("codexxcode")) //returns 2
console.log(countCode("cozexxcope")) //returns 2