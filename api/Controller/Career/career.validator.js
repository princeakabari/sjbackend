const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.career = (req, res, next) => {
  try {
    if (req.body) {
      const schema = Joi.object({
        post: Joi.string().required(),
        jobLocation: Joi.string(),
        department: Joi.string(),
        gender: Joi.string(),
        experience: Joi.string(),
        training: Joi.string(),
        salary: Joi.string(),
        otherBenefits: Joi.string(),
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
