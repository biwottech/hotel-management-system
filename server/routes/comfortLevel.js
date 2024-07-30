const express = require("express");
const router = express.Router();
const {
  createComfortLevel,
  getAllComfortLevels,
  getComfortLevelById,
  updateComfortLevel,
  deleteComfortLevel,
} = require("../controllers/comfortLevelController");

router.get("/", getAllComfortLevels);
router.get("/:id", getComfortLevelById);
router.post("/", createComfortLevel);
router.put("/:id", updateComfortLevel);
router.delete("/:id", deleteComfortLevel);

module.exports = router;
