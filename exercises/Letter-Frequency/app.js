// Find the frequency of all characters in a given word or phrase, and print them to the console.

// Contain the characters and their counts within an object.
// Each character will be its own key
// Each value will be the character's frequency.
// Example:

const phrase = 'slimy smelly solution';

arrayIndex = (str) => {
let strObj = {};
for(let item of str){
    if(strObj[item]){
        strObj[item]++;
    } else{
        strObj[item] = 1;
    }
} return strObj;
}

console.log(arrayIndex(phrase));

//Output: { s: 3, l: 4, i: 2, m: 2, y: 2, ' ': 2, e: 1, o: 2, u: 1, t: 1, n: 1 }


//Extra Credit
// Output the original string with all duplicate characters removed (i.e. "slimy eoutn").
arrayIndex = (str) => {
    let strObj = {};
    let arr= [];
    for(let item of str){
        if(!strObj[item]){
           strObj[item] = 1;
           arr.push(item);
        } else{
            strObj[item]++;
        }

    } 
    return arr.join('');
    }
    
console.log(arrayIndex(phrase)); //"slimy eoutn" 


//Output the same object, sorted by frequency.
 arrayIndex = (str) => {
    let strObj = {};
    let arr = [];
    for(let item of str){
        if(strObj[item]){
            strObj[item]++;
        } else{
            strObj[item] = 1;
        }
    }

    for(let item in strObj){
            arr.push({
                'character':item,
                'frequency':strObj[item]
            });
    }
    return arr.sort((a,b) => b.frequency - a.frequency);
    
}
    
console.log(arrayIndex(phrase)); // sorted by most frequency