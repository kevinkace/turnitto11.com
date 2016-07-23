"use strict";

const m = require("mithril"),

      header = require("../modules/header");;

module.exports = {
    view : (ctrl, state) => [
        m("header"),
        m("h2", state.title),
        m.trust(state.body),
        m("ul",
            Object.keys(state.nav).map((link) =>
                m("li",
                    m(`a[href=${state.nav[link]}]`, link)
                )
            )
        )
    ]
};
