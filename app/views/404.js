"use strict";

const m = require("mithril"),

      header = require("./header"),

      css = require("./posts.css");

module.exports = {
    view : () => [
        m(header),
        m("div", { class : css.container },
            m("h1", { class : css.title }, "404")
        )
    ]
};
