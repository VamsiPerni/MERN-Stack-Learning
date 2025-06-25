const timerText = document.getElementById("timer-text");

let intervalId = null;
let timeInSec = 0;

const updateTime = () => {
  if (timeInSec > 0) {
    timeInSec--;
    let min = Math.floor(timeInSec / 60);
    timerText.innerText = `
        Time Left: ${min < 10 ? "0" + min : min}:${
      timeInSec % 60 < 10 ? "0" + (timeInSec % 60) : timeInSec % 60
    }
      `;
    console.log(timeInSec);
  } else {
    clearInterval(intervalId);
    alert("Time Up !");
  }
};

const timerFunc = (min) => {
  timeInSec = min * 60;
  updateTime();
  intervalId = setInterval(updateTime, 1000);
};

const handleStart = () => {
  timeEntered = document.getElementById("minutes-text").value;
  console.log(timeEntered);
  timerFunc(timeEntered);
};

const handleStop = () => {
  clearInterval(intervalId);
};

const handleResume = () => {
  intervalId = setInterval(updateTime, 1000);
};

const handleReset = () => {
  timerText.innerText = "Time Left: 00:00";
  clearInterval(intervalId);
};
