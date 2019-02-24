const matching = str => {
    let arrObj = {}
    let result = []
    for(let word of str.split(' ')){
        arrObj[word] ? (result.indexOf(word) === -1 ? result.push(word) : null) : arrObj[word] = word
    }
    return result.join(' ')

}

console.log(matching("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."))

//OUTPUT: lever on far pull the right

