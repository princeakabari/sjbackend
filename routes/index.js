const userController = require("../api/Controller/User/user.controller");
const productController = require("../api/Controller/Products/products.controller");
const goldenController = require("../api/Controller/Golden/golden.controller");
const bannerController = require("../api/Controller/Banner/banner.controller");
const careerController = require("../api/Controller/Career/career.controller");
const contactController = require("../api/Controller/Contact/contact.controller");
const sliverController = require("../api/Controller/Sliver/sliver.controller");
const goldenproductController = require("../api/Controller/GoldenProducts/goldenproducts.controller")

const initialize = (app) => {
  app.use("/api/v1/user", userController);
  app.use("/api/v1/product", productController);
  app.use("/api/v1/goldenproduct", goldenproductController);
  app.use("/api/v1/golden", goldenController);
  app.use("/api/v1/banner", bannerController);
  app.use("/api/v1/career", careerController);
  app.use("/api/v1/contact", contactController);
  app.use("/api/v1/sliver", sliverController);
};
module.exports = { initialize };
