const multTable = (n) => {
    let multArr = []
    for(let i = 1; i <= n; i++){
        let eachRow = []
        for(let j = 1; j <= n; j++){
            eachRow.push(j * i)
        }
        multArr.push(eachRow)
    }
    return multArr
}


console.log(multTable(10));