const express = require("express");
const path = require("path");
const app = express();

const staticDirectoryPublic = path.join(__dirname, "/public");

app.use("/", express.static(staticDirectoryPublic));

app.get("/api/config", (req, res) => {
  const data = {
    backend1: process.env.SERVICE_API1_ENDPOINT || "http://localhost:19010/api",
  };

  res.json(data);
});

app.get("*", (req, res) => {
  res.sendFile(`${staticDirectoryPublic}/index.html`);
});

const port = process.env.PORT || 19000;
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
