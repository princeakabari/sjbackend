const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/goldenproducts");
  },
  filename: function (req, file, cb) {
    cb(null, "spc-" + Date.now() + "." + file.originalname.split(".")[1]);
  },
});
const uploadImg = multer({ storage: storage }).single("goldenproductImg");
const goldenproductService = require("../../Services/GoldenProducts/goldenproducts.service");
const goldenproductValidator = require("../GoldenProducts/goldenproducts.validator");

router.post(
  "/",
  uploadImg,
  goldenproductValidator.goldenproducts,
  async (req, res) => {
    try {
      let { success, message, data } = await goldenproductService.create(
        req.body,
        req.file
      );

      if (success) {
        return res.status(200).json({ success, message, data });
      } else {
        return res.status(400).json({ success, message, data });
      }
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
);
router.post("/list", async (req, res) => {
  try {
    let { success, message, data } = await goldenproductService.list(
      req.body.where,
      req.body.pagination
    );
    if (success) {
      return res.status(200).json({ success, message, data });
    } else {
      return res.status(400).json({ success, message, data });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
router.put("/:id", uploadImg, async (req, res) => {
  try {
    let { success, message, data } = await goldenproductService.update(
      req.params.id,
      req.body,
      req.file
    );

    if (success) {
      return res.status(200).json({ success, message, data });
    } else {
      return res.status(400).json({ success, message, data });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.patch("/:id", async (req, res) => {
  console.log("1")
  try {
    let { success, message, data } = await goldenproductService.wIupdate(
      req.params.id,
      req.body
    );

    if (success) {
      return res.status(200).json({ success, message, data });
    } else {
      return res.status(400).json({ success, message, data });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let { success, message, data } = await goldenproductService.softDelete(
      req.params.id
    );
    if (success) {
      return res.status(200).json({ success, message, data });
    } else {
      return res.status(400).json({ success, message, data });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
router.get("/:id", async (req, res) => {
  try {
    let { success, message, data } = await goldenproductService.Exists({
      _id: req.params.id,
    });
    if (success) {
      return res.status(200).json({ success, message, data });
    } else {
      return res.status(400).json({ success, message, data });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
