window.onload = function() {
    var tens = 0
    var seconds = 0 
    var minutes = 0

    var appendsTens = document.getElementById('tens')
    var appendSeconds = document.getElementById('seconds')
    var appendMinutes = document.getElementById('minutes')

    var buttonStart = document.getElementById('button-start')
    var buttonStop = document.getElementById('button-stop')
    var buttonReset = document.getElementById('button-reset')

    var interval


    buttonStart.onclick = function() {
        clearInterval(interval)
        interval = setInterval(statTimer, 10)
    }

    buttonStop.onclick = function() {
        clearInterval(interval)
    }

    buttonReset.onclick = function() {
        clearInterval(interval)
        tens = "00"
        seconds = "00"
        minutes = "00"

        appendsTens.innerHTML = tens
        appendSeconds.innerHTML = seconds
        appendMinutes.innerHTML = minutes
    }

    function statTimer() {
        tens++

        if(tens <= 9) {
            appendsTens.innerHTML = "0" + tens
        }
        if(tens > 9) {
            appendsTens.innerHTML = tens
        }
        if(tens > 99) {
            seconds++
            appendSeconds.innerHTML = "0" + seconds
            tens = 0
            appendsTens.innerHTML = tens
        }

        if(seconds > 9) {
            appendSeconds.innerHTML = "0" + seconds
        }
        if(seconds >= 10) {
            appendSeconds.innerHTML = seconds
        }
        if(seconds >= 60) {
            minutes++
            appendMinutes.innerHTML = "0" + minutes
            seconds = 0
            appendSeconds.innerHTML = "0" + seconds
        }

        if(minutes > 9) {
            appendMinutes.innerHTML = minutes
        }
    }
}