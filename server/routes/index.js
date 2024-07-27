const express = require("express");
const roleRouter = require("./role");
const departmentRouter = require("./department");
const employeeRouter = require("./employee");
const packageRoutes = require("./packageRoutes");
const roomRouter = require("./roomRoutes");
const roleResponsibilityRouter = require("./roleResponsibility");
const router = express.Router();

router.use("/roles", roleRouter);
router.use("/roleResponsibilities", roleResponsibilityRouter);
router.use("/departments", departmentRouter);
router.use("/employees", employeeRouter);
router.use("/packages", packageRoutes);
router.use("/rooms", roomRouter);

router.get("/", (req, res) => {
  res.status(201).send({ success: true, message: "This is the home route" });
});

module.exports = router;
