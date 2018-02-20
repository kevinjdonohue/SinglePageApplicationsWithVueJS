const express = require("express");
const app = express();
const path = require("path");
const open = require("open");

// serves the static module of express to serve the statics from the dist folder
app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

require("./build/dev-server")(app);

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "./index.html"));
});

const port = process.env.port || 3000;

app.listen(port, error => {
  if (error) {
    console.log(error);
  } else {
    open(`http://localhost:${port}`, "firefox");
  }
});
