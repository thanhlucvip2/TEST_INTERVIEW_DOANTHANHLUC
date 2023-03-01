require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const mainRouter = require("./routes/main-router");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/api", mainRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
