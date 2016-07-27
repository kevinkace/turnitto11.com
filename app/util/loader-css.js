"use strict";

const fs   = require("fs"),
      path = require("path"),

      sepRegExp = new RegExp(`\\${path.sep}`, "g");

let classes = {};

classes = JSON.parse(fs.readFileSync("./app/classes.json", { encoding : "utf8" }));

module.exports = function() {
    require.extensions[".css"] = (m, filename) => {
        let k = path.relative(process.cwd(), filename).replace(sepRegExp, "/");

        return m._compile(`module.exports = ${JSON.stringify(classes[k], null, 4)};`, filename);
    };
};
