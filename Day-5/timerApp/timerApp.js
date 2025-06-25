const timerTextElem = document.getElementById("timer-text");
let timeInSec = 0; // It is changable content , so we are taking it in {let}

// --->>Basic understanding , see it in console

// const timerFunc = () => {
//   timeInSec++;
//   console.log(timeInSec);
// };

// -------->>

const timerFunc = () => {
  timeInSec++;
  console.log(timeInSec);

  // Calculating SECONDS
  const sec = timeInSec % 60;

  // Calculating MINUTES
  let min = Math.floor(timeInSec / 60);
  min = min % 60; // after 60th minute if we do not write this line then it will go to the 61,62,....(take pen and paper to understand the logic)

  // Calculating HOURS
  const hrs = Math.floor(timeInSec / 3600);

  // for printing two zeroes we are writing the logic here , as if the numbers are less than 10 then we will be printing {0} before the hour number
  //   timerTextElem.innerText = timeInSec; // it will print on the screen
  // Method - 1 :-
  timerTextElem.innerText = `${hrs < 10 ? "0" + hrs : hrs}:${
    min < 10 ? "0" + min : min
  }:${sec < 10 ? "0" + sec : sec}`;

  // Method - 2 :-
  // timerTextElem.innerText = `${hrs.toString().padStart(2, "0")}:${min
  //   .toString()
  //   .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
};

// setInterval is used to repeatedly execute a specified fucntion or block of code at fixed time of intervals. So, Here timerFunc is set to repeatedly run after every 1000ms(1 sec)
let intervalId = setInterval(timerFunc, 1000);

const handleReset = () => {
  timeInSec = 0;
  timerTextElem.innerText = `00:00:00`; //If we comment this one , we will directly get the 1 second and so on . to set zero first we are changing the text where it is visible to the user , Comment this line and reset it and you are able to understand what my intuition is
};

const handlePause = () => {
  //Here in the setInterval we are everytime repeating the timeerFunc to repeat for every 1sec , but clearInterval says do not repeat that tiemFunc anymore then the timer will stop working
  clearInterval(intervalId);
};

const handleResume = () => {
  // Here again we are passing the setInterval with specific timing which says to repeat that function
  intervalId = setInterval(timerFunc, 1000);
};

const handleLap = () => {
  // here we are creating the new paragraph element
  const para = document.createElement("p");
  // whenever we click the lap button , we will get the same text which is in timerTextElem into the paragraph tag ann in the last line we are appending to the newDiv to visible on the screen
  para.innerText = timerTextElem.innerText;
  document.getElementById("root").appendChild(para);
};
