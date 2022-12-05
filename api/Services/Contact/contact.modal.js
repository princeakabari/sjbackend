const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phoneNo: {
      type: String,
      trim: true,
    },
    msg: {
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
const Contact = mongoose.model("contact", ContactSchema);
module.exports = Contact;
