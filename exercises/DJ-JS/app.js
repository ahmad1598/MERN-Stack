// The square's color will change as follows:

// Blue when the mouse hovers over the square
let square = document.getElementById('square');

square.addEventListener('mouseover', () => {
    document.getElementById('square').style = "background-color:blue";
})
// Red when the mouse button is held down over the square
square.addEventListener('mousedown',() => {
    document.getElementById('square').style = "background-color:red";
})
// Yellow when the mouse button is let go over the square
square.addEventListener('mouseleave', () => {
    document.getElementById('square').style = "background-color:yellow";
})
// Green when the mouse is double clicked in the square
square.addEventListener('dblclick', () => {
    document.getElementById('square').style = "background-color: Green";
})
// Orange when the mouse scroll is used somewhere in the window (not just over the square).
square.addEventListener('wheel', () => {
    document.getElementById('square').style ="background-color: Orange";
})

// You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color. Check 

//check if the key 'b' is pressed
document.addEventListener("keydown", (e) =>{
    if(e.which === 66){
        document.getElementById('square').style = "background-color:blue";
    }
})

//check if the key 'r' is pressed
document.addEventListener("keydown", (e) =>{
    if(e.which === 82){
        document.getElementById('square').style = "background-color:red";
    }
})

//check if the key 'y' is pressed
document.addEventListener("keydown", (e) =>{
    if(e.which === 89){
        document.getElementById('square').style = "background-color:yellow";
    }
})

//check if the key 'g' is pressed
document.addEventListener("keydown", (e) =>{
    if(e.which === 71){
        document.getElementById('square').style = "background-color: Green";
    }
})

//check if the key 'o' is pressed
document.addEventListener("keydown", (e) =>{
    if(e.which === 79){
        document.getElementById('square').style ="background-color: Orange";
    }
})