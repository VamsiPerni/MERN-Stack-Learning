const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    description: String,
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    price: {
      type: Number,
      min: 0,
      require: true,
    },
    quantity: {
      type: Number,
      min: 0,
      default: 1,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = model("product", productSchema); // name of the collection needs to be in singular , and mongodb will make itself prural in the DB when we created the schema

module.exports = { Product };
