

const sortByHeight = a => {
    let arr =[];
    for(let i of a){
        if(i != -1) arr.push(i);
    }
    arr.sort((a,b) => a-b);
    for(let i =0; i < a.length; i++){
        if(a[i] == -1) continue;
        for(let item of arr){
            let lastItem = 0;
            if(item != -1 && a[i] > lastItem){
                a[i] = item;
                lastItem = arr.shift();
                break;
            }
        }
    }
    return a;
}


console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

//ourput : [-1, 150, 160, 170, -1, -1, 180, 190]