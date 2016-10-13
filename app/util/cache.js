"use strict";

const cache  = require("memory-cache");

function getCached(source, opts, key) {
    let result = cache.get(key);

    if(!result) {
        return source(opts, key);
    }

    return result;
}

module.exports = function(source, opts, key) {
    let opts = Object.assign({
        ttl : 0
    });

    return getCached(source, opts, key);
};
