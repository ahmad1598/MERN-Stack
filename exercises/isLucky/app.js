const isLucky = n => {
    let str = n.toString();
    let arr = [...str];
    let sumFirst =0
    let sumSecond = 0
    for(let i = 0; i < arr.length/2; i++){
        sumFirst += parseInt(arr[i]);
    }
    for(let i = arr.length /2; i < arr.length; i++){
        sumSecond += parseInt(arr[i]);
    }

    if(sumFirst === sumSecond){
        return true
    }
    return false;
}

console.log(isLucky(239017)) // false  / first-half = 14 / second-half = 8