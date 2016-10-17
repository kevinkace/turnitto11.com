"use strict";

const m = require("mithril"),

      header = require("./header"),

      css = require("./posts.css");

module.exports = {
    view : (ctrl, state) => [
        m(header),
        m("div", { class : css.container },
            m("h1", { class : css.title }, state.curr.fields.title),
            m.trust(state.curr.fields.body),
            m("ul", { class : css.nav },
                [ state.prev, state.next ]
                    .filter((link) => Boolean(link))
                    .map((link, idx) =>
                        m("li", { class : css[`navItem${idx}`] },
                            m("a", {
                                href  : `/posts/${link.slug}`,
                                class : css.navLink
                            }, link.name)
                        )
                )
            )
        )
    ]
};
