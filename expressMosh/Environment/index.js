const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.end("Yes I did it ");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listing port ${port}`);
});
