const { responseMessages } = require("../../../helper/responseMessages");
const pagination = require("../../../helper/pagination");
const Products = require("./products.modal");

exports.create = async (products) => {
  try {
    const info = new Products({
      productName: products.productName,
      productImg: products.productImg,
      productDescription: products.productDescription,
      categoryId: products.categoryId,
    });
    const productsData = await info.save();

    if (productsData) {
      return {
        success: true,
        message: "Product added!",
        data: productsData,
      };
    } else {
      return {
        success: false,
        message: "Product not added!",
        data: "",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "ERROR_ADDING_PRODUCT_DETAILS",
      data: error.message,
    };
  }
};

exports.list = async (where, datum) => {
  try {
    const respose = await pagination.list(Products, where, datum, ["categoryId"]);
    if (respose) {
      return {
        success: true,
        message: responseMessages.dataFound,
        data: respose,
      };
    } else {
      return {
        success: false,
        message: responseMessages.dataNotFound,
        data: respose,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error,
      data: null,
    };
  }
};
exports.update = async (params_id, category) => {
  try {
    const options = { new: true };
    const result = await Products.findByIdAndUpdate(
      params_id,
      category,
      options
    );

    if (result) {
      return {
        success: true,
        message: "Product updated!",
        data: result,
      };
    } else if (!result) {
      return {
        success: false,
        message: "Product not updated!",
        data: null,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error,
      data: null,
    };
  }
};
exports.softDelete = async (params_id) => {
  try {
    const result = await Products.findByIdAndUpdate(params_id, {
      isActive: false,
    });
    if (result) {
      return {
        success: true,
        message: "Product deleted!",
        data: result,
      };
    } else {
      return {
        success: false,
        message: "Product not deleted!",
        data: null,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error,
      data: null,
    };
  }
};
exports.Exists = async (where) => {
  try {
    const user = await Products.findOne(where);

    if (user) {
      return { success: true, message: responseMessages.userFound, data: user };
    } else {
      return {
        success: false,
        message: responseMessages.userNotFound,
        data: null,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error,
      data: null,
    };
  }
};
