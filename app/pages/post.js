"use strict";

const m = require("mithril");

module.exports = {
    view : (ctrl, state) => [
        m("h1",
            m("a[href=/]", "TURN IT TO 11")
        ),
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
