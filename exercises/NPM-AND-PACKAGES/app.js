var readLine = require("readline-sync")

// console.log(readLine)

var name = readLine.question('what is your name?')
console.log('Hello ' + name);


var answer= readLine.keyInYN('Do you like Node?')
console.log(answer);


var animals = ["Buffalo","Lion" , "Sheep"];
var animalNotSelected = true;
while(animalNotSelected){
    var favAnimals = readLine.keyInSelect(animals, 'What is your favorite animals?');
    if(favAnimals === -1){
        console.log("Choose an animal, don't cancel")
    } else{
        console.log(favAnimals);
    }
}



