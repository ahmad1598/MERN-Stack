// Sort an array from smallest number to largest
function leastToGreatest(arr) {
  return arr.sort(function(a,b){
      return a-b;
  })
}

// console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 


// Sort an array from largest number to smallest
function greatestToLeast(arr) {
  return arr.sort(function(a,b){
      return b-a;
  })
}

// console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1] 

// Sort an array from shortest string to longest
function lengthSort(arr) {
  return arr.sort(function(str1,str2){
      return str1.length - str2.length;
  })
}

// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"] 

// Sort an array alphabetically
function alphabetical(arr) {
    return arr.sort(function(a,b){
        return a.charAt(0) > b.charAt(0)
    })
}

// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"] 

// Sort the objects in the array by age
function byAge(arr){
  return arr.sort(function(a,b){
      return a.age - b.age;
  })
}

console.log(byAge([
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]));