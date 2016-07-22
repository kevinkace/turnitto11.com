"use strict";

module.exports = {
    "/" : {
        name      : "home",
        component : require("./pages/home")
    },
    "/posts" : {
        name      : "posts",
        component : require("./pages/post")
    },
    "/posts/:id" : {
        name      : "post",
        component : require("./pages/post")
    }
};
