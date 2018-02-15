const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})();

// serves the static module of express to serve the statics from the dist folder
app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

app.get("*", (request, response) => {
  response.write(indexHTML);
  response.end();
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
