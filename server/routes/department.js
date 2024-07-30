const express = require("express");
const router = express.Router();
const {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  getAllSections,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");

router.get("/", getAllDepartments);
router.get("/sections/:id", getAllSections);
router.get("/single/:id", getDepartmentById);
router.post("/", createDepartment);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);

module.exports = router;
