const timerText = document.getElementById("timer-text");
let timeInSec = 0;

const timerFunc = () => {
  timeInSec++;
  console.log(timeInSec);

  //calcultating seconds
  let seconds = timeInSec % 60;

  // calculating mintues
  let minutes = Math.floor(timeInSec / 60);
  minutes = minutes % 60;

  // calculating hours
  let hours = Math.floor(timeInSec / 3600);
  timerText.innerText = `
  ${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}
  `;
};

let intervalId = setInterval(timerFunc, 1000);

const handlePause = () => {
  clearInterval(intervalId);
};

const handleResume = () => {
  intervalId = setInterval(timerFunc, 1000);
};

const handleReset = () => {
  timeInSec = 0;
  timerText.innerText = "00:00:00";
};

const handleLap = () => {
  const lapDiv = document.getElementById("lap-div");
  const para = document.createElement("p");
  para.innerText = timerText.innerText;
  lapDiv.append(para);
};
