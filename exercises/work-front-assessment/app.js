var timer;
var form = document.form;
form.addEventListener("submit", handleTimer)

function handleTimer(e) {
    e.preventDefault()
    clearInterval(timer)
    timer = setInterval(showtimer, 1000)
}

function showtimer() {
    var monthSeleted = document.getElementById('month').value
    var daySelected = document.getElementById('day').value
    var yearSelected = document.getElementById('year').value

    if (document.getElementById('month').value !== 'Month') {
        document.getElementById('countdown').style["display"] = "flex"

        var end = new Date(`${monthSeleted}, ${daySelected}, ${yearSelected}`);
        var now = new Date().getTime();
        var second = 1000;
        var minute = 1000 * 60;
        var hour = 1000 * 60 * 60;
        var day = 1000 * 60 * 60 * 24;
        var remain = (end - now)
        if (remain < 0) {
          clearInterval(timer);
          return
        }

        document.getElementById("day-display").innerHTML = Math.floor(remain / day);
        document.getElementById("hour-display").innerHTML = Math.floor((remain % day) / hour);
        document.getElementById("minute-display").innerHTML = Math.floor((remain % hour) / minute);
        document.getElementById("second-display").innerHTML = Math.floor((remain % minute) / second);
      }
}