// ----------------------------------

// import { useEffect, useState, useRef } from "react";

// const App = () => {
//   const [timeInSec, setTimeInSec] = useState(0);
//   const [isTimerRunning, setIsTimerRunning] = useState(true);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     console.log("---EMPTY----");
//   }, []); // empty dependecy array actually mean this effect will run only on first render / initial render

//   useEffect(() => {
//     console.log("Timer running sate changed", isTimerRunning);
//   }, [isTimerRunning]); // dependency array ---> this effect will run whenever the value of any variable insise depenency changes

//   const handlePause = () => {
//     if (isTimerRunning) {
//       setIsTimerRunning(false);
//     }
//   };

//   const handlePlay = () => {
//     if (!isTimerRunning) {
//       setIsTimerRunning(true);
//     }
//   };

//   const handleReset = () => {
//     intervalRef.current = setInterval(() => {
//       setTimeInSec(() => {
//         return 0;
//       });
//     });
//     setIsTimerRunning(false);
//   };

//   return (
//     <div>
//       <h2>00:00:{timeInSec}</h2>
//       {isTimerRunning ? (
//         <button onClick={handlePause} color={"red"}>
//           PAUSE
//         </button>
//       ) : (
//         <button onClick={handlePlay}>PLAY</button>
//       )}
//       <button onClick={handleReset}>RESET</button>
//     </div>
//   );
// };

// export default App;

// ----------------------------------
// play and Pause fetaure code from github

// import { useEffect, useState, useRef } from "react";

// const App = () => {
//   const [timeInSec, setTimeInSec] = useState(0);
//   const [isTimerRunning, setIsTimerRunning] = useState(true);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     console.log("Timer running sate changed", isTimerRunning);

//     let intervalId = null;

//     if (isTimerRunning) {
//       intervalId = setInterval(() => {
//         setTimeInSec((prev) => {
//           return prev + 1;
//         });
//       }, 1000);

//     }
//   }, [isTimerRunning]);

//   const handlePause = () => {
//     if (isTimerRunning) {
//       setIsTimerRunning(false);
//     }
//   };

//   const handlePlay = () => {
//     if (!isTimerRunning) {
//       setIsTimerRunning(true);
//     }
//   };

//   const handleReset = () => {
//     intervalRef.current = setInterval(() => {
//       setTimeInSec(() => {
//         return 0;
//       });
//     });
//     setIsTimerRunning(false);
//   };

//   return (
//     <div>
//       <h2>00:00:{timeInSec}</h2>
//       {isTimerRunning ? (
//         <button onClick={handlePause} color={"red"}>
//           PAUSE
//         </button>
//       ) : (
//         <button onClick={handlePlay}>PLAY</button>
//       )}
//       <button onClick={handleReset}>RESET</button>
//     </div>
//   );
// };

// export default App;

// ----------------------------------
// play and Pause fetaure with more clarity code from github

import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [timeInSec, setTimeInSec] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    console.log("Timer running sate changed", isTimerRunning);

    let intervalId = null;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimeInSec((prev) => {
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      console.log("Cleaning up interval...");
      clearInterval(intervalId);
    };
  }, [isTimerRunning]);

  const handlePause = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
    }
  };

  const handlePlay = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
    }
  };

  const handleLap = () => {
    console.log("Lap time ", timeInSec);

    setLaps((prev) => {
      const temp = [...prev];
      temp.push(timeInSec);
      return temp;
    });
  };

  const handleReset = () => {
    setTimeInSec(0);
    setIsTimerRunning(false);
    setLaps([]);
  };

  const hours = Math.floor(timeInSec / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeInSec % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSec % 60)
    .toString()
    .padStart(2, "0");

  return (
    <div>
      <h2>
        {hours}:{minutes}:{seconds}
      </h2>
      {isTimerRunning ? (
        <button id={"pause"} onClick={handlePause} color={"red"}>
          PAUSE
        </button>
      ) : (
        <button id={"play"} onClick={handlePlay}>
          PLAY
        </button>
      )}
      <button
        id="lap"
        onClick={() => {
          handleLap();
        }}
      >
        LAP
      </button>
      <button id={"reset"} onClick={handleReset}>
        RESET
      </button>
      <div>
        {laps.map((elem, idx) => {
          return <p key={idx}>Lap : {elem}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
