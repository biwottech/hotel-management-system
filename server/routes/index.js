const express = require("express");
const roleRouter = require("./role");
const router = express.Router();

router.use("/roles", roleRouter);
router.get("/", (req, res) => {
  res.status(201).send({ success: true, message: "This is the home route" });
});

module.exports = router;
