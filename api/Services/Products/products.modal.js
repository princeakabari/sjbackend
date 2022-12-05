const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    productImg: {
      type: String,
      trim: true,
    },
    productDescription: {
      type: String,
      trim: true,
    },
    categoryId: [
      {
        type: mongoose.Types.ObjectId,
        trim: true,
        ref: "category",
      },
    ],
    isActive: {
      type: String,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
const Products = mongoose.model("products", ProductSchema);
module.exports = Products;
