// Write a function that accepts a string as input. Write a loop and
// add each letter of the string to an array. Then return the that new array.
function addToArr(str){
    let newArr = [];
    for(let i = 0; i < str.length; i++){
        newArr.push(str[i]);
    }
    return newArr;
}

// console.log(addToArr('Ahmad'))

// Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and returns the position of the first occurrence of the specified character. If the character is not found, tell that to the user by returning "Character not found!".
function findForMe(str, ch){
    for(let i = 0; i < str.split('').length;i++){
        if(str.indexOf(ch)){
            return str.indexOf(ch)
        } else{
            return "not found"
        }
    }
}
// console.log(findForMe('Helloe' , 'e'));


// Write a function that accepts an array of numbers as a parameter.
// Return "Found 42!" when the number 42 is found, return "42 not found!" if it is not in the array.
function Found42(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(42) != -1){
            return "Found " + arr[arr.indexOf(42)] + "!";
        }
        else{
            return "42 not found!";
        }
        
    }
}

// console.log(Found42([1,432,42,90,10,1009]));

// Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()
function smallest(arr){
    let small = arr[0]
    for(let i = 1; i < arr.length; i++){
        if (arr[i] < small){
            small = arr[i]
        }
    }
    return small;
}

// console.log(smallest([1,3,2,0,32,112]));
