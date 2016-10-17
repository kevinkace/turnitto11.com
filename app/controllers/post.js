"use strict";

const db   = require("../util/firebase").database(),
    respond = require("./respondPost"),

    markdown = require("../util/markdown").mdPostsData;

module.exports = function(req, res) {
    db.ref("t11/content/post")
        .once("value")
        .then((snapshot) => {
            let val      = snapshot.val(),
                postIdx,
                postIds  = Object.keys(val)
                    .filter((id) => val[id].published_at)
                    .sort((id1, id2) => (val[id1].published_at > val[id2].published_at ? -1 : 1))
                    .map((id, idx) => {
                        if(val[id].slug === req.params.slug) {
                            postIdx = idx;
                        }

                        return id;
                    }),
                postsData = {
                    curr : val[postIds[postIdx]]
                };

                if(!postsData.curr) {
                    return {};
                }

                if(val[postIds[postIdx + 1]]) {
                    postsData.prev = val[postIds[postIdx + 1]];
                }

                if(val[postIds[postIdx - 1]]) {
                    postsData.next = val[postIds[postIdx - 1]];
                }

            return postsData;
        })
        .then(markdown)
        .then(respond.bind(null, req, res))
        .catch((e) => console.log(`Post failed: ${e}`));
};
