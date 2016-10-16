"use strict";

const m    = require("mithril"),
    render = require("mithril-node-render"),
    sub    = require("string-template"),

    cmpts = {
        posts  : require("../views/posts"),
        layout : require("../views/layout"),
        404    : require("../views/404")
    };

module.exports = (req, res, postsData) => {
    let component = {},
        rendered;

        if(Object.keys(postsData).length) {
            component.view = cmpts.posts.view.bind(m,
                cmpts.posts.controller || {},
                postsData
            );
        } else {
            component.view = cmpts[404].view;
        }

         rendered = sub(cmpts.layout, { content : render(component) });

    res.send(rendered);

    return Promise.resolve(rendered);
};
