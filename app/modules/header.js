"use strict";

const m = require("mithril");

module.exports = m("h1",
    m("a[href=/]",
        m.trust("TURN <br>IT&nbsp;TO&nbsp;11")
    )
);
