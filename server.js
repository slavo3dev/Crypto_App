const express = require("express");
const app = express();
const catMe = require("cat-me");

app.use(express.static("build"));

app.get((res, req) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server is working on port ${port} `);
  console.log(catMe());
});
