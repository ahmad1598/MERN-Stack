function combined(arr){
    let result = ['','','']
    for(let i = 0; i < arr.length - 2; i++ ){
        if(arr[i].length + arr[i+1].length + arr[i+2].length > result[0].length + result[1].length + result[2].length){
            result.splice(0, 3 , arr [i], arr[i + 1], arr[i + 2])
        }
    }
    return result
}

console.log(combined(["this", "is", "an", "array"])) // Output:  ["is", "an", "array"]
console.log(combined(["this", "is", "an", "and" , "array"])) // ["an","and","array"]
console.log(combined(["solving","problem","is","fun"])) //[ 'solving', 'problem', 'is' ]
console.log(combined(["coding","is","most","awesome","thing","ever"])) //[ 'most', 'awesome', 'thing' ]
