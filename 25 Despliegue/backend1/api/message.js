const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/api/message", (req, res) => {
  const data = {
    backend1: {
      message: "This is a message from backend1",
    },
    backend2: {
      message: null,
    },
  };

  const endpoint2 =
    process.env.SERVICE_API2_ENDPOINT || "http://localhost:19020/api";

  axios.get(endpoint2 + "/message").then(
    (response) => {
      data.backend2.message = response.data.message;
      res.json(data);
    },
    (error) => {
      console.log(error);
      res.send(error);
    }
  );
});

module.exports = router;
