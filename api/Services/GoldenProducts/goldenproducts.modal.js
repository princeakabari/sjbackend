const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GoldenproductSchema = new Schema(
  {
    goldenproductName: {
      type: String,
      required: true,
      trim: true,
    },
    goldenproductImg: {
      type: String,
      trim: true,
    },
    goldenproductDescription: {
      type: String,
      trim: true,
    },
    categoryId: [
      {
        type: mongoose.Types.ObjectId,
        trim: true,
        ref: "golden",
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
const Goldenproducts = mongoose.model("goldenproducts", GoldenproductSchema);
module.exports = Goldenproducts;
