"use strict";

module.exports = (filename) => {
    let parts = filename.split(".");

    return parts.slice(0, parts.length - 1).join(".");
};
