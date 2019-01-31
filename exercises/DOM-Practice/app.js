let header = document.getElementById('header');
// console.log(header)

let myH1 = document.createElement('h1');
myH1.textContent = "Your New Element";
let container = document.getElementById('container');
container.appendChild(myH1);



var x = document.getElementById("num").value;
document.getElementById('btn').addEventListener('click',function(){
    console.log(x);
});



/// grab elements by name
let from = document.form; // will grab the from name of the form
let nameInput = form.name; // will grab the name of the name input 
let ageInput = form.age; // will grab the age of the age input