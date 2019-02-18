var ask = require('readline-sync');
var sleep = require('sleep');

let Reset = "\x1b[0m"
let Bright = "\x1b[1m"
let Dim = "\x1b[2m"
let Underscore = "\x1b[4m"
let Blink = "\x1b[5m"
let Reverse = "\x1b[7m"
let Hidden = "\x1b[8m"

let FgBlack = "\x1b[30m"
let FgRed = "\x1b[31m"
let FgGreen = "\x1b[32m"
let FgYellow = "\x1b[33m"
let FgBlue = "\x1b[34m"
let FgMagenta = "\x1b[35m"
let FgCyan = "\x1b[36m"
let FgWhite = "\x1b[37m"

let BgBlack = "\x1b[40m"
let BgRed = "\x1b[41m"
let BgGreen = "\x1b[42m"
let BgYellow = "\x1b[43m"
let BgBlue = "\x1b[44m"
let BgMagenta = "\x1b[45m"
let BgCyan = "\x1b[46m"
let BgWhite = "\x1b[47m"



player = {
    name: '',
    hp: 10,
    inventory: []
}

var threetab = '\t\t\t';
var fourtab = '\t\t\t\t';
var fivetab = '\t\t\t\t\t';

var specialItem = ['INTELLECT','ARMOR','STAMINA','STRIKE','HASTE'];
console.clear();
//ask user for name 
player.name = ask.question(`${fivetab} ${Bright}${FgCyan}What is your name? ${FgRed}`);
console.log(Reset)
sleep.sleep(1);
console.clear();
//FIX ME-  YOU NEED TO PRINT FUN MESSAGE TO PLAYER.
console.log(`${fourtab}${BgGreen}${FgGreen}........................................................................${Reset}`)
console.log(`${fourtab}${BgGreen}${FgGreen}........................................................................${Reset}`)
console.log(`${fourtab}${FgRed}${BgGreen}${Bright} Hi ${player.name} , welcome. I will put some fun text greeting late${Reset}`);
console.log(`${fourtab}${BgGreen}${FgGreen}........................................................................${Reset}`)
console.log(`${fourtab}${BgGreen}${FgGreen}........................................................................${Reset}`)

walk(); //after asking user for name and print the name out. it is time to ask user to walk.

// ***************************************** WALK FUNATION *****************************************
function walk(){
    var keyW = ask.keyIn(`push 'w' to walk... `,{limit: 'wW'}); //ask user to push "w" to walk
    console.log(`walking...`); // FIX ME - I NEED TO PRINT OUT SOME COOL WALKING HERE.
    var rand = Math.floor(Math.random() * 4); //create a random number between 0-3
    if(rand === 1){ //check if the 1/4 of the random number happend
        fight(); //If a wild enemy appears
    } else{
        console.log(`${fourtab}You didn’t run into a monster`);
        print(); // will print
        walk();
    }
 }

// ***************************************** PRINT FUNATION *****************************************
function print(){
    // console.log(`${fourtab}${player.name} with ${player.hp} amount of HP (Health points) and has ${player.inventory} items in Inventory.`);
    console.log(Reverse);
    console.log('|______________________________________________________________________|');
    console.log(`${FgRed}***\tPlayer : ${player.name}\t\t\t Your Health :${player.hp}      ***\n`);
    console.log(`${FgRed}***\tYour damage: \t\t\t Inventory: ${player.inventory} ***${Reset}`);
    console.log(`${Reverse}|______________________________________________________________________|`);
    console.log(Reset);
}

// ***************************************** FIGHT FUNATION *****************************************
 function fight(){
     while(player.hp > 0){
         playerOption = ['run','fight']
        //ask user to either fight or run
        let fightOrRun = ask.keyInSelect(playerOption,`Would you like to fight or run?`);
        if(fightOrRun === 0){
            //run
            run(); //call run function and player will have 50% of chance to run
         } else if(fightOrRun === 1){
            //fight
            //attackEnemy
            attackEnemy(); // user will attack enemy
    
            // **************** I think you need to move these two function *****************************************************
            //call enemyCreation to create a random enemy, because each time user attacked, enemy should attack back.
            enemyCreation(); // will create a random enemy with random min and max attack power
            enemyAttack(); // after we create a random enemy, it is time for enemy to attack.
         } else{
             console.log('NO OTHER OPTION, YOU HAVE TO CHOOSE FIGHT OR RUN')
         } 
     }       
 }

// ***************************************** RUN FUNATION *****************************************
 function run(){
    var runRandomNumber = Math.floor(Math.random() * 2); //create random number between 1-2
    if(runRandomNumber === 0){ //50% chance of escaping
        console.log(`${fourtab}You successfully got away and continue walking`);
        //FIX ME : WHAT SHOULD I DO HERE
    } else{
        console.log(`${fourtab}You were not able to run.`);
        //FIX ME here I need to call one of the attack function
        //here maybe you can call attackEnemey() funciton OR enemyAttack() function
        // attackEnemy();
        enemyAttack();
    }
 }

 // ***************************************** ATTACK-ENEMY FUNATION *****************************************
 function attackEnemy(){
    //here player will attack enemy
    //choose a random attack number between a min and max
    let min = 10;
    let max = 50;
    let playerAttackPower = Math.floor(Math.random() * max + min); // create a random between min and max
    // console.clear();
    console.log(`Your Attack Power is: ${playerAttackPower}`); // let the player know what attack power is
    console.log(`${fourtab}${BgRed} ************ YOU ARE ATTACKING ************** ${Reset}`);
    // sleep.sleep(1);
    //first check enemy's HP and see if enemy has enough HP to reduce. else I need to call enemyDie() function and let player know that they killed enemy
    //reduce some HP from enemy
    //add that HP to the player

    console.log(`${BgRed} ************ YOUR ACHIEVED 20 HP ************** ${Reset}`);

    //here I want to call enemyAttack()
    enemyAttack();
 }
 
 // ***************************************** ENEMY-ATTACK FUNCTION *****************************************
 function enemyAttack(){
     let enemName = enemyCreation();
    //here enemy will attack player
    let min = 10;
    let max = 60;
    // let enemyAttackPower = Math.floor(Math.random() * max + min); // create  a random between min and max
    console.log(`************ YOU ARE UNDER ATTACK by ${enemName} and HAS ${enemyAttackPower} ATTACK POWER **************`);
    console.clear();
 }
 
 // ***************************************** PLAYER-DIE FUNATION *****************************************
 function die(){
     console.log('cool death message'); //FIX ME - I need to create a cool message for game over;
 }
 
 // ***************************************** ENEMY-DIE FUNATION *****************************************
 function enemyDie(){
    console.log('wow, You killed your enemy, good job, here is a special gift for you.');
    player.hp += 100; // will give player 100 hp
    var rand = (Math.floor(Math.random() * specialItem.length )); // create a random number on the specialItem array's index
    player.inventory.push(specialItem[rand]); // will push that special item to the player's inventory
    console.log(`Congras.... , By killing this enemy, you got \x1b[46m[100]${Reset} Health Points, and \x1b[45m ${specialItem[rand]} ${Reset} as a SPECIAL GIFT ITEM.` )
    
 }

 // ***************************************** ENEMY-CREATION *****************************************
function EnemyCreation(name,hp){ 
    this.name = name;
    this.hp = hp;
    this.power = function(){
        let enemyPower = Math.floor(Math.random() * 7 + 3);
        return enemyPower;
    }
}

//  function enemyCreation(){
//     //  console.log('Im right now on enemy creation')
//      //anemy should be random
//     //create an array of maybe 3 or 4 enemy names
//     let enemyArray = ['enemy-1','enemy-2','enemy-3','enemy-4'];
//     //make a random number to pich one of those anemy each time that I call function
//     randomEnemy = Math.floor(Math.random() * enemyArray.length);
//     var enemyName = enemyArray[randomEnemy]; // will save that random enemy to the enemy variable
//     return enemyName;
//     // print out the enemy
//     //make a min and max random attack power for enemy
// }

