//function expression
var sayHello = function(){
    console.log("hello class")
}

//------------------- Tasks Level One -------------------
sayHello();

function sayHello(){
    console.log('hello class');
}

//------------------ Tasks Level Two ---------------------
//function declaration 
function sayHelloByName(name){
    return 'Hello ' + name;
}

//call the function and pass the argument
console.log(sayHelloByName('Fred'));

//------------------ Tasks Level Three -------------------
function sayHelloByAge(age){
    return age;
}
console.log(sayHelloByAge('Hello Fred, how do you like being 27?'));

