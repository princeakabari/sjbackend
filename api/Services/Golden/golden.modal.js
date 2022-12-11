const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GoldenSchema = new Schema(
  {
    goldenName: {
      type: String,
      required: true,
      trim: true,
    },
    goldenImg: {
      type: String,
      trim: true,
    },
    isActive: {
      type: String,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
const Golden = mongoose.model("golden", GoldenSchema);
module.exports = Golden;
