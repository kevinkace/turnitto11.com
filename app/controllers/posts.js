"use strict";

const db = require("../util/firebase").database();

module.exports = function(req, res) {
    db.ref("t11/content/post")
        .limitToLast(1)
        .once("value")
        .then((snapshot) => {
            res.send(snapshot.val());
        });
    // res.state = {
    //     posts : {
    //         all : posts,
    //         cur : {
    //             filename : posts[0]
    //         },
    //         prev : {
    //             filename : posts[1]
    //         }
    //     }
    // };


    // fs.readFile(`./app/posts/${res.state.posts.cur.filename}`, { encoding : "utf8" })
    //     .then(prepPost.bind(null, req, res))
    //     .then(respondPost.bind(null, req, res))
    //     .catch((reason) => {
    //         res.status(500).send(`Done goofed ${reason}`);
    //         console.log("Error prepping post");
    //     });
};
