const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/golden");
  },
  filename: function (req, file, cb) {
    cb(null, "spc-" + Date.now() + "." + file.originalname.split(".")[1]);
  },
});
const uploadImg = multer({ storage: storage }).single("goldenImg");

const goldenService = require("../../Services/Golden/golden.service");
const goldenValidator = require("../../Controller/Golden/golden.validator");

router.post("/", uploadImg, goldenValidator.golden, async (req, res) => {
  try {
    let { success, message, data } = await goldenService.create(
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
    let { success, message, data } = await goldenService.list(
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
    let { success, message, data } = await goldenService.update(
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
    let { success, message, data } = await goldenService.withoutImgupdate(
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
    let { success, message, data } = await goldenService.softDelete(
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
    let { success, message, data } = await goldenService.Exists({
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
