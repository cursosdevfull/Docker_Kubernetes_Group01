const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./api/health"));
app.use(require("./api/message"));

app.use("*", (req, res) => res.sendStatus(400));

const port = process.env.PORT || 19020;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
