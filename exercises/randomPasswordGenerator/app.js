// Write a function that generates a random password.

// The function should have a parameter that dictates the length of the password.
// The function may contain any upper and lower case characters.
// The function may contain any numbers and symbols.

function RandomPassword(num){

    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*?';
    let result = '';
    for(let i = 0; i < num; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result;
}


//The password should have an additional parameter that accepts a string as an argument, whose characters are all found within the generated password.

function RandomPassword(num, str){

    //let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*?';
    let result = '';
    for(let i = 0; i < num; i++){
        result += str.charAt(Math.floor(Math.random() * str.length))
    }
    return result;
}
