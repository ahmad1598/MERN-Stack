
const twoSum = (arr,num) => {
    let result = []
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === num){
                result.push(i,j)
                return result 
            }
        }
    }
}
// Example
console.log(twoSum([1,2,3], 4)); //returns [0, 2] because 1 + 3 equals 4
console.log(twoSum([1,2,3,4,5,6,7,8,9], 17)); //returns [7, 8] because 8 + 9 equals 17
console.log(twoSum([4,5,6,7,4,10,8,9,11], 15)); //returns [0, 8] because 4 + 11 equals 15
console.log(twoSum([3,4,2,9,13,8,9], 22)); //returns [3, 4] because 9 + 13 equals 22
console.log(twoSum([14,2,3,41,5,6,17,8,9], 31)); //returns [0, 6] because 14 + 17 equals 31


