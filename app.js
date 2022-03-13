const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

const routes = require("./routers/routes");

//set ups
app.set("port", 3001);
app.set("views", (path.join(__dirname, "view")));
app.engine("html", require("pug").renderFile);
app.set("view engine", "pug");

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/", routes);

module.exports = app;