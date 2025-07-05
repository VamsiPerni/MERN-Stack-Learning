const {
  getAllDataFromArrayFromFile,
  saveObjectToArrayInFile,
  editObjectFromArrayFromFile,
  deleteObjectFromFile,
} = require("./file-helper");

const filePath = "./data1.json";

const express = require("express");
const app = express();
app.use(express.json());

// app.GET
app.get("/api/v1/students", async (req, res) => {
  const studentArr = await getAllDataFromArrayFromFile(filePath);

  res.json({
    isSucess: true,
    message: "List of contents",
    data: studentArr,
  });
});

// app.POST
app.post("/api/v1/students", async (req, res) => {
  try {
    const data = req.body;
    const newObj = await saveObjectToArrayInFile(data, filePath);

    res.status(201);

    res.json({
      isSucess: true,
      message: "Data Added successfully",
      data: newObj,
    });
  } catch (err) {
    res.status(500);

    res.json({
      isSucess: false,
      message: "Internal Server Error",
      data: {},
    });
  }
});

// app.PATCH
app.patch("/api/v1/students/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    console.log(studentId);

    const reqEditContent = req.body;

    await editObjectFromArrayFromFile(reqEditContent, studentId, filePath);

    res.json({
      isSuccess: true,
      message:
        "Content Edited successfully , check it with the GET method to confirm the update",
    });
  } catch (err) {
    res.status(500);

    res.json({
      isSucess: false,
      message: "Internal Server Error",
      data: {},
    });
  }
});

// app.PUT
app.put("/api/v1/students/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    const getContentToUpdate = req.body;

    await editObjectFromArrayFromFile(getContentToUpdate, studentId, filePath);

    res.status(201);

    res.json({
      isSuccess: true,
      message: "Student ID is replaced with the new data",
    });
  } catch (err) {
    res.status(500);
    res.json({
      isSuccess: false,
      message: "Internal Server Error",
    });
  }
});

// DELETE
app.delete("/api/v1/students/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    await deleteObjectFromFile(studentId, filePath);

    res.status(200);

    res.json({
      isSuccess: true,
      message: `Data with ${studentId} is deleted sucessfully`,
    });
  } catch (err) {
    res.status(500);

    res.json({
      isSuccess: false,
      message: "Internal Server Error",
    });
  }
});

app.listen(8080, () => {
  console.log("Server is running");
});
