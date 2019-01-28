//Write a function that accepts two numbers as parameters, and returns the sum.
function sum(num1,num2){
    return num1 + num2;
}

//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function max(num1,num2,num3){
    return Math.max(num1,num2,num3);
}

//second way to write the max function
function max(num1,num2,num3){
    let max = num1;
    if(num2>max){
        max = num2;
    }
    if(num3>max){
        max = num3;
    }
    return max;
}

//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function EvenOdd(num){
    return num % 2 === 0 ? "even" : "odd";
}

//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, 
//return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
function x(str){
    if(str.length <= 20){
        return str+str;
    }
    return str.slice(0,str.length / 2 + 1); // in slice method, because the second number won't be included, and we want to have exactly the first half
}



//-------------------- Optional Challenge --------------------------

//Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
function fib(num){
	let arr = [0,1]; // becasue we can't create these two first number with for loop, I put them manually in the array
	let sum = 1;
	for(let i = 2; i <= num; i++){
		arr.push(arr[i - 1] + arr [i - 2]); 
		sum += arr[i];
}
return sum;
}


//Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. ( White spaces count as a letter )
function frequent(str){
    let obj = {};
    let max = 0;
    let maxChar = '';
    //we will go over each character and put it to the obj.
    for(let i = 0; i < str.length; i++){
        //checking if the char of str is already exist in obj, we will add 1 to it otherwise we will assign 1 to it. 
        obj[str.charAt(i)] ? obj[str.charAt(i)]++ : obj[str.charAt(i)] = 1;
    }   

    //for loop for finding the most frequent character in the obj
    for(let char in obj){
        if(obj[char] > max){
            max = obj[char];
            maxChar = char;
        }
    }
    return maxChar; 
}