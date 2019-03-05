// Write two functions that mimic the .every and .some array methods.

const every =  (arr,callback) => {
    let count = 0;
    for(let each of arr){
        if(callback(each)){
            count++
        }
    }
    return (count === arr.length) ? true : false
}

console.log(every(['1',2,'3'], num => {
    return (typeof num === 'number')   //OUTPUT: false
}))

console.log(every([1,2,3], num => {
    return (typeof num === 'number')  //OUTPUT: true
}))


const some = (arr,callback) => {
    let count = 0;
    for(let each of arr){
        if(callback(each)){
            count++
        }
    }
    return (count >= 1) ? true : false
}


console.log(some(["ben", "ahmad", "bob"], (name) => {
    return name === "ahmad";                                //OUTPUT: true
  }));
  
  console.log(some(["ben", "ahmad", "bob"], (name) => {
    return name === "steve";                                //OUTPUT: false
  }));