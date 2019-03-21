
const reverseInParentheses = (inputString) => {

    if (inputString.includes('(')){
        return reverseInParentheses(reverseOnce(inputString));
    } else {     
        return inputString;
    }
}

const reverseOnce = (s) => {
    var regexp = /\(([^()]*)\)/;
    var subStr = regexp.exec(s)[1];
    subStr = subStr.split('').reverse().join('');
    return s.replace(regexp, subStr)
}


console.log(reverseInParentheses("(bar)")) // output: rab
console.log(reverseInParentheses("foo(bar)baz")) // output: foorabbaz
console.log(reverseInParentheses("foo(bar)baz(blim)")) // output: foorabbazmilb

