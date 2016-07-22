"use strict";

const Processor = require("modular-css"),
      processor = new Processor({
          done : [
            require("postcss-import"),
            require("postcss-nested")
        ]
      }),

      fs = require("fs-promise");

processor.file("./public/mcss/index.css")
    .then(() => processor.output())
    .then((result) => fs.writeFile("./public/css/index.css", result.css))
    .catch((reason) => {
        console.log(`bad build ${reason}`);
    });
