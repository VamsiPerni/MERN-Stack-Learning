const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vamsi-perni:pass123@cluster0.689exgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      dbName: "Day16",
    }
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("There is something error in connecting DB ", err.message);
  });
