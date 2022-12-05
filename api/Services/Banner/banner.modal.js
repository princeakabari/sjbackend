const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BannerSchema = new Schema(
  {
    bannerName: {
      type: String,
      required: true,
      trim: true,
    },
    bannerImg: {
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
const Banner = mongoose.model("banner", BannerSchema);
module.exports = Banner;
