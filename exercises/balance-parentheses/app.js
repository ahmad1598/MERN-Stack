// Given a string including parentheses, write a function that returns true if 
//every opening parentheses has a closing parentheses.


function balanceParentheses(str){
    let openCount = 0;
    let closeCount = 0;
    let arr = [...str]
    let strObj = {}
    if(arr[0] === ')'){
        return false
    } else{
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === '('){
                openCount++
                strObj[arr[i]] = arr[i]
            } else{
                closeCount++
                strObj[arr[i]] = arr[i]
            }
        }
    }
    
    
    // return (openCount === closeCount)
}

console.log(balanceParentheses("()()")) // Output: true
console.log(balanceParentheses(")()(")) // Output:  false
console.log(balanceParentheses("())(")) // Output:  false
// console.log(balanceParentheses("(((()))((((())))))")) // Output:  true