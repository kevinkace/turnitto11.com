"use strict";

const m = require("mithril"),

      header = require("../modules/header"),

      css = require("./home.css");

module.exports = {
    view : () => [
        m("div", { class : css.grid },
            m("div", { class : css.cell },
                m(header, { link : "/posts" }),
                m("a[href=/posts]", {
                        class : css.continue
                    }, "CONTINUE")
            )
        ),
        m("video", {
                autoplay : true,
                loop     : true,
                class    : css.video
            },
            m("source", { src : "/vid/turn11.mp4" })
        )
    ]
};
