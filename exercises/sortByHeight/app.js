    // ************************ sortByHeight **************************************
    // Some people are standing in a row in a park. There are trees between them 
    //which cannot be moved. Your task is to rearrange the people by their heights 
    //in a non-descending order without moving the trees. People can be very tall!
    //******************************************************************************

function sortByHeight(a) {
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


// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
