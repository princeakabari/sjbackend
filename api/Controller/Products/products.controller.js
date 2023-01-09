const express = require("express");
const router = express.Router();
const multer = require("multer");

const productService = require("../../Services/Products/products.service");
const productValidator = require("../Products/products.validator");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/sliverproducts");
  },
  filename: function (req, file, cb) {
    cb(null, "sp-" + Date.now() + "." + file.originalname.split(".")[1]);
  },
});

const uploadImg = multer({ storage: storage }).single("productImg");

router.post("/", uploadImg, productValidator.products, async (req, res) => {
  try {
    let { success, message, data } = await productService.create(
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

router.post("/list", async (req, res) => {
  try {
    let { success, message, data } = await productService.list(
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
    let { success, message, data } = await productService.update(
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
  try {
    let { success, message, data } = await productService.wIupdate(
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
    let { success, message, data } = await productService.softDelete(
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
    let { success, message, data } = await productService.Exists({
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
