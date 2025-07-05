// ---------------------------------------------
// the below is the example to start the server in the express JS

const express = require("express");
const {
  getAllDataFromArrayFromFile,
  saveObjectToArrayInFile,
} = require("./file-helper");

const filePath = "./local-db.json";

const app = express();

app.use(express.json()); // it tells the express server to read the incoming requests body in JSON format (when we are doing POST then it will directly tell to the epxress that whatever the input request are coming  by JSON format )

app.get("/api/v1/students", async (req, res) => {
  const studentArr = await getAllDataFromArrayFromFile(filePath);

  res.json({
    isSucess: true,
    message: "List of contents",
    data: studentArr,
  });
});

app.post("/api/v1/students", async (req, res) => {
  try {
    const data = req.body;
    const newObj = await saveObjectToArrayInFile(data, filePath);

    res.status(201);

    res.json({
      isSuccess: true,
      message: "Data added succssfully",
      data: newObj,
    });
  } catch (err) {
    res.status(500);

    res.json({
      isSuccess: false,
      message: "Internal Server Error",
      data: {},
    });
  }
});

// app.put

// app.patch

app.patch("/api/v1/students/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    console.log(studentId);
  } catch (err) {
    res.status(500);

    res.json({
      isSuccess: false,
      message: "Internal Server Error",
      data: {},
    });
  }
});

// app.delete

// The below CRUD Operations are for the products

app.get("/api/v1/products", (req, res) => {
  res.json({
    isSucess: true,
    message: "List of products",
    data: {
      title: "Mixer Grinder",
      price: 2000,
      category: "Utensils/Electronics",
    },
  });
});

app.listen(8080, () => {
  console.log("--------Server is running");
});
