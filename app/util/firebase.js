"use strict";

const config = require("../../config.json"),
    firebase = require("firebase").initializeApp(config.firebase);

module.exports = firebase;
