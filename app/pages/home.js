"use strict";

const m = require("mithril");

module.exports = {
    view : (ctrl, options) => [
        m("h1", "TURN IT TO 11"),
        m("a[href=/posts]", "CONTINUE")
    ]
};
