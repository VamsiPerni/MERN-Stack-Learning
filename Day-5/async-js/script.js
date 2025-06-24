console.log("START");

const timeDelayInMs = 10000;

const callbackFunc = () => {
  console.log("Hello");
};

// window.setTimeout(callbackFunc, timeDelayInMs); // This will use to call some function after some time
// console.log("END");

window.setInterval(callbackFunc, timeDelayInMs); // It will execute everytime like as loop of 10sec
console.log("END");
