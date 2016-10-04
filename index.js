"use strict";

require("./app/util/loader-css")();

const express = require("express"),
      app     = express(),

      config = require("./config.json"),

      css = require("./app/index.css"); // eslint-disable-line no-unused-vars

app.use(express.static("public"));

app.get("/", require("./app/controllers/home"));

app.get("/posts", require("./app/controllers/posts"));

app.get("/posts/:date", require("./app/controllers/post"));

app.listen(config.port);
