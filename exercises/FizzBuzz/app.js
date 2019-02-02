function FizzBuzz(){
    let arr = [];
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 === 0){
            arr.push("fizzbuzz")
        } else if(i % 3 === 0){
            arr.push("fizz")
        } else if(i % 5 === 0){
            arr.push("buzz")
        } else
        arr.push(i);
    }
    return arr;
}


// Optional:
// Write a function that keeps a tally of how often the phrases "fizz","buzz", and "fizzbuzz" occur in the array returned from the previous function.
// It should return an object that looks like this:

function tally(){
    let arr = FizzBuzz();
    let result = {}
    for(let i = 0; i< arr.length; i++){
        if(typeof(arr[i]) != "number"){
            if(result[arr[i]]){
                result[arr[i]]++;
            } else{
                result[arr[i]] = 1;
            }
        }
    }
    return result;
}

// console.log(tally());
