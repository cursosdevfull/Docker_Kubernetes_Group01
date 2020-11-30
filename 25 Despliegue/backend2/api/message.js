const express = require("express");
const router = express.Router();

router.get("/api/message", (req, res) => {
  const data = {
    message: "This is message from backend2",
  };

  res.status(200).json(data);
});

module.exports = router;
