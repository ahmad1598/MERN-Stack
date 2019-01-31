// Requirements:

// You will have one section (<div>) for each math operation (so 3 sections) total
// Each section has two inputs to take the first and second numbers
// Each section will have a button to perform the operation
// You will inject the result into the HTML (not an alert)
// Your website will have 3 colors
// Your website will have proper padding/spacing to lay things out nicely





document.getElementById('addButton').addEventListener('click', add);

function add(e){
    e.preventDefault();
    let x = document.getElementById("addFirstNumber").value;
    let y = document.getElementById('addSecondNumber').value;
    document.getElementById('addResult').textContent = Number(x) + Number(y);
    document.getElementById('addResult').style = "background-color:#bdc3c7; color:#2e3131; margin-left:10px;"
    
}


document.getElementById('subtractButton').addEventListener('click', function(e){
    e.preventDefault();
    let x = document.getElementById('subtractFirstNumber').value;
    let y = document.getElementById('subtractSecondNumber').value;
    document.getElementById('subtractResult').textContent = Number(x) - Number(y);
    document.getElementById('subtractResult').style = "background-color:#bdc3c7; color:#2e3131; margin-left:10px;"
})


document.getElementById('multiplyButton').addEventListener('click', function(e){
    e.preventDefault();
    let x = document.getElementById('multiplyFirstNumber').value;
    let y = document.getElementById('multiplySecondNumber').value;
    document.getElementById('multiplyResult').textContent = Number(x) * Number(y);
    document.getElementById('multiplyResult').style = "background-color:#bdc3c7; color:#2e3131; margin-left:10px;"
})

//first input mouse over 
let firstInput = document.getElementById('addFirstNumber');
firstInput.addEventListener('mouseover', function(){
    firstInput.style = "background-color: #fcd670; "
})
//first input mouse leave
firstInput.addEventListener('mouseleave' , function(){
    firstInput.style = "background-color: "
})

//second input mouse over
let secondInput = document.getElementById('addSecondNumber');
secondInput.addEventListener('mouseover', function(){
    secondInput.style = "background-color: #fcd670; "
})
// second input mouse leave
secondInput.addEventListener('mouseleave' , function(){
    secondInput.style = "background-color: "
})

//third input mouse over
let thirdInput = document.getElementById('subtractFirstNumber');
thirdInput.addEventListener('mouseover', function(){
    thirdInput.style = "background-color: #fcd670; "
})
// third input mouse leave
thirdInput.addEventListener('mouseleave' , function(){
    thirdInput.style = "background-color: "
})

//forth input mouse over
let forthInput = document.getElementById('subtractSecondNumber');
forthInput.addEventListener('mouseover', function(){
    forthInput.style = "background-color: #fcd670; "
})
// forth input mouse leave
forthInput.addEventListener('mouseleave' , function(){
    forthInput.style = "background-color: "
})

//fifth input mouse over
let fifthInput = document.getElementById('multiplyFirstNumber');
fifthInput.addEventListener('mouseover', function(){
    fifthInput.style = "background-color: #fcd670; "
})
// fifth input mouse leave
fifthInput.addEventListener('mouseleave' , function(){
    fifthInput.style = "background-color: "
})

//sixth input mouse over
let sixthInput = document.getElementById('multiplySecondNumber');
sixthInput.addEventListener('mouseover', function(){
    sixthInput.style = "background-color: #fcd670; "
})
// sixth input mouse leave
sixthInput.addEventListener('mouseleave' , function(){
    sixthInput.style = "background-color: "
})
