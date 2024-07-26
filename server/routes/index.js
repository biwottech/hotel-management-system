const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).send({ success: true, message: "This is the home route" });
});



module.exports = router;
