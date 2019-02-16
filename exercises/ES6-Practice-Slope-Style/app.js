// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {  
   return [...animals];
}

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]


// Write a function that returns a food object with the array names as properties using Object Literals:


function combineFruit(fruit, sweets, vegetables){
    return {fruit,sweets,vegetables}
}

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"]));



// Use destructuring to fill in the blanks and use the property names as variables:

const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};

function parseSentence(){
    const {location, duration} = vacation;
    return `We're going to have a good time in ${location} for ${duration}`
}

// console.log(parseSentence()) //We're going to have a good time in Burly Idaho for 2 weeks



// Use destructuring to make this code ES6:

function returnFirst(items){
    const [firstItem] = items; // will grab the first index and put it into firstItem
    return firstItem
}
// console.log(returnFirst([1,2,3,4,5,6,7,8])) // 1



// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav,secondFav,thirdFav] = arr;
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

// console.log(returnFavorites(favoriteActivities));



// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(animals1,animals2,animals3) {  
  return [...animals1, ...animals2, ...animals3]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]



// Try to make the following function more ES6xy:

// function product(a, b, c, d, e) {  
//   var numbers = [a,b,c,d,e];

//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }

const product = (a, b, c, d, e) => {
    let numbers = [a,b,c,d,e];
    return numbers.reduce((acc,number) => {
        return acc * number;
    },1)
}

// console.log(product(1,2,3,4,5)) //120



// Make the following function more ES6xy. Use at least both the rest and spread operators:

// function unshift(array, a, b, c, d, e) {  
//   return [a, b, c, d, e].concat(array);
// }

const unshift = (array,a, b, c, d, e) => {
    return [a, b, c, d, e,...array];
}

// console.log(unshift(['Ahmad','12'] , 2,3,4,5,6));


// Write some destructuring code to help this function out. Use object literals to simplify it:

// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
// }

const populatePeople = names => {
    return names.map(name => {
        name = name.split(" ");
        const [firstName, lastName] = name;
        return {firstName,
                  lastName
        };
    })
}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

