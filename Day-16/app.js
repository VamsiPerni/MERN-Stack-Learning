const express = require("express");

const app = express();
app.use(express.json());

const { Product } = require("./models/productSchema.js");

require("./db.js");
app.get("/", (req, res) => {
  res.status(201);

  res.json({
    isSuccess: true,
    message: "Server is running successfully",
    data: {},
  });
});

app.listen(8080, () => {
  console.log("SERVER IS RUNNING");
});

// POST
app.post("/api/v1/products", async (req, res) => {
  try {
    const data = req.body;
    const newProducts = await Product.create(data);

    res.status(201);

    res.json({
      isSuccess: true,
      message: "Product Created",
      data: {
        product: newProducts,
      },
    });
  } catch (err) {
    console.log("Error occured in post Products : ", err.message);
    if (err.name === "validationError" || err.code == "11000") {
      res.status(400);
      res.json({
        isSuccess: false,
        message: err.message,
        data: {},
      });
    } else {
      res.status(500);
      res.json({
        isSuccess: false,
        message: "Internal server Error",
        data: {
          errMessage: err.message,
        },
      });
    }
  }
});

// GET
app.get("/api/v1/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200);
    res.json({
      isSuccess: true,
      message: "Products Fetched",
      data: {
        data: allProducts,
      },
    });
  } catch (err) {
    res.status(500);
    res.json({
      isSuccess: false,
      message: "Internal server Error",
      data: {
        errMessage: err.message,
      },
    });
  }
});

// DELETE
app.delete("/api/v1/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const deleteItem = await Product.findByIdAndDelete(productId);

    if (deleteItem == undefined) {
      res.status(400);
      res.json({
        isSuccess: false,
        message: "Invalid product id",
        data: {},
      });
    }

    res.status(204); // there is no return here so we are sending the status  204 (we have done something like deleting but not returned anything)
    res.json({
      isSuccess: true,
      message: "product:Deleted",
      data: {},
    });
  } catch (err) {
    res.status(500);
    res.json({
      isSuccess: false,
      message: "Internal server Error",
      data: {
        errMessage: err.message,
      },
    });
  }
});
