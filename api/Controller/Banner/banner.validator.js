const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.banner = (req, res, next) => {
  try {
    if (req.body) {
      const schema = Joi.object({
        bannerName: Joi.string().required(),
        bannerImg: Joi.string(),
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
