"use strict";

const m    = require("mithril"),
    render = require("mithril-node-render"),
    sub    = require("string-template"),

    cmpts = {
        posts  : require("../views/posts"),
        layout : require("../views/layout")
    };

module.exports = (req, res, postsData) => {
    let component = {
            view : cmpts.posts.view.bind(m,
                cmpts.posts.controller || {},
                postsData
            )
        },
        rendered = sub(cmpts.layout, { content : render(component) });

    res.send(rendered);

    return Promise.resolve(rendered);
};
