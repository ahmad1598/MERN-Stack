// Implement all of the listed String Methods below using at least 3 unique Functions.

// String Methods

// .concat()
// .indexOf()
// .lastIndexOf()
// .match()
// .replace()
// .slice()
// .split()
// .toLowerCase()
// .toUpperCase()

let str = 'hello world';
let str1 = "Ahmad";
let str2 = "Rasoulpour";
let longStr = 'Hi, my name is Ahmad. I love coding.'
let regex = /[A-Z]/g;
let regex2 = /a/gi;
function myStringMethods(str1,str2){
    
    //concat
    console.log(str1.concat(str2)); // AhmadRasoulpour
    //indexOf
    console.log(str1.indexOf('m')); // 2
    //lastIndexOf
    console.log(str2.lastIndexOf('u')); //8
    //concat - match
    console.log((str1.concat(str2)).match(regex)); // ["A","R"]
    //concat - replace
    console.log((str1.concat(str2).replace(regex2 , ''))); // will replace all 'a' with ''
    //slice
    console.log(str2.slice(2)); // soulpour
    console.log(str.slice(6)); // world

    //split
    console.log(longStr.split('')); //split by each character ['H' , 'i' , ',' , 'm' , 'y' , 'n' , 'a' , 'm' , 'e' , 'i' , 's' , 'A' , 'h' , 'm' , 'a' , 'd' , ..... ]
    console.log(longStr.split(' ')); // split by each space.  ['Hi,' , 'my' , 'name' , 'is' , 'Ahmad.' , 'I' , 'love' , 'coding']
    console.log(longStr.split(',')); // split by comma. ['Hi' , 'my name is Ahmad. I love coding.']

    //toLowerCase
    console.log(longStr.toLowerCase()); // make all character LowerCase
    //toUpperCase
    console.log(longStr.toUpperCase()); // make all character UpperCase

}
