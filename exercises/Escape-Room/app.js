var ask = require('readline-sync');
var name = ask.question("What is your name? ");

console.log("Standard greeting phrase " + name);

var option = ['Put hand in hole','Find the key','Open the door'];
var gamaOver = false;
var findKey = false;
//Game loop
while(!gamaOver){
    var userChoice = ask.keyInSelect(option,'what would you like to do? ');
    if(userChoice === 0){
        console.log('You put your hand in the hole, and a bear ate you.');
        gamaOver = true;
    }else if(findKey === false && userChoice === 2){
        console.log("You can't open the door unless you find the key first.");
    } else if(userChoice === 1){
        console.log('Awsome, you found the key, and now you can open the door.');
        findKey = true;
    } else if(userChoice === 2 && findKey){
        console.log('YOHOOO, YOU GOT IT. CONGRAS');
        gamaOver = true;
    }
     else{
        console.log('Sorry, there is no other choice')
    }

    }

