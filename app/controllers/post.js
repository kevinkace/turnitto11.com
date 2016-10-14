"use strict";

const db   = require("../util/firebase").database(),
    respond = require("./respondPost");

module.exports = function(req, res) {
    db.ref("t11/content/post")
        // .limitToLast(2)
        .once("value")
        .then((snapshot) => {
            let val      = snapshot.val(),
                postIdx,
                postIds  = Object.keys(val)
                    // todo: this sort is wrong
                    .sort((id1, id2) => val[id1].published_at > val[id2].published_at ? -1 : 1)
                    .map((id, idx) => {
                        if(val[id].slug === req.params.slug) {
                            postIdx = idx;
                        }

                        return id;
                    }),
                postsData = {
                    curr : val[postIds[postIdx]],
                    prev : val[postIds[postIdx + 1]],
                    next : val[postIds[postIdx - 1]]
                };

            return postsData;
        })
        .then(respond.bind(null, req, res))
        .catch((e) => console.log(`Post failed: ${e}`));
};
