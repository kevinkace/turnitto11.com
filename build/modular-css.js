"use strict";

const Processor = require("modular-css"),
    processor = new Processor({
        after : [
            require("postcss-nested")
        ],
        done : [
            require("postcss-import")
        ]
    }),

    fs        = require("fs-promise"),
    path      = require("path"),
    shell     = require("shelljs"),
    detective = require("detective"),

    files = shell.find("./app", "./index.js").filter((file) => path.extname(file) === ".js");

let css = [];

Promise.all(
    files.map((file) =>
        fs.readFile(file, { encoding : "utf8" })
            .then((data) => {
                css = css.concat(
                    detective(data)
                        .filter((input) => path.extname(input) === ".css")
                        .map((input) => path.resolve(path.dirname(file), input))
                );
            })
    )
)
    .then(() =>
        Promise.all(css.map((file) => processor.file(file)))
    )
    .then(() => processor.output())
    .then((result) =>
        Promise.all([
            fs.writeFile("./public/gen/index.css", result.css),
            fs.writeFile("./app/classes.json", JSON.stringify(result.compositions, null, 4))
        ])
    )
    .catch((reason) => {
        console.log(`bad build ${reason}`);
    });
