const findMissingNo = arr => {
    let arrSort = arr.sort((a,b) => { return a - b });
    for(let i = 0; i < arrSort.length; i++){
        if(arrSort[i+1] - arrSort[i] != 1){
            return arrSort[i] + 1
        }
    }  
}


// console.log(findMissingNo([3,5,4,8,1,2,7]));
// console.log(findMissingNo([2,1,3,5])); //Output: 4
// console.log(findMissingNo([12,10, 9])); //Output: 11
// console.log(findMissingNo([-3,0,-2,3,2,-1])); //Output: 1