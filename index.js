const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./routes/index");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
