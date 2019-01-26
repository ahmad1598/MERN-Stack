// ------------------------- Preliminaries ----------------------------
// Write a for loop that prints to the console the numbers 0 through 9.
for(let i = 0; i <= 9; i++){
    console.log(i);
}
// Write a for loop that prints to the console 9 through 0.
for(let i = 9; i >= 0; i--){
    console.log(i);
}
// Write a for loop that prints these fruits to the console.
var fruit = ["banana", "orange", "apple", "kiwi"]
for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}


// ------------------------- Bronze Medal ----------------------------
// Write a for loop that will push the numbers 0 through 9 to an array.
var number = [];
for(let i = 0; i <= 9; i++){
    number.push(i);
}
// Write a for loop that prints to the console only even numbers 0 through 100.
for(let i = 0; i <= 100; i += 2){
    console.log(i);
}
// Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var newFruit = [];
for(let i = 0; i < fruit.length; i++ ){
    newFruit.push(fruit[i]);
}

// ------------------------- Silver Medal ----------------------------
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
// Write a loop that will print out all the names of the people of the people array
for(let i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
}
// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
let occArray = [];
let nameArray = [];
for(let i = 0; i < peopleArray.length; i++){
    occArray.push(peopleArray[i].occupation);
    nameArray.push(peopleArray[i].name);
}

// Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".
let nameArr = [];
let occupationArr = []; 
for(let i = 0; i < peopleArray.length; i++){
    if(peopleArray[i].name === "Harrison Ford"){
        nameArr.push(peopleArray[i].name);
    }
    if(peopleArray[i].occupation === "Singer" ){
        occupationArr.push(peopleArray[i].occupation);
    }
}


// ------------------------- Gold Medal ----------------------------
//Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]
let arr = [];
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        arr[i] = new Array(0 , 0 , 0);
    }
} console.log(arr);