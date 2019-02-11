var ask = require('readline-sync');
var sleep = require('sleep');


// function walkShape1(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t o                   ");
//     console.log("\t\t\t/|\\                 ");
//     console.log("\t\t\t/ \\                 ");
//     console.log("\t\t\t=====================");
// }
// function walkShape2(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t     o               ");
//     console.log("\t\t\t    /|\\             ");
//     console.log("\t\t\t    / \\             ");
//     console.log("\t\t\t=====================");
// }
// function walkShape3(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t       o             ");
//     console.log("\t\t\t      /|\\           ");
//     console.log("\t\t\t      / \\           ");
//     console.log("\t\t\t=====================");
// }
// function walkShape4(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t         o           ");
//     console.log("\t\t\t        /|\\         ");
//     console.log("\t\t\t        / \\         ");
//     console.log("\t\t\t=====================");
// }
// function walkShape5(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t           o           ");
//     console.log("\t\t\t          /|\\         ");
//     console.log("\t\t\t          / \\         ");
//     console.log("\t\t\t=====================");
// }
// function walkShape6(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t             o      ");
//     console.log("\t\t\t            /|\\    ");
//     console.log("\t\t\t            / \\    ");
//     console.log("\t\t\t=====================");
// }
// function walkShape7(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t                 o   ");
//     console.log("\t\t\t                /|\\ ");
//     console.log("\t\t\t                / \\ ");
//     console.log("\t\t\t=====================");
// }

// function walkShape8(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t                     ");
//     console.log("\t\t\t                     ");
//     console.log("\t\t\t                     ");
//     console.log("\t\t\t=====================");
// }


// function walkShape1(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t   o                   ");
//     console.log("\t\t\t  /|\\                 ");
//     console.log("\t\t\t  / \\                 ");
//     console.log("\t\t\t=====================");
// }
// function walkShape2(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t     o               ");
//     console.log("\t\t\t    (|\\             ");
//     console.log("\t\t\t    / >             ");
//     console.log("\t\t\t=====================");
// }
// function walkShape3(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t     \\o/             ");
//     console.log("\t\t\t       |           ");
//     console.log("\t\t\t      / \\           ");
//     console.log("\t\t\t=====================");
// }
// function walkShape4(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t         o           ");
//     console.log("\t\t\t        (|\\         ");
//     console.log("\t\t\t        / >         ");
//     console.log("\t\t\t=====================");
// }
// function walkShape5(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t         __o__          ");
//     console.log("\t\t\t           |         ");
//     console.log("\t\t\t          / \\         ");
//     console.log("\t\t\t=====================");
// }
// function walkShape6(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t             o      ");
//     console.log("\t\t\t            (|\\    ");
//     console.log("\t\t\t            / >    ");
//     console.log("\t\t\t=====================");
// }
// function walkShape7(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t                 /o   ");         o
//     console.log("\t\t\t                 /| ");          |\
//     console.log("\t\t\t                /\ ");           /\
//     console.log("\t\t\t=====================");
// }

// function walkShape8(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t                     ");
//     console.log("\t\t\t                     ");
//     console.log("\t\t\t                     ");
//     console.log("\t\t\t=====================");
// }

// function walkPrint(){
// walkShape1();
//     sleep.sleep(1);
//     console.clear();
// walkShape2();
//     sleep.sleep(1);
//     console.clear();
// walkShape3();
//     sleep.sleep(1);
//     console.clear();
// walkShape4();
//     sleep.sleep(1);
//     console.clear();
// walkShape5();
//     sleep.sleep(1);
//     console.clear();
// walkShape6();
//     sleep.sleep(1);
//     console.clear();
// walkShape7();
//     sleep.sleep(1);
//     console.clear();
//     walkShape8();
// };

// walkPrint();

// function runShape1(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t o                   ");
//     console.log("\t\t\t/|\\                 ");
//     console.log("\t\t\t/ |                 ");
//     console.log("\t\t\t=====================");
// }


// function runShape2(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t       |o/           ");
//     console.log("\t\t\t        |            ");
//     console.log("\t\t\t       / \\          ");
//     console.log("\t\t\t=====================");
// }
// function runShape3(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t           o\\       ");
//     console.log("\t\t\t           |\\       ");
//     console.log("\t\t\t            /\\       ");
//     console.log("\t\t\t=====================");
// }
// function runShape4(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t                  o  ");
//     console.log("\t\t\t                 (|\\");
//     console.log("\t\t\t                 / > ");
//     console.log("\t\t\t=====================");
// }
// function runShape5(){
//     console.log("\t\t\t=====================");
//     console.log("\t\t\t                     ");
//     console.log("\t\t\t                     ");
//     console.log("\t\t\t                     ");
//     console.log("\t\t\t=====================");
// }

// function runPrint(){
//     runShape1();
//     sleep.sleep(1);
//     console.clear();
//     runShape2();
//     sleep.sleep(1);
//     console.clear();
//     runShape3();
//     sleep.sleep(1);
//     console.clear();
//     runShape4();
//     sleep.sleep(1);
//     console.clear();
//     runShape5();
//     sleep.sleep(1);
//     console.clear();
// }

// runPrint();