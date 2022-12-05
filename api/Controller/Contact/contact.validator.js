const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.contact = (req, res, next) => {
  try {
    if (req.body) {
      const schema = Joi.object({
        lastName: Joi.string(),
        firstName: Joi.string(),
        email: Joi.string(),
        phoneNo: Joi.string(),
        msg: Joi.string(),
      });

      let data = schema.validate(req.body);
      if (data.error) {
        return res.status(400).send(data.error);
      } else {
        next();
      }
    } else {
      return res.send("ERROR HAPPEND");
    }
  } catch (error) {
    return res.send("ERROR HAPPEND");
  }
};
