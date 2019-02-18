var ask = require('readline-sync');
var sleep = require('sleep');

let Reset = "\x1b[0m"
let Bright = "\x1b[1m"
let Reverse = "\x1b[7m"
let FgBlack = "\x1b[30m"
let FgRed = "\x1b[31m"
let FgGreen = "\x1b[32m"
let FgCyan = "\x1b[36m"
let BgRed = "\x1b[41m"
let BgBlue = "\x1b[44m"
let BgCyan = "\x1b[46m"


player = {
    name: '',
    health: 30,
    inventory: []
}
var threetab = '\t\t\t'
var fourtab = '\t\t\t\t';
var fivetab = '\t\t\t\t\t';
var sixtab = '\t\t\t\t\t\t';
let gameOver = false;
var enemyName;
var specialItem = ['INTELLECT','ARMOR','STAMINA','STRIKE','HASTE'];

function walk(){
    console.log(`${fivetab}walking...`);
    walkPrint();
    var rand = Math.floor(Math.random() * 4);
    if(rand === 1){
        enemyAttack();
        console.clear();
        console.log(fivetab + FgGreen + 'Enemy ' + Bright +FgRed+ enemyName.name + Reset + FgGreen +' appeared');
        fight();
}
    else{
        print();
    }
}

function EnemyCreation(name,health){ 
    this.name = name;
    this.health = health;
    this.power = function(){
        let power = Math.floor(Math.random() * 7 + 3);
        return power;
    }
}

function enemyAttack(){
    var chance = Math.floor(Math.random() * 5);
    switch(chance){
        case 0:  
            enemyName = new EnemyCreation('Murlocs' , 7);
            break;
        case 1:  
            enemyName = new EnemyCreation('Reapers' , 4);
            break;
        case 2:  
            enemyName = new EnemyCreation('Dark Ganon' , 6);
            break;
        case 3:  
            enemyName = new EnemyCreation('Darkspawn' , 8);
            break;
        case 4:  
            enemyName = new EnemyCreation('The Daedra' , 9);
            break;
    }
    return enemyName;
}


function fight(){
    while(player.health > 0 && enemyName.health > 0){
        console.log(Reverse);
        var playerOption = ['Fight','Run'];
        console.log(FgGreen + Reverse )
        let fightOrRun = ask.keyInSelect(playerOption,"Would you like to Fight or Run?" + Reset);
        if(fightOrRun === 0){
            attackEnemy();
        } else{
            run();
        }
        console.log(Reset);
    }
    if(enemyName.health <= 0){
        enemyDie()
    }
    if(player.health <= 0){
        console.clear();
        console.log(FgRed +  Bright);
        playerDiePrint();
        console.log(Reset);
        print();
        gameOver = true;
    }
}

function attackEnemy(){
    let playerAttackPower = Math.floor(Math.random() * 4 + 1);
    console.log(`${sixtab}${Bright}${BgBlue}${FgBlack}${Reverse}Your Attack Power is: ${playerAttackPower} ${Reset}`);
    enemyName.health -= playerAttackPower;
    console.log(`${fourtab}${Bright}${BgBlue}${FgBlack}${Reverse} ************ ${player.name} IS ATTACKING  ${enemyName.name} ************** ${Reset}`);
    console.log(`${fourtab}${Bright}${BgBlue}${FgBlack}${Reverse} ${player.name} Hit ${enemyName.name} And ${player.name} ACHIEVED ${playerAttackPower} Health Point ${Reset}`);
    let enemyPower = enemyName.power();
    player.health = player.health - enemyPower;
    console.log(`${Bright}${fourtab}${BgRed} ************ YOU ARE UNDER ATTACK by ${enemyName.name} *********** ${Reset}`);
    console.log(`${Bright}${fourtab}${BgRed} ${enemyName.name} Hit ${player.name} And ${enemyName.name} ACHIEVED ${enemyPower} Health Point ${Reset}`);

}

function run(){
    var runRandomNumber = Math.floor(Math.random() * 2);
    if(runRandomNumber === 0){
        console.log(Bright);
        runPrint();
        console.log(Reset);
    } else {
        console.log(`${fourtab} ${Bright} ${FgRed} You were not able to run. ${Reset}`);
        sleep.sleep(1);
        print();

        //if the player won't get the chance to run , first: the new enemy will be created and next attackEnemy() will be call
        enemyAttack();
        console.clear();
        console.log(fivetab + FgGreen + 'Enemy ' + Bright +FgRed+ enemyName.name + Reset + FgGreen +' appeared');
        attackEnemy();
    }
}

function enemyDie(){
    console.log(FgGreen + Bright);
    youWonPrint();
    console.log(Reset);
    player.health +=10;
    var rand = (Math.floor(Math.random() * specialItem.length ));
    player.inventory.push(specialItem[rand]);
    console.log(`${threetab}You got ${BgCyan}${Bright}${FgRed} [10] ${Reset} Extra Health Points, and ${Bright}${BgCyan}${FgRed} ${specialItem[rand]} ${Reset} as a SPECIAL GIFT ITEM.` )
}


function print(){
    console.log('\n');
    console.log(Reverse);
    console.log(threetab+'|______________________________________________________________________|');
    console.log(threetab+`${FgRed}***\tPlayer : ${player.name}\t\t\t Your Health :${player.health}\n`);
    console.log(threetab+`${FgRed}***\tInventory: ${player.inventory} ${Reset}`);
    console.log(threetab+`${Reverse}|______________________________________________________________________|`);
    console.log(Reset);
    console.log('\n');
}

// ________________________________________ YOU WON print __________________________________
function youWonPrint(){
    console.log("  **")
    console.log("   **       **    ******      **     **       **               **    ********        ***      *** ")
    console.log("    **    **    **       **   **     **       **               **   **       **      ** *     ** ")
    console.log('     ** **     **        **   **     **        **              **  **         **     **  *    ** ')
    console.log('      **      **         **   **     **         **      **     **  **         **     **   *   ** ')
    console.log('      **      **         **   **     **          **    ** **   **  **         **     **    *  ** ')
    console.log('      **       **       ***   **    **            **  **   ** **   **        **      **     * ** ')
    console.log('      **        *********       ***                **        **     *********       ***      *** ')
    console.log('_____________________________________________________________________________________________________')
}

// ________________________________________ RPG GAME print __________________________________
function gamePrint(){

    console.log('    ************    ************    /***********               /**********        *              *              *    *||||||||   ');
    console.log('    **|         \\  **         **  **                          **               ** **          ** **           * *   **          ');
    console.log('    **|         //  **         **  **                          **               **  **         **  **         *  **  **          ');
    console.log('    **|        //   **         **  **                          **               **   **        **   **       *   **  **          ');
    console.log('    **|       //    **>>>>>>>>**   **      *******             **     *******   ** ** **       **    **     *    **  **|||||||   ');
    console.log('    *********//     **             **          **              **          **   **     **      **     **   *     **  **          ');
    console.log('    **|  **         **              **        **                **        **    **      **     **      ** *      **  **          ');
    console.log('    **|   \\**      **               **      **                  **      **     **       **    **        *       **  **          ');
    console.log('    **|    \\**     **                 *******                     *******      **        **   **                **  **|||||||   ');
    console.log('_________________________________________________________________________________________________________________________________');
}

// ________________________________________ WELCOME print __________________________________
function welcomePrint(){
    console.log('\t\t\t **            **   |||||||   ***          *******   ******     **           **   *******    ');
    console.log('\t\t\t **            **   **        ***         **        **____**    ** *       * **   **         ');
    console.log('\t\t\t **            **   **        ***        **        **______**   **  *     *  **   **         ');
    console.log('\t\t\t **      **    **   **|||||   ***        **        **______**   **   *   *   **   *******    ');
    console.log('\t\t\t  **    ** **  **   **        ***        **         **____**    **    * *    **   **          ');
    console.log('\t\t\t   **  **   ** **   **        ***        **          **__**     **     *     **   **          ');
    console.log('\t\t\t    **        **    |||||||   *********    *******    ****      **           **   *******     ');  
}

// ________________________________________ YOU DIED print __________________________________
function playerDiePrint(){

    console.log("** ");
    console.log(" **      **     ******      **     **             *********     ***   ********   *********   ");
    console.log("  **    **    **       **   **     **             ***      **   ***   ***        ***      ** ");
    console.log("   ** **     **        **   **     **             ***       **  ***   ***        ***       ** ");
    console.log("    **       **        **   **     **             ***       **  ***   ********   ***        **");
    console.log("    **       **        **   **     **             ***      **   ***   ***        ***       ** ");
    console.log("    **        **      ***    **    **             ***     **    ***   ***        ***      **  ");
    console.log("    **          ******         ***                *********     ***   ********   *********    ");
}



console.clear();
gamePrint();
player.name = ask.question(`\n${sixtab} ${Bright}${FgCyan}What is your name? ${FgRed}`);
console.log(Reset)
sleep.sleep(1);
console.clear();
console.log(FgGreen+sixtab + Reverse + ' Hi '+ player.name + ' ' + Reset);
console.log(FgRed);
welcomePrint();
console.log(Reset);
while(!gameOver){
    var keyW = ask.keyIn(`${fivetab}push 'w' to walk... `,{limit: 'wW'});
    if(keyW.toLowerCase() === 'w'){
        walk();
        
    }
    //FIX ME - SOMETIMES GIVING ME A ERROR - health undefined
    // if(enemyName.health === 0){
    //     enemyDie();
    // }
}




// ________________________________________ walking print __________________________________



function walkShape1(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t   o                   ");
    console.log("\t\t\t  /|\\                 ");
    console.log("\t\t\t  / \\                 ");
    console.log("\t\t\t=====================");
}
function walkShape2(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t     o               ");
    console.log("\t\t\t    (|\\             ");
    console.log("\t\t\t    / >             ");
    console.log("\t\t\t=====================");
}
function walkShape3(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t     \\o/             ");
    console.log("\t\t\t        |           ");
    console.log("\t\t\t      / \\           ");
    console.log("\t\t\t=====================");
}
function walkShape4(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t         o           ");
    console.log("\t\t\t        (|\\         ");
    console.log("\t\t\t        / >         ");
    console.log("\t\t\t=====================");
}
function walkShape5(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t         __o__          ");
    console.log("\t\t\t           |         ");
    console.log("\t\t\t          / \\         ");
    console.log("\t\t\t=====================");
}
function walkShape6(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t             o      ");
    console.log("\t\t\t            (|\\    ");
    console.log("\t\t\t            / >    ");
    console.log("\t\t\t=====================");
}
function walkShape7(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t                 /o   ");
    console.log("\t\t\t                 /| ");
    console.log("\t\t\t                /\\ ");
    console.log("\t\t\t=====================");
}

function walkShape8(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t                     ");
    console.log("\t\t\t                     ");
    console.log("\t\t\t                     ");
    console.log("\t\t\t=====================");
}


function walkPrint(){
    sleep.msleep(700);
    console.clear();
    walkShape1();
    sleep.msleep(700);
    console.clear();
    walkShape2();
    sleep.msleep(700);
    console.clear();
    walkShape3();
    sleep.msleep(700);
    console.clear();
    walkShape4();
    sleep.msleep(700);
    console.clear();
    walkShape5();
    sleep.msleep(700);
    console.clear();
    walkShape6();
    sleep.msleep(700);
    console.clear();
    walkShape7();
    sleep.msleep(700);
    console.clear();
    walkShape8();
    console.clear();
};




// ---------------------------------------- RUN function ---------------------------------------------
function runShape1(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t o                   ");
    console.log("\t\t\t/|\\                 ");
    console.log("\t\t\t/ |                 ");
    console.log("\t\t\t=====================");
}
function runShape2(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t   |o/               ");
    console.log("\t\t\t    |                ");
    console.log("\t\t\t   / \\              ");
    console.log("\t\t\t=====================");
}
function runShape3(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t      o\\           ");
    console.log("\t\t\t      |\\           ");
    console.log("\t\t\t       /\\           ");
    console.log("\t\t\t=====================");
}
function runShape4(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t           o         ");
    console.log("\t\t\t          (|\\       ");
    console.log("\t\t\t          / >        ");
    console.log("\t\t\t=====================");
}
function runShape5(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t                 /o   ");         
    console.log("\t\t\t                 /| ");          
    console.log("\t\t\t                /\\ ");          
    console.log("\t\t\t=====================");
}
function runShape6(){
    console.log("\t\t\t=====================");
    console.log("\t\t\t                     ");
    console.log("\t\t\t                     ");
    console.log("\t\t\t                     ");
    console.log("\t\t\t=====================");
}

function runPrint(){
    sleep.msleep(400);
    console.clear();
    runShape1();
    sleep.sleep(1);
    console.clear();
    runShape2();
    sleep.sleep(1);
    console.clear();
    runShape3();
    sleep.sleep(1);
    console.clear();
    runShape4();
    sleep.sleep(1);
    console.clear();
    runShape5();
    sleep.sleep(1);
    console.clear();
    runShape6();
    sleep.sleep(1);
    console.clear();
}
