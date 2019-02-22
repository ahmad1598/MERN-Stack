function checkTypes(arr) {
    let str,num,bool = 0;
    for(let i = 0; i < arr.length;i++){
        for (let j = 0; j < arr[i].length;j++){
            if(typeof(arr[i][j]) === 'number')
                {
                    num++
                } else if(typeof(arr[i][j]) === 'string'){
                    str++
                } else{
                    bool++
                }
        }
        

    }

    if()
   
}



const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]
checkTypes(multiD1)
// returns false (inner arrays aren't consistent with each other's data types)

const multiD2 = [[true,false,true],[false,false,true]]
// checkTypes(multiD2)  
// returns true (each inner array contains the same data type as the others)



// for (let j = 0; j < arr[i].length;j++){
//     if(typeof(arr[i][j]) === 'number' || typeof(arr[i][j]) === 'string' || typeof(arr[i][j]) === 'boolean'){
//         return true;
//     }
// }

// if(typeof(arr[i][j]) === 'number' || typeof(arr[i][j]) === 'string' || typeof(arr[i][j]) === 'boolean'){
//     return true;
// }