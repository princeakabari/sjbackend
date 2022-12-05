const Career = require("../Career/career.modal");
const { responseMessages } = require("../../../helper/responseMessages");
const pagination = require("../../../helper/pagination");

exports.create = async (career) => {
  try {
    const info = new Career({
      post: career.post,
      jobLocation: career.jobLocation,
      department: career.department,
      gender: career.gender,
      experience: career.experience,
      training: career.training,
      salary: career.salary,
      otherBenefits: career.otherBenefits,
    });
    const careerData = await info.save();

    if (careerData) {
      return {
        success: true,
        message: "Career created!",
        data: careerData,
      };
    } else {
      return {
        success: false,
        message: "Career not created!",
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
    const respose = await pagination.list(Career, where, datum);
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
exports.update = async (params_id, career) => {
  try {
    const options = { new: true };
    const result = await Career.findByIdAndUpdate(params_id, career, options);

    if (result) {
      return {
        success: true,
        message: "Career updated!",
        data: result,
      };
    } else if (!result) {
      return {
        success: false,
        message: "Career not updated!",
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
    const result = await Career.findByIdAndUpdate(params_id, {
      isActive: false,
    });
    if (result) {
      return {
        success: true,
        message: "Career status has been changed!",
        data: result,
      };
    } else {
      return {
        success: false,
        message: "Career status has been not changed!",
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
    const user = await Career.findOne(where);

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