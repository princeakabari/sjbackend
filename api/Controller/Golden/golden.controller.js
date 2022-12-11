const express = require("express");
const router = express.Router();

const goldenService = require("../../Services/Golden/golden.service");
const goldenValidator = require("../../Controller/Golden/golden.validator");

router.post("/", goldenValidator.golden, async (req, res) => {
  try {
    let { success, message, data } = await goldenService.create(req.body);

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
router.put("/:id", async (req, res) => {
  try {
    let { success, message, data } = await goldenService.update(
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
