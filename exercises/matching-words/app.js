const matching = str => {
    let arr = str.split(' ')
    let arrObj = {}
    return arr.filter(word => { 
        if(arrObj[word]){
            return word
        } else{
            arrObj[word] = word
        }
    })
}

console.log(matching("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."))

