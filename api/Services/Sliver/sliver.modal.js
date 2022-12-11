const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SliverSchema = new Schema(
  {
    sliverName: {
      type: String,
      required: true,
      trim: true,
    },
    sliverImg: {
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
const Sliver = mongoose.model("sliver", SliverSchema);
module.exports = Sliver;
