"use strict";

const home   = require("../pages/home"),
      layout = require("../modules/layout");

module.exports = function(req, res) {
    res.send(sub(layout, { content : render(home) }));
};
