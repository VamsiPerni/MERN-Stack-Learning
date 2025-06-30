// -----------------------------

// import { useState } from "react";

// const App = () => {
//   const [timeInSec, setTimeInSec] = useState(0);
//   console.log("timeInSec : ", timeInSec);

//   setInterval(() => {
//     setTimeInSec((prevTime) => {
//       return prevTime + 1;
//     });
//   }, 20000); // browser (call this function after every 1 second)
//   // -->> OK ===> id ::st1

//   return (
//     <div>
//       <h2>00:00:{timeInSec}</h2>
//     </div>
//   );
// };

// export default App;

// -----------------------------
// when component re-renders -> we need to unmount + mount
// removable of the old code is -> unmount
// adding of the new code is -> mount

import { useEffect, useState } from "react";

const App = () => {
  const [timeInSec, setTimeInSec] = useState(0);
  console.log("timeInSec : ", timeInSec);

  useEffect(() => {
    console.log("SETTING INTERVAL");

    setInterval(() => {
      setTimeInSec((prevTime) => {
        return prevTime + 1;
      });
    }, 1000); // browser (call this function after every 1 second)
    // -->> OK ===> id ::st1

    return () => {};
  }, []);

  return (
    <div>
      <h2>00:00:{timeInSec}</h2>
    </div>
  );
};

export default App;

// -----------------------------
// when component re-renders -> we need to unmount + mount
// removable of the old code is -> unmount
// adding of the new code is -> mount
// Below example haven't done yet , we will be discussing when we are seeing the pages

// import { useEffect, useState } from "react";

// const App = () => {
//   const [timeInSec, setTimeInSec] = useState(0);
//   console.log("timeInSec : ", timeInSec);

//   let id = setInterval(() => {
//     setTimeInSec((prevTime) => {
//       return prevTime + 1;
//     });
//   }, 5000); // browser (call this function after every 1 second)
//   // -->> OK ===> id ::st1

//   // clearInterval(id);  // here we will not clearInterval(id); because we defined just before the setInterval and just after that clearign is not make any sense

//   // here we need to use {useEffect}
//   useEffect(() => {
//     console.log("logic...", id);

//     return () => {
//       console.log("cleanup function running ", id);
//       clearInterval(id);
//     };
//   });

//   return (
//     <div>
//       <h2>00:00:{timeInSec}</h2>
//     </div>
//   );
// };

// export default App;
