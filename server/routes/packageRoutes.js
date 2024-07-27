const express = require("express");
const router = express.Router();
const packageController = require("../controllers/packageController");

router.post("/", packageController.createPackage);
router.get("/", packageController.getPackages);
router.get("/:id", packageController.getPackage);
router.put("/:id", packageController.updatePackage);
router.delete("/:id", packageController.deletePackage);

module.exports = router;
