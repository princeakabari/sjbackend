const userController = require("../api/Controller/User/user.controller");
const productController = require("../api/Controller/Products/products.controller");
const categoryController = require("../api/Controller/Category/category.controller");
const bannerController = require("../api/Controller/Banner/banner.controller");
const careerController = require("../api/Controller/Career/career.controller");
const contactController = require("../api/Controller/Contact/contact.controller");

const initialize = (app) => {
  app.use("/api/v1/user", userController);
  app.use("/api/v1/product", productController);
  app.use("/api/v1/category", categoryController);
  app.use("/api/v1/banner", bannerController);
  app.use("/api/v1/career", careerController);
  app.use("/api/v1/contact", contactController);

};
module.exports = { initialize };
