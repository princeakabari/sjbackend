const { responseMessages } = require("../../../helper/responseMessages");
const pagination = require("../../../helper/pagination");
const Goldenproducts = require("./goldenproducts.modal");

exports.create = async (goldenproducts, file) => {
  try {
    const info = new Goldenproducts({
      goldenproductName: goldenproducts.goldenproductName,
      goldenproductImg: file.path,
      goldenproductDescription: goldenproducts.goldenproductDescription,
      categoryId: goldenproducts.categoryId,
    });
    const goldenproductsData = await info.save();

    if (goldenproductsData) {
      return {
        success: true,
        message: "Goldenproduct added!",
        data: goldenproductsData,
      };
    } else {
      return {
        success: false,
        message: "Goldenproduct not added!",
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
    const respose = await pagination.list(Goldenproducts, where, datum, [
      "categoryId",
    ]);
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
exports.update = async (params_id, category, file) => {
  try {
    const options = { new: true };
    let reqBody = {
      ...category,
      goldenproductImg: file.path,
    };
    const result = await Goldenproducts.findByIdAndUpdate(
      params_id,
      reqBody,
      options
    );

    if (result) {
      return {
        success: true,
        message: "Goldenproduct updated!",
        data: result,
      };
    } else if (!result) {
      return {
        success: false,
        message: "Goldenproduct not updated!",
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
    const result = await Goldenproducts.findByIdAndUpdate(params_id, {
      isActive: false,
    });
    if (result) {
      return {
        success: true,
        message: "Goldenproduct deleted!",
        data: result,
      };
    } else {
      return {
        success: false,
        message: "Goldenproduct not deleted!",
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
    const user = await Goldenproducts.findOne(where);

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
