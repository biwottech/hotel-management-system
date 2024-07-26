const express = require("express");
const router = express.Router();
const {
  createRoleResponsibility,
  getAllRoleResponsibilitys,
  getRoleResponsibilityById,
  updateRoleResponsibility,
  deleteRoleResponsibility,
} = require("../controllers/roleResponsibilityController");

router.get("/", getAllRoleResponsibilitys);
router.get("/:id", getRoleResponsibilityById);
router.post("/", createRoleResponsibility);
router.put("/:id", updateRoleResponsibility);
router.get("/:id", deleteRoleResponsibility);

module.exports = router;
