const Contact = require("../Contact/contact.modal");
const { responseMessages } = require("../../../helper/responseMessages");
const pagination = require("../../../helper/pagination");
const email = require("../../../helper/email");
exports.create = async (contact) => {
  try {
    const info = new Contact({
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phoneNo: contact.phoneNo,
      msg: contact.msg,
    });
    const contactData = await info.save();
    // const { contactData, messageMail } = await email.sendFor(contactData);
    if (contactData) {
      return {
        success: true,
        message: "Data sent successfully",
        data: contactData,
      };
    } else {
      return {
        success: false,
        message: "Data not sent ",
        data: messageMail,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "ERROR_ADDING_Contact_DETAILS",
      data: error.message,
    };
  }
};

exports.list = async (where, datum) => {
  try {
    const respose = await pagination.list(Contact, where, datum);
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
    const result = await Contact.findByIdAndUpdate(params_id, data, options);

    if (result) {
      return {
        success: true,
        message: "Contact updated!",
        data: result,
      };
    } else if (!result) {
      return {
        success: false,
        message: "Contact not updated!",
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
    const result = await Contact.findByIdAndUpdate(params_id, {
      isActive: false,
    });
    if (result) {
      return {
        success: true,
        message: "Contact status has been changed!",
        data: result,
      };
    } else {
      return {
        success: false,
        message: "Contact status has been not changed!",
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
