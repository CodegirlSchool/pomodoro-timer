document.addEventListener("DOMContentLoaded", function() {
    const pomodoroBtn = document.getElementById("pomodoro");
    const breakBtn = document.getElementById("break");
    const startBtn = document.getElementById("start");
    const resetBtn = document.getElementById("reset");
    const pomodoroTimeDisplay = document.getElementById("pomodoro-time");

    let isPomodoro = true; 
    let timerInterval;
    let minutes = 25; 
    let seconds = 0; 

    function updateTimerDisplay() {
        pomodoroTimeDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }


    function startTimer() {
        startBtn.textContent = "Stop"; 
        startBtn.classList.remove("active"); 
        timerInterval = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timerInterval); 
                    resetTimer(); 
                    return;
                }
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateTimerDisplay(); 
        }, 1000);
    }

   
    function resetTimer() {
        clearInterval(timerInterval); 
        isPomodoro ? (minutes = 25) : (minutes = 5);
        seconds = 0; 
        updateTimerDisplay(); 
        startBtn.textContent = "Start"; 
        startBtn.classList.add("active"); 
    }

    pomodoroBtn.addEventListener("click", function() {
        if (!isPomodoro) {
            isPomodoro = true; 
            resetTimer(); 
            pomodoroBtn.classList.add("active"); 
            breakBtn.classList.remove("active"); 
        }
    });


    breakBtn.addEventListener("click", function() {
        if (isPomodoro) {
            isPomodoro = false;
            resetTimer();
            breakBtn.classList.add("active"); 
            pomodoroBtn.classList.remove("active"); 
    });

    startBtn.addEventListener("click", function() {
        if (startBtn.textContent === "Start") {
            startTimer(); 
        } else {
            clearInterval(timerInterval); 
            startBtn.textContent = "Start"; 
            startBtn.classList.add("active");
        }
    });

 
    resetBtn.addEventListener("click", function() {
        resetTimer(); 
    });

    updateTimerDisplay();
});
