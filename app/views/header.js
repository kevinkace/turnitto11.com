"use strict";

const m = require("mithril"),

    css = require("./header.css");

module.exports = {
    view : (ctrl, opts) => m("h1", { class : css[ opts && opts.page || "h1" ] },
        m("a", { href : (opts && opts.link) || "/" },
            m("svg", {
                    class   : css.logo,
                    viewbox : [ 0, 0, 405.5, 112.76 ].join(" ")
                },
                m("title", "TURN IT TO 11"),
                m("use", {
                    href : "/img/icons.svg#turn11"
                })
            )
        )
    )
};
