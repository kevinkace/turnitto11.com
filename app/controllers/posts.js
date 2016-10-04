"use strict";

module.exports = function(req, res) {
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

    res.send("oh shit");

    // fs.readFile(`./app/posts/${res.state.posts.cur.filename}`, { encoding : "utf8" })
    //     .then(prepPost.bind(null, req, res))
    //     .then(respondPost.bind(null, req, res))
    //     .catch((reason) => {
    //         res.status(500).send(`Done goofed ${reason}`);
    //         console.log("Error prepping post");
    //     });
};
