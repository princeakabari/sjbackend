const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CareerSchema = new Schema(
  {
    post: {
      type: String,
      trim: true,
    },
    jobLocation: {
      type: String,
      trim: true,
    },
    department: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    experience: {
      type: String,
      trim: true,
    },
    training: {
      type: String,
      trim: true,
    },
    salary: {
      type: String,
      trim: true,
    },
    otherBenefits: {
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
const Career = mongoose.model("career", CareerSchema);
module.exports = Career;
