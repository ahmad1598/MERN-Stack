var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];



//Remove the last item from the vegetable array.
vegetables.splice(vegetables.length - 1 , 1);

//Remove the first item from the fruit array.
fruit.splice(0,1);

//Find the index of "orange."
let orangeIndex = fruit.indexOf('orange');

//Add that number to the end of the fruit array.
fruit.push(orangeIndex);

//Use the length property to find the length of the vegetable array.
let vegetableLength =  vegetables.length;

//Add that number to the end of the vegetable array.
vegetables.push(vegetableLength);

//Put the two arrays together into one array. Fruit first. Call the new Array "food".
let concatTwoArray = fruit.concat(vegetables);

//Remove 2 elements from your new array starting at index 4 with one method.
concatTwoArray.splice(4,2);

//Reverse your array.
concatTwoArray.reverse();

//Turn the array into a string and return it.   
concatTwoArray = concatTwoArray.join(',')


console.log(concatTwoArray);


// console.log("fruit: " + fruit);
// console.log("vegetables: " + vegetables);

