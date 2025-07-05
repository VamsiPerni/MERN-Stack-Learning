// -------------------------------------------------------

// below is the basic example of making the server through nodeJS-web_server
// We are making the {server} because we need to make API's

// const http = require("http");

// const app = http.createServer((req, res) => {
//   console.log("Request received by server");
//   console.log(Object.keys(req));

//   res.end("Server responed and send back the result to client");
// });

// //
// app.listen(8080, () => {
//   console.log("Server is Running");
// });

// But the above is old standard of making
// whenever we change the code , we need to re-start the application or we can  use {nodemon} that will automactically re-render/re-run the application whenever we have changed anything

// -------------------------------------------------------

// we can send only one time to the client regarding the response , once the {res.end} line is written then if we have written any lines after those lines then we will get error , because we cannot write the code afer responese has been sent to the client

// const http = require("http");

// const app = http.createServer((req, res) => {
//   console.log("Request received by server");

//   if (req.method === "GET") {
//     const obj = { name: "Vamsi", city: "Andhra Pradesh" };
//     res.end(JSON.stringify(obj, null, 4)); //we are converting the object to text , so we need to use {JSON.stringify}
//   } else {
//     console.log(Object.keys(res));
//     res.end(
//       "Server responed but the method is not matched and common message is send back the result to client"
//     );
//   }
// });

// //
// app.listen(8080, () => {
//   console.log("Server is Running");
// });

// -------------------------------------------------------

const http = require("http");

const app = http.createServer((req, res) => {
  console.log("Request received by server");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    switch (req.url) {
      case "/api/v1/students": {
        const obj = {
          isSuccess: true,
          message: "Students list fetched successfully",
          data: { name: "Vamsi", city: "Amaravthi", score: 85 },
        };
        res.end(JSON.stringify(obj, null, 4));
        break;
      }
      case "/api/v1/products": {
        const obj = {
          isSuccess: true,
          message: "Products list fetched successfully",
          data: {
            title: "Mixer Grinder",
            price: 200,
            category: "Utensils/Electronics",
          },
        };
        res.end(JSON.stringify(obj, null, 4));
        break;
      }
      default: {
        res.end(
          JSON.stringify({ isSucess: false, message: "Invalid API Endpoint" })
        );
      }
    }
  } else {
    console.log(Object.keys(res));
    res.end(
      "Server responed but the method is not matched and common message is send back the result to client"
    );
  }
});

app.listen(8080, () => {
  console.log("Server is Running");
});
