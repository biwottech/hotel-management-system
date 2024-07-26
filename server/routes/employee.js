const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

router.get("/users", getAllEmployees);
router.get("/users/:id", getEmployeeById);
router.post("/users", createEmployee);
router.put("/users/:id", updateEmployee);
router.get("/users/:id", deleteEmployee);

module.exports = router;
