"use strict";

const MarkdownIt = require("markdown-it"),
      md         = new MarkdownIt({ html : true }),

      removeExt = require("./util/removeExt");

module.exports = (req, res, file) => {
    let body = file
            .split("\n")
            .slice(2)
            .join("\n"),
        postO = {
            title : removeExt(res.state.posts.cur.filename),
            body  : md.render(body)
        },
        nav = {};

        if(res.state.posts.prev) {
            nav.prev = `/posts/${removeExt(res.state.posts.prev.filename)}`;
        }

        if(res.state.posts.next) {
            nav.next = `/posts/${removeExt(res.state.posts.next.filename)}`;
        }

        postO.nav = nav;

    return Promise.resolve(postO);
};
