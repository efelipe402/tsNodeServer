"use strict";
exports.__esModule = true;
var express = require("express");
exports.app = express();
exports.app.use(function (req, res, next) {
    res.status(200).send({ message: 'it Works' });
});
