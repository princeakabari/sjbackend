const Banner = require("../Banner/banner.modal");
const { responseMessages } = require("../../../helper/responseMessages");
const pagination = require("../../../helper/pagination");

exports.create = async (banner) => {
  try {
    const info = new Banner({
      bannerName: banner.bannerName,
      bannerImg: banner.bannerImg,
    });
  
    const bannerData = await info.save();

    if (bannerData) {
      return {
        success: true,
        message: "Banner created!",
        data: bannerData,
      };
    } else {
      return {
        success: false,
        message: "Banner not created!",
        data: "",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "ERROR_ADDING_Banner_DETAILS",
      data: error.message,
    };
  }
};

exports.list = async (where, datum) => {
  try {
    const respose = await pagination.list(Banner, where, datum);
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
exports.update = async (params_id, data) => {
  try {
    const options = { new: true };
    const result = await Banner.findByIdAndUpdate(params_id, data, options);

    if (result) {
      return {
        success: true,
        message: "Banner updated!",
        data: result,
      };
    } else if (!result) {
      return {
        success: false,
        message: "Banner not updated!",
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
    const result = await Banner.findByIdAndUpdate(params_id, {
      isActive: false,
    });
    if (result) {
      return {
        success: true,
        message: "Banner status has been changed!",
        data: result,
      };
    } else {
      return {
        success: false,
        message: "Banner status has been not changed!",
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
    const user = await Banner.findOne(where);

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