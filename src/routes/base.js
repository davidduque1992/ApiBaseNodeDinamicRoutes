const express = require("express");
const router = express.Router();
const {
  getDetail,
  getList,
  updateItem,
  createItem,
  deleteItem,
} = require("../controllers/base");

router.get("", getList);
router.get("/:id", getDetail);
router.post("", createItem);
router.delete("/:id", deleteItem);
router.put("/:id", updateItem);

module.exports = router;
