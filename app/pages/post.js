"use strict";

const m = require("mithril"),

      header = require("../modules/header"),

      css = require("./post.css");

module.exports = {
    controller : (state) => {
        state = state || {};

        if(!state.posts || state.posts[m.route.param("id")]) {
            state = {
                title : "fake title",
                body  : "fake body",
                nav   : []
            };
        }
    },
    view : (ctrl, state) => [
        m(header),
        m("div", { class : css.container },
            m("h2", { class : css.title }, state.title),
            m.trust(state.body),
            m("ul", { class : css.nav },
                Object.keys(state.nav).map((link, idx) =>
                    m("li", { class : css[`navItem${idx}`] },
                        m("a", {
                            href  : state.nav[link],
                            class : css.navLink
                        }, link)
                    )
                )
            )
        )
    ]
};
