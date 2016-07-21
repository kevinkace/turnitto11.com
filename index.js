"use strict";

const express = require("express"),
      app     = express(),
      render  = require("mithril-node-render"),
      sub     = require("string-template"),
      fs      = require("fs-promise"),

      prepPost    = require("./app/prepPost"),
      respondPost = require("./app/respondPost"),

      home   = require("./app/home"),
      layout = require("./app/layout"),

      removeExt = require("./app/util/removeExt");

let posts;

fs.readdir("./app/posts")
    .then((files) => {
        let sortedFiles = files.sort((date1, date2) => {
            let d1 = date1.split("-"),
                d2 = date2.split("-");

            if(d1[2] > d2[2]) {
                return -1;
            }
            if(d1[2] < d2[2]) {
                return 1;
            }

            if(d1[1] > d2[1]) {
                return -1;
            }
            if(d1[1] < d2[1]) {
                return 1;
            }

            if(d1[0] > d2[0]) {
                return -1;
            }
            if(d1[0] < d2[0]) {
                return 1;
            }

            return 0;
        });

        return Promise.resolve(sortedFiles);
    })
    .then((files) => {
        posts = files;
        // todo: register routes here
    })
    .catch((reasons) => {
        console.log(`Error reading files, ${reasons}`);
    });

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(sub(layout, { content : render(home) }));
});

app.get("/posts", (req, res) => {
    res.state = {
        posts : {
            all : posts,
            cur : {
                filename : posts[0]
            },
            prev : {
                filename : posts[1]
            }
        }
    };

    fs.readFile(`./app/posts/${res.state.posts.cur.filename}`, { encoding : "utf8" })
        .then(prepPost.bind(null, req, res))
        .then(respondPost.bind(null, req, res))
        .catch((reason) => {
            res.status(500).send(`Done goofed ${reason}`);
            console.log("Error prepping post");
        });
});

app.get("/posts/:date", (req, res) => {
    let index = posts
            .map(removeExt)
            .indexOf(req.params.date),
        next  = { filename : posts[index - 1] },
        prev  = { filename : posts[index + 1] };

    if(index === -1) {
        res.redirect("/");
    }

    switch(index) { // eslint-disable-line default-case
        case 0:
            next = false;
            break;
        case (posts.length - 1):
            prev = false;
            break;
    }

    res.state = {
        posts : {
            all : posts,
            cur : {
                filename : posts[index]
            },
            prev : prev,
            next : next
        }
    };

    fs.readFile(`./app/posts/${res.state.posts.cur.filename}`, { encoding : "utf8" })
        .then(prepPost.bind(null, req, res))
        .then(respondPost.bind(null, req, res))
        .catch((reason) => {
            res.status(500).send(`Done goofed ${reason}`);
            console.log("Error prepping post");
        });
});

app.listen("420");
