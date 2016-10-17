"use strict";

const MarkdownIt = require("markdown-it"),
    md           = new MarkdownIt({ html : true }),

    each = require("lodash/each");

module.exports = {
    markdownIt  : MarkdownIt,
    markdown    : md,
    mdPostsData : (postsData) => {
        each(postsData, (post) => {
            post.fields.body = md.render(post.fields.body);
        });

        return postsData;
    }
};
