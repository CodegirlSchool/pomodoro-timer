const button = document.querySelector('#start')
const resetButton = document.querySelector('#reset')


const timeBroser = document.querySelector('#pomodoro-time')
let minutes = timeBroser.textContent.split(':')[0];
let seconds = timeBroser.textContent.split(':')[1];
let timerId = 0;

function clickResetButton() {
    clearInterval(timerId);
    seconds = 0;
    minutes = 25;
    button.textContent = "start";
    if (seconds < 10) {
        timeBroser.innerHTML = minutes + ":" + "0" + seconds;
    } else
        timeBroser.innerHTML = minutes + ":" + seconds;
}

function clickButton() {

    if (button.textContent == "start") {
        button.textContent = "stop";
        timerId = setInterval(() => {
            seconds--;
            if (seconds <= 0) {
                //clearTimeout(timerId);
                seconds = 59;
                minutes--;
            }
            if (minutes < 0) {
                clearInterval(timerId);
                seconds = 0;
                minutes = 25;
                button.textContent = "start";
            }
            if (seconds < 10) {
                timeBroser.innerHTML = minutes + ":" + "0" + seconds;
            } else
                timeBroser.innerHTML = minutes + ":" + seconds;
        }, 10);

    } else if (button.textContent == "stop") {
        button.textContent = "start";
        clearInterval(timerId);
    }


}
button.addEventListener('click', clickButton);
resetButton.addEventListener('click', clickResetButton);

/**/