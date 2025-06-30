// -----------------------------

import { useEffect, useState, useRef } from "react";

const App = () => {
  const [timeInSec, setTimeInSec] = useState(0); // If you want value to be stored + rendered on the screen properly then go with useState
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const intervalRef = useRef(null); // If you want value to be stored + but do not want to rendered on the screen then go with intervalRef

  useEffect(() => {
    console.log("SETTING INTERVAL");
    intervalRef.current = setInterval(() => {
      setTimeInSec((prevTime) => {
        return prevTime + 1;
      });
    }, 1000);
  }, []);

  const handlePause = () => {
    const intervalId = intervalRef.current;
    clearInterval(intervalId);
    setIsTimerRunning(false);
  };

  const handlePlay = () => {
    if (!isTimerRunning) {
      intervalRef.current = setInterval(() => {
        setTimeInSec((prevTime) => {
          return prevTime + 1;
        });
      }, 1000);
    }
  };

  const handleReset = () => {
    intervalRef.current = setInterval(() => {
      setTimeInSec(() => {
        return 0;
      });
    });
    setIsTimerRunning(false);
  };

  return (
    <div>
      <h2>00:00:{timeInSec}</h2>
      {isTimerRunning ? (
        <button onClick={handlePause} color={"red"}>
          PAUSE
        </button>
      ) : (
        <button onClick={handlePlay}>PLAY</button>
      )}
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default App;
