var count = 0;
var label = document.getElementById('label');

var btn = document.getElementById('btn').addEventListener('click', storageFunction);


var countDownSecond =  document.getElementById('countDown');

function countSecond(){
    var countDown = new Date();
    var sec = countDown.getSeconds();
    countDownSecond.textContent = sec + ' sec';
}
setInterval(countSecond,1000);



function storageFunction(){

        if (localStorage.count) {
            localStorage.count = Number(localStorage.count)+1;
          } else {
            localStorage.count = 1;
          }     
          label.innerHTML = "You have clicked the button " + localStorage.count + " time(s).";
}
    
label.innerHTML = "You have clicked the button " + localStorage.count + " time(s).";
