"use strict";

module.exports = function(req, res) {
    // fs.readFile(`./app/posts/${res.state.posts.cur.filename}`, { encoding : "utf8" })
    //     .then(prepPost.bind(null, req, res))
    //     .then(respondPost.bind(null, req, res))
    //     .catch((reason) => {
    //         res.status(500).send(`Done goofed ${reason}`);
    //         console.log("Error prepping post");
    //     });

    res.send("pooost");
};
