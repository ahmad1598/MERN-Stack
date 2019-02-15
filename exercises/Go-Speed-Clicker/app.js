
(function() {
    var display = document.getElementById('count-display-clicks')
    var btn = document.getElementById('count-btn')
    var countdown = document.getElementById("countdown")

    var count = localStorage.count || 0;
    var countDownNum = 10
    var countID;

    if(count > 0) {
        count = 0
        localStorage.count = 0
    }
    countdown.textContent = countDownNum

    display.textContent = count

    function stopTimer() {
        clearInterval(countID)
    }

    function countDown() {
        countDownNum --
        countdown.textContent = countDownNum
    }

    btn.addEventListener('click', increment)

    function increment() {
         if(!countID) {
            countID = setInterval(countDown, 1000)
            setTimeout(stopTimer, 10999)
        }
        if(countDownNum > 0) {
            count++
            localStorage.count = count 
            display.textContent = count
        }
    }

})()