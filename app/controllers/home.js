"use strict";

const home   = require("../views/home"),
      layout = require("../views/layout"),

      render  = require("mithril-node-render"),
      sub     = require("string-template");

module.exports = function(req, res) {
    res.send(sub(layout, { content : render(home) }));
};
