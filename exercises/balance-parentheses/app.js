
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


