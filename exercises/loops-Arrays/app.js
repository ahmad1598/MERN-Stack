//#1
//Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

let count = 0;
for(let i = 0; i < officeItems.length; i++){
    if(officeItems[i] === 'computer'){
        count++;
    }
    return count;
}


// #2
// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 

for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 17){
        let movieGoer = '';
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            movieGoer = 'SHE';
        } else {
            movieGoer = 'HIM';
        }
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough. ${movieGoer}'S good to see Mad Max Fury Road.`);
    }else{
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough to see Mad Max Fury Road, don't let ${movieGoer} in.`);
    }
}



// Optional Bonus challenge
// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle 
//the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.

// The light is off to start with. Log to the console whether or not the light is on at the end.

// Sample Arrays:

let arr =  [2, 5, 435, 4, 3] // "The light is on"
// [1, 1, 1, 1, 3]   // "The light is on"
// [9, 3, 4, 2]      // "The light is off"
let toggles = 0;
for(let i = 0; i < arr.length; i++){
    toggles += arr[i];
}
//if the addition of array's number EVEN: the light is off, otherwise the light is on
toggles % 2 === 0 ? console.log('The light is off')  : console.log('The light is on');