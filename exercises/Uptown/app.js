
var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];



//First function: returns contents of the array, lyrics, to the console as a string, including necessary spaces.

function returnAsString(arr){
    return (arr.join(' '))
}




//Second function: returns lyrics backwards ("pretty so I'm myself kiss Gotta...").
function backwards(arr){
    return arr.reverse().join(' ');
}


//Third function: returns a string of just every other word, (e.g. "this that cold Pfeiffer...").
function OtherWord(arr){
    let Other = [];
    for(let i = 0; i< arr.length; i+=2){
        Other.push(arr[i]);
    }

    return Other.join(' ');
}



//Extra challenge

//Fourth function: returns all of lyrics, but every two words are switched ( "hit This ice that Michelle cold...").
// function twoWordsSwitched(arr){
//     let first = [];
//     let second = []
//     let result = [];
//     for(let i = 0 ; i < arr.length; i++){
//         if(i % 2 === 0){
//             first.push(arr[i]); // will grab all the even words and push them into first array
//         } else{
//             second.push(arr[i]); // will grab all the odd words and push them into second array
//         }
//         // result.push(second[i],first[i])
//     } 
//     for(let i = 0; i < first.length; i++){
//         if(second[i] != undefined){
//             result.push(second[i], first[i]);
//         } else{
//             result.push(first[i]);
//         }
//     }
//     return result.join(' ');
// }


function twoWordsSwitched(arr){
    let first = []
    let second = []
    let result = []
    for(let i = 1; i < arr.length; i+=2){
            result.push(arr[i] , arr[i - 1]);
    }
    result.push(arr[arr.length - 1]);
    return result.join(' ');
}


//Fifth function: returns lyrics in a random order.
function randomReturn(arr){ 
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let rand = Math.floor((Math.random() * arr.length)); //will create a random number between 0 - (arr.length - 1);
        if(result.indexOf(arr[rand]) === -1){
            result.push(arr[rand]);
        }
    }
    return result.join(' ');
}
console.log(randomReturn(lyrics));
