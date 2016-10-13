"use strict";

// const db = require("../util/firebase");
const config = require("../../config.json"),
    fb       = require("firebase").initializeApp(config.firebase),

    db = fb.database();

module.exports = function(req, res) {
    db.ref("t11/content/post")
        .once("value")
        .then((snapshot) => {
            console.log(snapshot.val());
            res.send("snappy");
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
