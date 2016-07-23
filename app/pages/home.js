"use strict";

const m = require("mithril"),

      header = require("../modules/header");

module.exports = {
    view : (ctrl, options) => [
        m(header),
        m("a[href=/posts]", "CONTINUE")
    ]
};
