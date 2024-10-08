// Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
    return arr.map(function(item){
        return item * 2;
    })
  }
  
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//Take an array of numbers and make them strings
function stringItUp(arr){
    return arr.map(function(item){
        return  item.toString();
    })
  }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


// Capitalize each of an array of names

function capitalizeNames(arr){
    return arr.map(function(item){
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    })
  }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  

//Make an array of strings of the names
function namesOnly(arr){
    return arr.map(function(item){
        return item.name;
    })
  }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
//   // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  

//Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    return arr.map(function(item){
        return item.age > 17 ? item.name + "can go to The Matrix" : item.name + "is under age!!"
    })
  }

//   console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 

//Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
    return arr.map(function(item){
        return "<h1>" + item.name + "</h1>" + "<h2>" + item.age +"</h2>"
    })
  }

//   console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 