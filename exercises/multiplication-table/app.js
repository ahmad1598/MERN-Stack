
const multTable = () => {
    let multArr = []
    for(let i = 1; i < 11; i++){
        let eachRow = []
        for(let j = 1; j < 11; j++){
            eachRow.push(j * i)
        }
        multArr.push(eachRow)
    }
    return multArr
}


console.log(multTable());