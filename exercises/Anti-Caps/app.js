// ------------------------------Anti Caps ------------------------

// Write a function called antiCaps, which accepts a string and manipulates it as follows.

// Uppercase characters will become lowercase.
// Lowercase characters will become uppercase.

function antiCaps(str){
    let newStr = '';
for(let item of str){
    if(item === item.toUpperCase()){
        newStr += item.toLowerCase();
    } else{
        newStr += item.toUpperCase();
    }
}
return newStr;
}

console.log(antiCaps('Hello'))  // hELLO
console.log(antiCaps('racEcar'))  // RACeCAR
console.log(antiCaps('bAnAnA'))  // BaNaNa



// Extra credit
// Have the function return double letters if originally uppercase

function antiCaps(str){
    let newStr = '';
for(let item of str){
    if(item === item.toUpperCase()){
        newStr += item.toLowerCase();
        newStr += item.toLowerCase();
    } else{
        newStr += item.toUpperCase();
    }
}
return newStr;
}
