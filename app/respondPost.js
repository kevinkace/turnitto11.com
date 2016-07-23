"use strict";

const render = require("mithril-node-render"),
      sub    = require("string-template"),

      post   = require("./pages/post"),
      layout = require("./modules/layout");

module.exports = (req, res, postO) => {
    let module = {
            view : post.view.bind(null,
                post.controller || {},
                postO
            )
        },
        rendered = sub(layout, { content : render(module) });

    res.send(rendered);

    return Promise.resolve(rendered);
};
