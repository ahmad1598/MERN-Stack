// Log to the console every Wizard in the array using forEach().

// var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"] 
// wizards.forEach(function(item){
//     console.log(item);
// })


var wizards = [
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
  ]

  // ------------------------------------------------------------//
  //Log to the console every wizard's name.
  wizards.forEach(function(item){
    //   console.log(item.name)
  })

  // ------------------------------------------------------------//

  //Add an isAlive property to every wizard, setting it to true.
  wizards.forEach(function(item){
      item.isAlive = true;
    //   console.log(item)
  })

  // ------------------------------------------------------------//
  //Make a new array of all the Wizards that are "neutral good".
  let newArray = [];
  wizards.find(function(item){
      if(item.alignment === 'neutral good'){
           newArray.push(item.alignment);
      }
  })
//   console.log(newArray);

// ------------------------------------------------------------//
// Find the index of a wizard that is "lawful good".
let lawfulGoodIndex = wizards.findIndex(function(item){
    return item.alignment === 'lawful good';

})
// console.log(lawfulGoodIndex) //2

// ------------------------------------------------------------//
// Return a Boolean that states whether or not all the wizards are alive.
let isAlive = wizards.every(function(item){
    return item.isAlive
})

// console.log(isAlive)


// ------------------------------------------------------------//
// Return a Boolean that states whether or not at least one wizard is "neutral good".
let someIsAlive = wizards.some(function(item){
    return item.isAlive
})

// console.log(someIsAlive);

// ------------------------------------------------------------//
//Check every "alignment" for every wizard. Kill every "neutral good" wizard. (Modify every "neutral good" wizard's isAlive property to false.)
wizards.forEach(function(item){
    if(item.alignment === 'neutral good'){
        item.isAlive = false;
    }
})

// console.log(wizards);


// ------------------------------------------------------------//
// Return a Boolean that states whether or not all the wizards are alive.

let isAliveAgain = wizards.every(function(item){
    return item.isAlive
})

// console.log(isAliveAgain)

// ------------------------------------------------------------//
// Return a Boolean that states whether or not some of the wizards are alive.
let isSomeWizardsAlive = wizards.some(function(item){
    return item.isAlive;
})

// console.log(isSomeWizardsAlive);

// ------------------------------------------------------------//