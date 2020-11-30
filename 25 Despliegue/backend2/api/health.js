const express = require("express");
const router = express.Router();

router.get("/api/health", (req, res) => res.status(200).send("I am alive"));

module.exports = router;
