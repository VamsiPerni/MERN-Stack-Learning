// const domRoot = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(domRoot);

// const arr = [
//   {
//     name: "vamsi",
//     score: 20,
//   },
//   {
//     name: "Perni",
//     score: 30,
//   },
//   {
//     name: "Likhilesh",
//     score: 40,
//   },
//   {
//     name: "Srini",
//     score: 45,
//   },
//   {
//     name: "Rao",
//     score: 50,
//   },
// ];

// const Card = (props) => {
//   const { name, score } = props;
//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>{score}</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <Card name={arr[0].name} score={arr[0].score} />
//     </div>
//   );
// };

// reactRoot.render(App()); // app function
// // reactRoot.render(<App />); // app component
// // but both the lines will work same

// ---------------------------------------------------------------

// const domRoot = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(domRoot);

// const arr = [
//   {
//     name: "vamsi",
//     score: 20,
//   },
//   {
//     name: "Perni",
//     score: 30,
//   },
//   {
//     name: "Likhilesh",
//     score: 40,
//   },
//   {
//     name: "Srini",
//     score: 45,
//   },
//   {
//     name: "Rao",
//     score: 50,
//   },
// ];

// const Card = (props) => {
//   const { name, score } = props;
//   return (
//     <div className="card">
//       <h3>{name}</h3>
//       <p>{score}</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="parent">
//       <h1>Hello</h1>
//       {arr.map((elem) => {
//         return <Card name={elem.name} score={elem.score} />;
//       })}
//     </div>
//   );
// };

// reactRoot.render(App()); // app function
// // reactRoot.render(<App />); // app component
// // but both the lines will work same

// ---------------------------------------------------------------

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const arr = [
  {
    name: "vamsi",
    score: 20,
  },
  {
    name: "Perni",
    score: 30,
  },
  {
    name: "Likhilesh",
    score: 40,
  },
  {
    name: "Srini",
    score: 45,
  },
  {
    name: "Rao",
    score: 50,
  },
];

const styleObj = {};

const Card = (props) => {
  const { name, score } = props;
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{score}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="parent">
      {arr.map((elem) => {
        return <Card name={elem.name} score={elem.score} />;
      })}
    </div>
  );
};

reactRoot.render(App()); // app function
// reactRoot.render(<App />); // app component
// but both the lines will work same
