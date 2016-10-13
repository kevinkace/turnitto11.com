"use strict";

const config = require("../../config.json"),
    fb       = require("firebase").initializeApp(config.firebase);

module.exports = fb;