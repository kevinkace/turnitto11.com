"use strict";

const m = require("mithril"),

      header = require("../modules/header");

module.exports = {
    view : (ctrl, options) => [
        m("div", { class : "grid" },
            m("div", { class : "mc4e206468_cell" },
                m(header),
                m("a[href=/posts]", {
                        class : "mc4e206468_continue"
                    }, "CONTINUE")
            )
        ),
        m("video", {
                autoplay : true,
                loop     : true,
                class    : "mc4e206468_videobg"
            },
            m("source", { src : "/vid/turn11.mp4" })
        )
    ]
};
