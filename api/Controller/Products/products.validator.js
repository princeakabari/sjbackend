const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.products = (req, res, next) => {
  try {
    if (req.body) {
      const schema = Joi.object({
        productName: Joi.string().required(),
        productImg: Joi.string(),
        productDescription: Joi.string(),
        categoryId: Joi.objectId(),
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
