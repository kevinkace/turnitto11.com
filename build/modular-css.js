"use strict";

const Processor = require("modular-css"),
      processor = new Processor({

      }),

      fs = require("fs-promise");

processor.file("./public/mcss/index.css")
    .then(() => processor.output())
    .then((result) => {
        console.log(result.css);

        return fs.writeFile("./public/css/index.css", result.css);
    })
    .catch((reason) => {
        console.log(`bad build ${reason}`);
    });
