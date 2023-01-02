const Golden = require("./golden.modal");
const { responseMessages } = require("../../../helper/responseMessages");
const pagination = require("../../../helper/pagination");

exports.create = async (golden, file) => {
  try {
    const info = new Golden({
      goldenName: golden.goldenName,
      goldenImg: file.path,
    });

    const goldenData = await info.save();

    if (goldenData) {
      return {
        success: true,
        message: "Golden created!",
        data: goldenData,
      };
    } else {
      return {
        success: false,
        message: "Golden not created!",
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
    const respose = await pagination.list(Golden, where, datum);
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
exports.update = async (params_id, golden, file) => {
  try {
    const options = { new: true };
    let reqBody = {
      ...golden,
      goldenImg: file.path,
    };
    const result = await Golden.findByIdAndUpdate(params_id, reqBody, options);
    if (result) {
      return {
        success: true,
        message: "Golden updated!",
        data: result,
      };
    } else if (!result) {
      return {
        success: false,
        message: "Golden not updated!",
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
    const result = await Golden.findByIdAndUpdate(params_id, {
      isActive: false,
    });
    if (result) {
      return {
        success: true,
        message: "Golden status has been changed!",
        data: result,
      };
    } else {
      return {
        success: false,
        message: "Golden status has been not changed!",
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
    const user = await Golden.findOne(where);

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
