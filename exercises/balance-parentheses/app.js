// Given a string including parentheses, write a function that returns true if 
//every opening parentheses has a closing parentheses.

// Also, every closing parentheses needs an opening partner before it.


function balanceParentheses(str){
    let open = 0;
    let close = 0;
    let arr = [...str]

    for(let each of arr){
        if(each === '('){
            open++
        }else {
            close++
            if(open < close){
                return false;
            }
        }
    }
    return (open === close)
}

console.log(balanceParentheses("()()")) // Output: true
console.log(balanceParentheses(")()(")) // Output:  false
console.log(balanceParentheses("())(")) // Output:  false
console.log(balanceParentheses("(())")) // Output:  true
console.log(balanceParentheses("()))")) // Output:  false
console.log(balanceParentheses("(((()))((((())))))")) // Output:  true


