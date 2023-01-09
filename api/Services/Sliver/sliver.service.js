const Sliver = require("../Sliver/sliver.modal");
const { responseMessages } = require("../../../helper/responseMessages");
const pagination = require("../../../helper/pagination");

exports.create = async (sliver, file) => {
  try {
    const info = new Sliver({
      sliverName: sliver.sliverName,
      sliverImg: file.path,
    });

    const sliverData = await info.save();

    if (sliverData) {
      return {
        success: true,
        message: "Sliver created!",
        data: sliverData,
      };
    } else {
      return {
        success: false,
        message: "Sliver not created!",
        data: "",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "ERROR_ADDING_CATEGORY_DETAILS",
      data: error.message,
    };
  }
};

exports.list = async (where, datum) => {
  try {
    const respose = await pagination.list(Sliver, where, datum);
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
exports.update = async (params_id, sliver, file) => {
  try {
    const options = { new: true };
    let reqBody = {
      ...sliver,
      sliverImg: file.path,
    };
    const result = await Sliver.findByIdAndUpdate(params_id, reqBody, options);
    if (result) {
      return {
        success: true,
        message: "Sliver updated!",
        data: result,
      };
    } else if (!result) {
      return {
        success: false,
        message: "Sliver not updated!",
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
exports.wIupdate = async (params_id, sliver) => {
  try {
    const options = { new: true };
    const result = await Sliver.findByIdAndUpdate(params_id, sliver, options);
    if (result) {
      return {
        success: true,
        message: "Sliver updated!",
        data: result,
      };
    } else if (!result) {
      return {
        success: false,
        message: "Sliver not updated!",
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
    const result = await Sliver.findByIdAndUpdate(params_id, {
      isActive: false,
    });
    if (result) {
      return {
        success: true,
        message: "Sliver status has been changed!",
        data: result,
      };
    } else {
      return {
        success: false,
        message: "Sliver status has been not changed!",
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
    const user = await Sliver.findOne(where);

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
exports.Img_update = async (params_id, file, body) => {
  try {
    let productInfo = { ...body };
    console.log("1", body);
    if (typeof body.sliverImg === "string") {
      productInfo["sliverImg"] = body.sliverImg;
    } else {
      productInfo["sliverImg"] = file.path;
    }

    const result = await Product.findByIdAndUpdate(params_id, productInfo);

    if (result) {
      return {
        success: true,
        message: "Product updated successfully",
        data: result,
      };
    } else {
      return {
        success: false,
        message: "Product not updated ",
        data: null,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: error,
      data: null,
    };
  }
};
