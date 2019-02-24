const commonCharacterCount = (str1, str2) => {
    let str1Arr = [...str1];
    let str2Arr = [...str2];
    let common = 0;
    for(let i = 0; i < str1Arr.length; i++){
        for(let j = 0; j < str2Arr.length; j++){
            if(str1Arr[i] == str2Arr[j]){
                common++;
                delete str2Arr[j];
                break;
            }
        }
    }
    return common;
}


console.log(commonCharacterCount("aabcc","adcaa")) //3
console.log(commonCharacterCount("xyzbac","abca")) //3
