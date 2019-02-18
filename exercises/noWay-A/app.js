function removeA(str) {
    let result = '';
    for(let char of str.toLowerCase().split('')){
        if(char != 'a'){
            result += char;
        }
    }
    return result;
}