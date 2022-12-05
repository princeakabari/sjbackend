const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.category = (req, res, next) => {
  try {
    if (req.body) {
      const schema = Joi.object({
        categoryName: Joi.string().required(),
        categoryImg: Joi.string(),
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
