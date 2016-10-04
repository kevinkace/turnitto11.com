"use strict";

const home   = require("../pages/home"),
      layout = require("../modules/layout"),

      render  = require("mithril-node-render"),
      sub     = require("string-template");

module.exports = function(req, res) {
    res.send(sub(layout, { content : render(home) }));
};
