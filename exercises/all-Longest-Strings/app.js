// Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {
    let temp;
    let arr = [];
    
   inputArray.forEach(function(item){
    temp =  Math.max(item.length)
    })

    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length === temp){
            arr.push(inputArray[i]);
        }    
    }
    return arr;
}

inputArray = ["aba", "aa", "ad", "vcd", "aba"]; //the output should be ["aba", "vcd", "aba"]
console.log(allLongestStrings(inputArray)); // = ["aba", "vcd", "aba"];