"use strict";

const m = require("mithril");

module.exports = {
    view : () =>
        m("h1",
            m("a[href=/]",
                m("svg", {
                        class   : "mc4e206468_logo",
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
